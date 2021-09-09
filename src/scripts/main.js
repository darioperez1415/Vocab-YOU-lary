// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to Vocab-YOU-lary!</h1>
    <button class="btn btn-danger" id="login">Login</button><br />
    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#login')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
