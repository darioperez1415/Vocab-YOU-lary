import { showVocab } from '../components/ViewVocab';
import { createVocab } from '../helpers/data/vocabData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SUBMITTING A FORM TO ADD A VOCAB
    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid
      };

      createVocab(vocabObject).then(showVocab);
    }
  });
};
// Delete ,Edit,Submit
export default domEvents;
