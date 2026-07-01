importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Khởi tạo Firebase trong background
firebase.initializeApp({
  apiKey: "AIzaSyDoBoeAyxWeoYiAQkudVi8ZS3uQJVGvjXc",
  authDomain: "app-learning-english-60a96.firebaseapp.com",
  projectId: "app-learning-english-60a96",
  storageBucket: "app-learning-english-60a96.firebasestorage.app",
  messagingSenderId: "248531393253",
  appId: "1:248531393253:web:d3afdcbedf576445dd920c"
});

const messaging = firebase.messaging();

// Xử lý khi nhận thông báo ngầm
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://via.placeholder.com/150' // Thay bằng Logo Ostock
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});