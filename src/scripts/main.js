// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/router';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  // LETS USER LOG IN
  checkLoginStatus();
};

init();
