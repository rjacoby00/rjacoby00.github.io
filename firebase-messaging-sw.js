importScripts('https://www.gstatic.com/firebasejs/4.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.7.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCoh7ujUlhqVsF6wXDBXH5cmhg0BOS6Wbs",
    authDomain: "testapp-114be.firebaseapp.com",
    databaseURL: "https://testapp-114be.firebaseio.com",
    projectId: "testapp-114be",
    storageBucket: "testapp-114be.appspot.com",
    messagingSenderId: "839496366185"
  };
firebase.initializeApp(config);

const messaging = firebase.messaging();
