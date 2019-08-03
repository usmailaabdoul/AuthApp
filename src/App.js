import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({        
            apiKey: 'AIzaSyCGqEdARMki_xfE3dM7CwyktVw2J4qxbZQ',
            authDomain: 'authapp-2aa59.firebaseapp.com',
            databaseURL: 'https://authapp-2aa59.firebaseio.com',
            projectId: 'authapp-2aa59',
            storageBucket: 'authapp-2aa59.appspot.com',
            messagingSenderId: '981643196352',
            appId: '1:981643196352:web:2702ed853cbe8983'            
        });
    }

    render () {
        return (
            <View>
                <Header HeaderText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;