// Initialize Firebase
import firebase from 'firebase'


let config = {
  apiKey: 'AIzaSyB3lj0H-nSzuDbJzd4Vr2oOQjefU4uDgbk ',
  databaseURL: 'https://pomodoro-b631a-default-rtdb.firebaseio.com/',
  authDomain: 'pomodoro-b631a.firebaseapp.com',
  storageBucket: 'gs://pomodoro-b631a.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
