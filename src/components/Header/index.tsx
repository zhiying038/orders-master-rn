import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Props } from './props';
import styles from './styles';

const Header: FC<Props> = props => {
  const { title } = props;

  return (
    <View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;
