import firebase from 'firebase';
import Config from './config';

firebase.initializeApp(Config);

export const firestore = firebase.firestore();
export const database = firebase.database();
export const auth = firebase.auth;
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();