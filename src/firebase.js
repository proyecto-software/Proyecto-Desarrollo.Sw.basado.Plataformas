import firebase from 'firebase/app'
import 'firebase/auth';
const app = firebase.initializeApp({
  apiKey: "AIzaSyAEKqtJyQ4E9l77kaTNGnRbyDdfzJvVWHw",
  authDomain: "sistema-electivos-auth.firebaseapp.com",
  projectId: "sistema-electivos-auth",
  storageBucket: "sistema-electivos-auth.appspot.com",
  messagingSenderId: "41892760780",
  appId: "1:41892760780:web:d3e9711d5d83e2f3a20669"
});
export const auth = firebase.auth();
export default app;