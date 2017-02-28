import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 300,
    marginLeft: 80,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  formView: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    width: 300,
    height: 200,
    top: 200,
    left: 40,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  paragraph: {
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
