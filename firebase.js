
// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5ia1cFqxamm2exfqb1-pTvGzQFHGKlsQ",
  authDomain: "johnmunga-2d89b.firebaseapp.com",
  databaseURL: "https://johnmunga-2d89b-default-rtdb.firebaseio.com",
  projectId: "johnmunga-2d89b",
  storageBucket: "johnmunga-2d89b.appspot.com",
  messagingSenderId: "1036647099803",
  appId: "1:1036647099803:web:87a204324b19099adc053e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };