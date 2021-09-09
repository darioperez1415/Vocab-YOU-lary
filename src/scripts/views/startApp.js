import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
import showVocab from '../components/forms/vocab';
import getVocab from '../helpers/data/vocabData';

const startApp = () => {
  domBuilder();
  navBar();
  getVocab().then((items) => showVocab(items));
};

export default startApp;
