import React from 'react';
import { Text, SafeAreaView, View, Image, FlatList } from 'react-native';
import { ItemInfoFragment, useGetItemsQuery } from '../../graphql';
import styles from './styles';

const PlaceOrderScreen = () => {
  const { data } = useGetItemsQuery();

  const renderItem = (item: ItemInfoFragment) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={require('../../assets/default-item.jpeg')}
          style={styles.image}
        />

        <View style={styles.description}>
          <Text style={styles.name}>{item?.name}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {item?.currency} {parseFloat(String(item?.price)).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderHeaderView = () => {
    return (
      <View>
        <Text style={styles.headerText}>Place Order</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data?.getItems}
        style={styles.container}
        keyExtractor={item => item.code}
        ListHeaderComponent={renderHeaderView()}
        renderItem={({ item }) => renderItem(item)}
      />
    </SafeAreaView>
  );
};

export default PlaceOrderScreen;
