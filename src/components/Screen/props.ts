import { StyleProp, ViewStyle } from 'react-native';

export type Props = {
  center?: boolean;
  scrollable?: boolean;
  style?: StyleProp<ViewStyle>;
  childStyle?: StyleProp<ViewStyle>;
};
