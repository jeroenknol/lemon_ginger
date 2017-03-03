import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FBDE5B',
    width: 375,
    borderColor: "#000",
    marginTop: 60
  },
  photo: {
    height: 150,
    width: 150,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: '#FFF',
  },
  text: {
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    lineHeight: 20,
    fontSize: 14,
  }
});
