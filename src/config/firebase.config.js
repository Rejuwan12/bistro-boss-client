// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyC0E5SSxfK-8dp8ufJSnf2Y9Wx1sWZeoJ8",
//   authDomain: "bistro-boss-project-fe3fd.firebaseapp.com",
//   projectId: "bistro-boss-project-fe3fd",
//   storageBucket: "bistro-boss-project-fe3fd.appspot.com",
//   messagingSenderId: "406838076315",
//   appId: "1:406838076315:web:423c09a35398c1062bf73e"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

