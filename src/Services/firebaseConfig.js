import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   


const firebaseConfig = {
  apiKey: "AIzaSyAuTk4pXp5MyE66oWifONE7HoQdhL31idQ",
  authDomain: "tela-login-f5354.firebaseapp.com",
  projectId: "tela-login-f5354",
  storageBucket: "tela-login-f5354.firebasestorage.app",
  messagingSenderId: "666337502349",
  appId: "1:666337502349:web:1897aaa598f2c4b146eec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);