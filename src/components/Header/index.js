import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

export default class Loading extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title="Logout" onPress={this._logout} />
            </View>
        )
    }
}