import React, { FC } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Props } from './props';
import { useStyles } from './styles';

const Button: FC<Props> = props => {
  const { children, disabled, loading, text, onLongPress, onPress } = props;

  const { touchableStyle, wrapperStyle, btnTextStyle } = useStyles(props);

  return (
    <View style={wrapperStyle}>
      <TouchableOpacity
        style={touchableStyle}
        disabled={disabled || loading}
        onPress={onPress}
        onLongPress={onLongPress}>
        {loading && <ActivityIndicator size="small" />}
        <Text style={btnTextStyle}>{text || children}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  rounded: false,
  disabled: false,
  loading: false,
  size: 'sm',
  type: 'primary',
  center: true,
};

export default Button;
