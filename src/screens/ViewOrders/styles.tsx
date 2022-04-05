import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 15,
  },
  itemSection: {
    padding: 10,
  },
  orderKey: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderTotal: {
    marginTop: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagingBtn: {
    backgroundColor: '#ffe400',
  },
  pagingText: {
    padding: 20,
    textAlign: 'center',
  },
});

export default styles;
