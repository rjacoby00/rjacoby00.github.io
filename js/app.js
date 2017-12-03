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

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

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
