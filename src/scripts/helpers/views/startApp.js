import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import showVocab from '../../components/vocab';
import getVocab from '../data/vocabData';

const startApp = () => {
  domBuilder();
  navBar();
  getVocab().then((items) => showVocab(items));
};

export default startApp;
