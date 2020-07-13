
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.2/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.2/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyDWAuBvC4Emqx2kdW35D72-eWr8G8f68_c","authDomain":"salutem-9d9dd.firebaseapp.com","databaseURL":"https:\u002F\u002Fsalutem-9d9dd.firebaseio.com","projectId":"salutem-9d9dd","storageBucket":"salutem-9d9dd.appspot.com","messagingSenderId":"441892167473","appId":"1:441892167473:web:8bfdb290fc2baf14235a10","measurementId":"G-N3WCGP2QGE"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()
