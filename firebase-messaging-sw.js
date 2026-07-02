importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDoBoeAyxWeoYiAQkudVi8ZS3uQJVGvjXc",
  projectId: "app-learning-english-60a96",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});