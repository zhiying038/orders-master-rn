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
});

export default styles;
