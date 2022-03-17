import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
} from "firebase/auth";

import { FIREBASE_CONFIG, AUTH_URL } from "./src/api/api-config";
import "./style.scss";

const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth();

let password = document.getElementById("pass");
let email = document.getElementById("email");

document.querySelector(".auth").addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("object :>> ", userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

// fetch(AUTH_URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "aplication/json",
//   },
//   body: JSON.stringify({
//     email: email,
//     password: password,
//   }),
// }).then((response) => console.log("respo", response));

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log("object :>> ", userCredential);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// const auth = getAuth();
// signInWithEmailAndPassword(auth, 'test2@gmail.com', '111111')
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// fetch(AUTH_URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "aplication/json",
//   },
//   body: JSON.stringify({
//     email: "test5@gmail.com",
//     password: "123456",
//   }),
// }).then((response) => console.log("respo", response));
