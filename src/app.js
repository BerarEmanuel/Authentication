import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBLZH8T_6VdbIpy4kJDJR5GRarT0QsQAKI',
      authDomain: 'authentication-1665b.firebaseapp.com',
      databaseURL: 'https://authentication-1665b.firebaseio.com',
      projectId: 'authentication-1665b',
      storageBucket: 'authentication-1665b.appspot.com',
      messagingSenderId: '257965767795'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
          Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
  }
}

  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
