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
messaging.onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Notification update';
  const notificationOptions = {
    body: 'There is a new notification',
    icon: '/firebase-logo.png',
    data: {
      click_action: 'https://www.ummahnotify.com/notifications', // URL to open when the notification is clicked
    },     
   
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  const url = event.notification.data?.click_action || "https://janazah.sg";

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // If an open window already exists, focus it
      for (const client of clientList) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise, open a new tab
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});



