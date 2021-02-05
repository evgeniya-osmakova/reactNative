import {StyleSheet, StatusBar} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 30,
    width: 200,
  },
  buttonColor: {
    backgroundColor: '#841584',
    color: '#841584',
  },
});
