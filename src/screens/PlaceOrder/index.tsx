import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import OrderSummary from '../../components/OrderSummary';
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

            <View style={styles.quantityContainer}>
              <TouchableOpacity>
                <Icon name="minuscircle" />
              </TouchableOpacity>

              <Text style={styles.quantity}>0</Text>

              <TouchableOpacity>
                <Icon name="pluscircle" />
              </TouchableOpacity>
            </View>
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

  const renderFooterView = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.divider} />

        <OrderSummary
          contents={[{ label: 'Total Amount', value: 'MYR 189.90' }]}
        />

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Submit</Text>
        </TouchableOpacity>
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
        ListFooterComponent={renderFooterView()}
        renderItem={({ item }) => renderItem(item)}
      />
    </SafeAreaView>
  );
};

export default PlaceOrderScreen;
