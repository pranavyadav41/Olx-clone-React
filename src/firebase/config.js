import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC8Ln3OTeXaMAfFs9K3s6P1EM3BbVKxN_k",
    authDomain: "fir-9b4d5.firebaseapp.com",
    projectId: "fir-9b4d5",
    storageBucket: "fir-9b4d5.appspot.com",
    messagingSenderId: "81750335148",
    appId: "1:81750335148:web:434ebd73d815ace0d9c909",
    measurementId: "G-B6KGD6PY2X"
  };

export default firebase.initializeApp(firebaseConfig)