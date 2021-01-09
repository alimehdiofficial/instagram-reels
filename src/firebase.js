import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDpAGk9YYvJfS3Jpz9N8m8hwMDp5BcTjiA',
  authDomain: 'instagram-8a73f.firebaseapp.com',
  projectId: 'instagram-8a73f',
  storageBucket: 'instagram-8a73f.appspot.com',
  messagingSenderId: '1087870872018',
  appId: '1:1087870872018:web:b392e46ebd5d711a9fc00b',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
