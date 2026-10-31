/* Bộ chạy nền nhận thông báo (kể cả khi app đang tắt) */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyDl8akvJgRjcfCixSFym1LZuZGxEbvFl80',
  authDomain: 'chamcong-thanhtam.firebaseapp.com',
  projectId: 'chamcong-thanhtam',
  storageBucket: 'chamcong-thanhtam.firebasestorage.app',
  messagingSenderId: '53089613610',
  appId: '1:53089613610:web:0b9e25ca9ce29e542e9053'
});
firebase.messaging();   // thông báo có sẵn tiêu đề/nội dung → Firebase tự hiện
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
