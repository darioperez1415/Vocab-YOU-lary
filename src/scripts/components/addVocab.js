import clearDom from '../helpers/data/clearDom';

const addVocab = (item = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocab Title" value="${item.title || ''}" required>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <input type="text" class="form-control" id="language" aria-describedby="vocabTitle" placeholder="Enter Vocab Title" value="${item.language || ''}" required>
          <p class="card-text"></p>
          <textarea class="form-control" placeholder="Vocab Description" id="definition" style="height: 100px">${item.definition || ''}</textarea>
          <hr>
          <button type="submit"
        id="${item.firebaseKey ? `update-vocab--${item.firebaseKey}` : 'submit-vocab'}"
        class="btn btn-primary">Edit Vocab
      </button>
        </div>
      </div>
    `;
};

export default addVocab;
