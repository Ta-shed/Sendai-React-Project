import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBtvN8eoaf6g4TWtX4jNIcrl1qrjJi2lXA",
    authDomain: "sendai-fa871.firebaseapp.com",
    databaseURL: "https://sendai-fa871-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "sendai-fa871",
    storageBucket: "sendai-fa871.appspot.com",
    messagingSenderId: "606054205448",
    appId: "1:606054205448:web:f421736af613f6da6f29bd",
    measurementId: "G-9YGR8WY7HG"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };


