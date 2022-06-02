// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqDXHYOxOoSh9IiDiEaYjmpzQO_Xzzlhs",
  authDomain: "liveeasy3-70e36.firebaseapp.com",
  projectId: "liveeasy3-70e36",
  storageBucket: "liveeasy3-70e36.appspot.com",
  messagingSenderId: "609303480522",
  appId: "1:609303480522:web:2a94daf49ed285c449cc33"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};