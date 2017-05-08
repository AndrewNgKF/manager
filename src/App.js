// @flow
import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {


  componentWillMount() {
    const config = {
     apiKey: "AIzaSyBp9rRrfT9isShU1t-zVgTXFgVzW5oybAM",
     authDomain: "authentication-cf5ac.firebaseapp.com",
     databaseURL: "https://authentication-cf5ac.firebaseio.com",
     projectId: "authentication-cf5ac",
     storageBucket: "authentication-cf5ac.appspot.com",
     messagingSenderId: "162786934075"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
