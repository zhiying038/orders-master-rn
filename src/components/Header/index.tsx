import cx from 'classnames';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTailwind } from 'tailwind-rn';
import Button from '../Button';
import { Props } from './props';

const Header: FC<Props> = props => {
  const { title, backIcon, enableBack, onPressBack, className, textClassname } =
    props;

  const tailwind = useTailwind();

  return (
    <View style={tailwind(cx('flex flex-row items-center', className))}>
      {enableBack && (
        <Button onPress={onPressBack} buttonClassname="bg-transparent pl-0">
          {backIcon ?? <Icon name="arrowleft" size={20} />}
        </Button>
      )}
      <Text style={tailwind(cx('grow font-semibold', textClassname))}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
