import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#4A4A4A',
    opacity: 0.95,
    marginTop: 60,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'simonetta',
    color: '#FFF',
    marginTop: 20,
    marginBottom: 200,
  },
  menuitems: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 25,
    color: "#FFF"
  },
  logout: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 25,
    marginTop: 200,
    color: "#FFF"
  }
});
