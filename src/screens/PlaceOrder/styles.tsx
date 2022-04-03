import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  description: {
    flexDirection: 'column',
    marginLeft: 10,
    flexGrow: 1,
  },
  price: {
    flexGrow: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
  },
  image: {
    height: 50,
    width: 50,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 15,
  },
  container: {
    padding: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    padding: 5,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
  checkoutBtn: {
    backgroundColor: '#ffe400',
    padding: 15,
    borderRadius: 8,
  },
  checkoutText: {
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  footer: {
    marginBottom: 20,
  },
});

export default styles;
