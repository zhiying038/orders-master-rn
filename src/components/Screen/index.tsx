import cx from 'classnames';
import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTailwind } from 'tailwind-rn';
import { Props } from './props';

const isIos = Platform.OS === 'ios';

const Screen: FC<Props> = props => {
  const { center, style, scrollable, children, childStyle } = props;

  const tailwind = useTailwind();

  const renderChild = () => {
    return (
      <View
        style={[
          tailwind(
            cx('justify-start min-h-full items-stretch', {
              'justify-center': center,
            }),
          ),
          childStyle,
        ]}>
        {children}
      </View>
    );
  };

  return (
    <SafeAreaView style={[tailwind('flex-1'), style]}>
      <KeyboardAvoidingView behavior={isIos ? 'padding' : undefined}>
        {scrollable ? (
          <ScrollView style={tailwind('flex-1 h-full')}>
            {renderChild()}
          </ScrollView>
        ) : (
          renderChild()
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

Screen.defaultProps = {
  center: false,
  scrollable: false,
};

export default Screen;
