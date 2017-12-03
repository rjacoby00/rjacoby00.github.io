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
const firestore = firebase.firestore();

messaging.requestPermission()
.then(function() {
    console.log("Permission Graned");
    return messaging.getToken();
})
.then(function(token) {
    console.log(token);
    firestore.doc("tests/users").set({lastUser: token});
})
.catch(function(error) {
    console.log("Error Ocurred: ", error);
})

messaging.onMessage(function(payload) {
    console.log("onMessage: ", payload);
})
