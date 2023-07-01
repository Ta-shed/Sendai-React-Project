import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

firebase.initializeApp(firebaseConfig);

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailAndPassword = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error(error);
      });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((userCredential) => {
        // Signed in with Google
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error(error);
      });
  };

  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((userCredential) => {
        // Signed in with Facebook
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 mb-2"
      />
      <button
        onClick={signInWithEmailAndPassword}
        className="bg-blue-500 text-white rounded px-4 py-2 mb-2"
      >
        Sign In with Email/Password
      </button>
      <button
        onClick={signInWithGoogle}
        className="bg-red-600 text-white rounded px-4 py-2 mb-2"
      >
        Sign In with Google
      </button>
      <button
        onClick={signInWithFacebook}
        className="bg-blue-800 text-white rounded px-4 py-2"
      >
        Sign In with Facebook
      </button>
    </div>
  );
};

export default SignIn;
