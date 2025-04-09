// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging,getToken, onMessage } from "firebase/messaging";
import { sendTokenToServer, Unsubscribe } from "./src/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXZbpyQkgjAB6Xw6tjrEAk61g5XA3VSDM",
  authDomain: "notify-app-1-7ec8e.firebaseapp.com",
  projectId: "notify-app-1-7ec8e",
  storageBucket: "notify-app-1-7ec8e.firebasestorage.app",
  messagingSenderId: "642240863114",
  appId: "1:642240863114:web:31848a3c7c7719ac7c8673",
  measurementId: "G-TFVF6WHC2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);



export async function requestPermission({unsubscribe}) {
    console.log('Requesting permission...');

    if(unsubscribe) {      
        console.log('Unsubscribing...');
        const token = await getToken(messaging, {
            vapidKey: "BGHj7-7Ql4iESinjLQePZisFFyyJ5Rq2RnS-xiRwD9z0x0rBQZmnE9GnOu3VGuvzf2dphIs1sBWPZdz7ehSaMfE"
          });
        const response = await Unsubscribe(token); // Unsubscribe the token from your server
        console.log('Token unsubscribed:', response.data);
        return response
     }
    
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      try {
        const token = await getToken(messaging, {
          vapidKey: "BGHj7-7Ql4iESinjLQePZisFFyyJ5Rq2RnS-xiRwD9z0x0rBQZmnE9GnOu3VGuvzf2dphIs1sBWPZdz7ehSaMfE"
        });
  
        if (token) {
          console.log('Notification permission granted.');
          console.log('FCM Token:', token);
          const response = await sendTokenToServer(token); // Send the token to your server
         console.log('Token sent to server:', response.data);
         return response
         
          // you can now send this token to your backend or store it as needed
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      } catch (err) {
        console.error('An error occurred while retrieving token.', err);
      }
    } else {
      console.log('Notification permission not granted.');
    }
  }