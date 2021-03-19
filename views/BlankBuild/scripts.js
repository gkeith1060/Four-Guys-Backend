// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

auth.useDeviceLanguage();

auth.onAuthStateChanged(function(user) {
    if(user) {
        //user is signed in
        console.log("signed in: " + user.displayName)
        document.getElementById('login-signin').style.display = 'none';
        document.getElementById('userMenu').innerText = user.displayName;
        document.getElementById('signed-in').style.display = 'block';
    } else {
        console.log("signed out")
        document.getElementById('login-signin').style.display = 'block';
        document.getElementById('signed-in').style.display = 'none';
    }
})

function signIn() {
    auth.signInWithRedirect(provider);

    auth.getRedirectResult()
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
    })
}

function signOut() {
    auth.signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}