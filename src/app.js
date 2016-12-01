import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCdW5wqSUP7tDShRjTpibsUxiTi3pUiEos',
            authDomain: 'auth-bee6b.firebaseapp.com',
            databaseURL: 'https://auth-bee6b.firebaseio.com',
            storageBucket: 'auth-bee6b.appspot.com',
            messagingSenderId: '577600717090'
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loggedIn: true
                });
            } else {
                this.setState({
                    loggedIn: false
                });
            }
        });
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
