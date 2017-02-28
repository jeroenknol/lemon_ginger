import React, { Component } from 'react'
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk'
import { View } from 'react-native';
import FBSDK, { GraphRequest, GraphRequestManager } from 'react-native-fbsdk'

class Login extends Component {
  logUser(error: ?Object, result: ?Object) {
    if (error) {
      console.error('Error fetching data: ' + JSON.stringify(error))
    } else {
      // result.id contains a unique user id for our FB app
      // it *might* also include an email address...
      console.log('Success fetching data: ' + JSON.stringify(result))
    }
  }

  getUser() {
    const { accessToken } = this
    console.log(accessToken)
    const infoRequest = new GraphRequest(
      '/me',
      { accessToken, version: "v2.8" },
      this.logUser
    )

    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start()
  }
  render() {
    return (
      <View>
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
    );
  }
}

export default Login
