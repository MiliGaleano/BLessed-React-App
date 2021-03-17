// import * as firebase from "firebase";
import firebase from 'firebase/app'
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCnzH9HW0StkfbD4cu2laEUEXvxUvih1ng",
    authDomain: "blessed-e4d26.firebaseapp.com",
    databaseURL: "https://blessed-e4d26.firebaseio.com",
    projectId: "blessed-e4d26",
    storageBucket: "blessed-e4d26.appspot.com",
    messagingSenderId: "662095771323",
    appId: "1:662095771323:web:f5503fd98ed469f3179b9e"
    }
)

export default app;