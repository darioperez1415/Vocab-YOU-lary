import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import logoutButton from '../../components/logoutButton';
import navigationEvents from '../../events/navigationEvents';
import domEvents from '../../events/domEvents';
import { showVocab } from '../../components/vocab';
import { getVocab } from '../data/vocabData';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents(user.uid);
  navigationEvents(user.uid);
  getVocab().then((items) => showVocab(items));
};

export default startApp;
