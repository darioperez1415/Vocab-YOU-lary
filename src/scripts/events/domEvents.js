import { showVocab } from '../components/vocab';
import { createVocab, deleteVocab } from '../helpers/data/vocabData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
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
    // Click Event For Deleting Vocab Form
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('clicked');
        // The Code below is creating a variable that is expecting two variables
        const [, id] = e.target.id.split('--');
        deleteVocab(id).then(showVocab);
      }
    }
  });
};
// Delete ,Edit,Submit
export default domEvents;
