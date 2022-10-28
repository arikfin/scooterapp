import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig  = {
    apiKey: "AIzaSyAPtP1-boOAKcPAQumUt6YXrqpAGipw53M",
    authDomain: "scooterapp-15bac.firebaseapp.com",
    projectId: "scooterapp-15bac",
    storageBucket: "scooterapp-15bac.appspot.com",
    messagingSenderId: "975071477573",
    appId: "1:975071477573:web:81a2bcdbda3739b2c3482c"
}

firebase.initializeApp(firebaseConfig );
export default firebase;