import React from 'react';
import { Text, View } from 'react-native';
import { Props } from './props';
import styles from './styles';

const OrderSummary: React.FC<Props> = props => {
  const { contents } = props;

  return (
    <View style={styles.container}>
      {contents.map((content, index) => (
        <View key={index} style={styles.summary}>
          <Text style={styles.label}>{content?.label}</Text>
          <Text>{content?.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default OrderSummary;
