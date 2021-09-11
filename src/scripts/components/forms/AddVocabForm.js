import clearDom from '../../helpers/data/clearDom';

const addVocabForm = (obj = {}) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
    <form id="submit-vocab-form" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="Title" placeholder="Enter a word or phrase" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Enter a definition" id="definition" style="height: 100px" required>${obj.definition || ''}</textarea>
        <label for="language">Language</label>
        <textarea class="form-control" placeholder="Enter language" id="language" style="height: 100px" required>${obj.language || ''}</textarea>
      </div>
      <div class="form-group" id="select-category">
      </div>
      <button type="submit"
        id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}"
        class="btn btn-primary">Submit
      </button>
    </form>
  `;
};

export default addVocabForm;
