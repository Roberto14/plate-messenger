import React from 'react';
import firebase from 'react-native-firebase'
import Loading from '../../components/Loading';

export default class Initial extends React.Component {
    constructor(props){
        super(props);
    }
    _checkAuth(){
        firebase.auth().onAuthStateChanged((user) => {
            console.log('USER STATE CHANGED:', user)
            this.props.navigation.navigate( user ? 'App' : 'Auth');
        });
    }

    componentDidMount() {
        setTimeout(this._checkAuth.bind(this), 2000);
    }

    render() {
        return <Loading />;
    }
}
