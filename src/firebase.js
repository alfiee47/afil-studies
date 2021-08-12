import firebase from "firebase/app";
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyDCYnZrJlrRVp8GNXW7CQursttTcKbruF8",
    authDomain: "afil-studies.firebaseapp.com",
    projectId: "afil-studies",
    storageBucket: "afil-studies.appspot.com",
    messagingSenderId: "900047896994",
    appId: "1:900047896994:web:44c1dcf9fc08ca39df32fb",
    measurementId: "G-6V5PCCVWK5"
};

firebase.initializeApp(config);

export default firebase.firestore();