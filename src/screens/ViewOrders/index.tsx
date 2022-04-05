import { StackScreenProps } from '@react-navigation/stack';
import dayjs from 'dayjs';
import reduce from 'lodash/reduce';
import React, { FC, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OrderInfoFragment, useGetPaginatedOrdersQuery } from '../../graphql';
import { AppParamList } from '../../navigations';
import styles from './styles';

const ViewOrdersScreen: FC<
  StackScreenProps<AppParamList, 'viewOrders'>
> = () => {
  const [page, setPage] = useState<number>(1);

  const { data, refetch } = useGetPaginatedOrdersQuery({
    variables: {
      options: { page, limit: 10 },
    },
  });
  const hasMore = data?.getPaginatedOrders?.hasMore ?? false;

  useEffect(() => {
    refetch({
      options: { page, limit: 10 },
    });
  }, [page]);

  const renderHeaderView = () => {
    return (
      <View>
        <Text style={styles.headerText}>View Orders</Text>
      </View>
    );
  };

  const renderItem = (order: OrderInfoFragment) => {
    return (
      <View style={styles.itemSection}>
        <Text style={styles.orderKey}>
          Order {order?.id} ({dayjs(order?.createdAt).format('DD-MM-YYYY')})
        </Text>
        <Text>
          {reduce(order?.orderDetails, (a, b) => a + b.quantity, 0)} item(s)
        </Text>
        <Text style={styles.orderTotal}>
          MYR {parseFloat(String(order?.totalPrice)).toFixed(2)}
        </Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.pagingBtn}
            disabled={page === 1}
            onPress={() => setPage(page - 1)}>
            <Text style={styles.pagingText}>Previous</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.pagingBtn}
            disabled={!hasMore}
            onPress={() => setPage(page + 1)}>
            <Text style={styles.pagingText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item?.createdAt}
        ListHeaderComponent={renderHeaderView()}
        ListFooterComponent={renderFooter()}
        renderItem={({ item }) => renderItem(item)}
        data={data?.getPaginatedOrders?.items ?? []}
      />
    </SafeAreaView>
  );
};

export const ViewOrders = ViewOrdersScreen;
export default ViewOrdersScreen;
