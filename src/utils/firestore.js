import * as firebase from 'firebase/app'
import 'firebase/firestore'
if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDuVs4fMylajYaD400oHVKGtXZW3FT9Xss',
    authDomain: 'envidict-4c249.firebaseapp.com',
    databaseURL: 'https://envidict-4c249.firebaseio.com',
    projectId: 'envidict-4c249',
    storageBucket: 'envidict-4c249.appspot.com',
    messagingSenderId: '17743148956',
    appId: '1:17743148956:web:967ea767205aee123a3a59',
    measurementId: 'G-X1497GR21T',
  })
}

export const db = firebase.firestore()
