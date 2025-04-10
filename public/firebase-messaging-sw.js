// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";


importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCXZbpyQkgjAB6Xw6tjrEAk61g5XA3VSDM",
    authDomain: "notify-app-1-7ec8e.firebaseapp.com",
    projectId: "notify-app-1-7ec8e",
    storageBucket: "notify-app-1-7ec8e.firebasestorage.app",
    messagingSenderId: "642240863114",
    appId: "1:642240863114:web:31848a3c7c7719ac7c8673",
    measurementId: "G-TFVF6WHC2W"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// const messaging = getMessaging(firebaseApp);
const messaging = firebase.messaging();

self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received:', event);
  
  event.notification.close();
  const clickAction = 'https://youtube.com'


  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      for (const client of clientList) {
        if (client.url === clickAction && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(clickAction);
      }
    })
  );
});


messaging.onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Notification update';
  const notificationOptions = {
    body: 'There is a new notification',
    icon: '/firebase-logo.png',
    data: {
      click_action: 'https://youtube.com', // URL to open when the notification is clicked
    },     
   
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
