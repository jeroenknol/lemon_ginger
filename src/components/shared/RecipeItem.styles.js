import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  recipeitem: {
    height: 300,
    backgroundColor: '#F8F8F8',
    marginBottom: 6,
  },

  thumb: {
    borderRadius: 3,
    width: 375,
    height: 300,
  },
  text: {
    fontFamily: 'simonetta',
    fontSize: 26,
    borderRadius: 3,
    flex: 1,
    marginTop: -50,
    minHeight: 50,
    padding: 8,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  buttons: {
    marginTop: -290,
    marginRight: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row'

  }
});
