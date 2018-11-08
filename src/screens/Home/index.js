import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from "react-native-firebase";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default class Login extends React.Component {
    _logout(){
        firebase.auth().signOut();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button title="Logout" onPress={this._logout} />
            </View>
        )
    }
}