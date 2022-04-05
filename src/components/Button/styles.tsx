import cx from 'classnames';
import { StyleSheet, ViewStyle } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Props } from './props';

export const useStyles = (props: Props) => {
  const {
    viewStyle,
    buttonStyle,
    textStyle,
    rounded,
    center,
    loading,
    disabled,
    size,
    type,
    textColor,
    backgroundColor,
    textClassname,
    buttonClassname,
    wrapperClassname,
  } = props;

  const tailwind = useTailwind();

  const wrapperStyle = StyleSheet.flatten([
    viewStyle,
    { backgroundColor },
    tailwind(cx(wrapperClassname)),
  ]) as ViewStyle;

  const touchableStyle = [
    buttonStyle,
    tailwind(
      cx(
        'justify-center rounded-lg flex-row',
        {
          'rounded-full': rounded,
          'items-center': center,
          'opacity-60': loading || disabled,
          'h-7 px-2': size === 'xs',
          'h-10 px-4': size === 'sm',
          'h-12 px-6': size === 'md',
          'h-14 px-8': size === 'lg',
          'bg-primary': type === 'primary',
        },
        buttonClassname,
      ),
    ),
  ];

  const btnTextStyle = [
    textStyle,
    { color: textColor },
    tailwind(cx(textClassname)),
  ];

  return { wrapperStyle, touchableStyle, btnTextStyle };
};
