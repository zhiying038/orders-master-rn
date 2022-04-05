import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type Props = {
  text?: string;
  center?: boolean;
  block?: boolean;
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;

  textColor?: string;
  backgroundColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'primary';

  onPress?: () => void;
  onLongPress?: () => void;

  textClassname?: string;
  wrapperClassname?: string;
  buttonClassname?: string;

  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
};
