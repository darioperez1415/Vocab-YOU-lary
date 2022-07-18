import firebase from 'firebase/compat/app';

const signOut = () => {
  firebase.auth().signOut();
};

export default signOut;
