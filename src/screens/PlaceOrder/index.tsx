import filter from 'lodash/filter';
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';
import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/AntDesign';
import OrderSummary from '../../components/OrderSummary';
import {
  ItemInfoFragment,
  useCalculateTotalPriceLazyQuery,
  useCreateOrderMutation,
  useGetItemsQuery,
} from '../../graphql';
import { CartProps } from './props';
import styles from './styles';

const PlaceOrderScreen = () => {
  const { data } = useGetItemsQuery();
  const [calculateTotal, { data: priceData }] =
    useCalculateTotalPriceLazyQuery();
  const [createOrder] = useCreateOrderMutation({
    onCompleted: () => {
      showMessage({ message: 'Successfully placed order', type: 'success' });
      setCart([]);
    },
    onError: error => {
      showMessage({ message: error.message, type: 'danger' });
    },
  });

  const [cart, setCart] = useState<CartProps[]>([]);

  const findItemFromCart = (itemCode: string) => {
    const foundIndex = findIndex(cart, ['itemCode', itemCode]);
    return {
      found: foundIndex !== -1,
      index: foundIndex,
      data: cart[foundIndex],
    };
  };

  const handleIncrement = (item: ItemInfoFragment) => {
    const foundItem = findItemFromCart(item.code);
    if (!foundItem.found) {
      const currentCart = [...cart];
      const newItem = { itemCode: item.code, quantity: 1 };
      setCart([...currentCart, newItem]);
      return;
    }

    const quantity = get(foundItem, 'data.quantity', 0);
    const newQuantity = quantity + 1;
    const currentCart = [...cart];
    currentCart[foundItem.index].quantity = newQuantity;
    setCart(currentCart);
  };

  const handleDecrement = (item: ItemInfoFragment) => {
    const foundItem = findItemFromCart(item.code);
    if (foundItem.found) {
      const quantity = get(foundItem, 'data.quantity', 0);
      const nextQuantity = quantity - 1;
      const newQuantity = nextQuantity <= 0 ? 0 : nextQuantity;
      const currentCart = [...cart];
      currentCart[foundItem.index].quantity = newQuantity;
      setCart(currentCart);
    }
  };

  const handleSubmit = () => {
    createOrder({
      variables: {
        input: cart,
      },
    });
  };

  useEffect(() => {
    if (cart.length === 0) {
      return;
    }
    calculateTotal({
      variables: {
        input: cart,
      },
    });
  }, [cart]);

  const price = priceData?.calculateTotalPrice;

  const renderItem = (item: ItemInfoFragment) => {
    const found = findItemFromCart(item.code);
    const quantity = found?.data?.quantity;

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
              <TouchableOpacity onPress={() => handleDecrement(item)}>
                <Icon name="minuscircle" />
              </TouchableOpacity>

              <Text style={styles.quantity}>{quantity ?? 0}</Text>

              <TouchableOpacity onPress={() => handleIncrement(item)}>
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
          contents={[
            {
              label: 'Total Amount',
              value: `${price?.currency ?? 'MYR'} ${parseFloat(
                String(price?.price ?? 0),
              ).toFixed(2)}`,
            },
          ]}
        />

        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={handleSubmit}
          disabled={filter(cart, c => c.quantity !== 0).length === 0}>
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

export const PlaceOrder = PlaceOrderScreen;
export default PlaceOrderScreen;
