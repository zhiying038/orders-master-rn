import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    justifyContent: 'space-between',
  },
  btnContainer: {
    flex: 1,
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
