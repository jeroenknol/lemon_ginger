import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import FBSDK, { GraphRequest, GraphRequestManager, LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk'
import t from 'tcomb-form-native'
import styles from './Login.styles'

const Form = t.form.Form
const User = t.struct({
  name: t.String,              // a required string
  email: t.String,             // a required string
})

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {},
    }
  }

  logUser(error: ?Object, result: ?Object) {
    if (error) {
      console.error('Error fetching data: ' + JSON.stringify(error))
    } else {
      // result.id contains a unique user id for our FB app
      // it *might* also include an email address...
      console.log('Success fetching data: ' + JSON.stringify(result))
      // If no email address is present, we'll ask for it
      this.setState({
        userData: {
          id: result.id,
          name: result.name,
          email: result.email,
        }
      })
    }
  }

  getUser() {
    const { accessToken } = this
    console.log(accessToken)
    const infoRequest = new GraphRequest(
      '/me',
      { accessToken, version: "v2.8" },
      this.logUser.bind(this)
    )

    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start()
  }

  onPress() {
    const value = this.refs.form.getValue()
    if (value) {
      // TODO: Send to API, use id as password for Devise
      console.log(value)
    }
  }

  userForm() {
    const { userData } = this.state
    return (
      <View style={styles.formView}>
        <Text style={styles.title}>
          Welkom!
        </Text>
        <Text style={styles.paragraph}>
           Om je beter van dienst te kunnen zijn vragen we je
           je de volgende gegevens nog even te controleren en in te vullen.
        </Text>
        <Form
          ref="form"
          type={User}
          value={userData}
        />

        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Start Cooking!</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const { userData } = this.state

    console.log(userData)

    return (
      <View style={styles.container}>
        { !!userData.id && !userData.email ?
          // Show the userForm
          this.userForm() :

          // Show the FB LoginButton
          <View style={styles.loginView}>
            <LoginButton
              readPermissions={["public_profile", "email", "user_friends"]}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    alert("login is cancelled.");
                  } else {
                    const getUser = this.getUser.bind(this)

                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log(result)
                        console.log(data)
                        // alert(data.accessToken.toString())
                        this.accessToken = data.accessToken
                        getUser()
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => alert("logout.")}/>
            </View>
          }
      </View>
    );
  }
}

export default Login
