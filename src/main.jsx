import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSPIhMqjUc1V0LCtAgLyIvtthSMnu5F7A",
  authDomain: "e-commerce-phone.firebaseapp.com",
  projectId: "e-commerce-phone",
  storageBucket: "e-commerce-phone.appspot.com",
  messagingSenderId: "963753003470",
  appId: "1:963753003470:web:fa068eda5f0acfd783039f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
