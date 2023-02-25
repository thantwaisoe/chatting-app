import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA7O749z5qrTliyAQaP1AMMe4RD2vA3saU",
    authDomain: "vue-blog-system-50ee6.firebaseapp.com",
    projectId: "vue-blog-system-50ee6",
    storageBucket: "vue-blog-system-50ee6.appspot.com",
    messagingSenderId: "462755616920",
    appId: "1:462755616920:web:b3cfb8a0375b5f166dd8ed",
    measurementId: "G-75CMWKKHZT"
  };

const app = initializeApp(firebaseConfig)

  let db = getFirestore(app)

  export {db}