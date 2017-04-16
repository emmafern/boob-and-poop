import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

const config = {
  apiKey: "AIzaSyBIPkvrjHEtl5oNQnODhEi4u2KZtPAHYQo",
  authDomain: "boob-and-poop.firebaseapp.com",
  databaseURL: "https://boob-and-poop.firebaseio.com",
  projectId: "boob-and-poop",
};
firebase.initializeApp(config)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
