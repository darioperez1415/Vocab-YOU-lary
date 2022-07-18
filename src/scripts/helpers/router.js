import firebase from 'firebase/compat/app';
import loginButton from '../components/loginButton';
import startApp from './views/startApp';
import firebaseConfig from '../../api/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      loginButton();
    }
  });
};

export default checkLoginStatus;
