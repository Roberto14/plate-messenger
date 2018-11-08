import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { login as googleLogin } from './GoogleProvider'

export default class Login extends React.Component {

    handleGoogleLogin = () => {
        googleLogin().then((user)=>{
            console.log(user.toJSON());
        }).catch((e) => {
            // todo: alert message and error ui
            console.log('Try again')
        })
    }

    handleFacebookLogin = () => {
        console.log('TODO: Facebook Login')
        // TODO: facebook login
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Login with Google" onPress={this.handleGoogleLogin} />
                <Button title="Login with Facebook" onPress={this.handleFacebookLogin} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})