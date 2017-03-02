import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  recipeitem: {
    height: 200,
    backgroundColor: '#F8F8F8',
    marginBottom: 6,
  },

  thumb: {
    borderRadius: 3,
    width: 375,
    height: 200,
  },
  text: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    borderRadius: 3,
    flex: 1,
    marginTop: -50,
    minHeight: 50,
    padding: 8,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  buttons: {
    marginTop: -190,
    justifyContent: 'flex-end',
    flexDirection: 'row'

  }
});
