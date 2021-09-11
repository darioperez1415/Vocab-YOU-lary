import clearDom from '../helpers/data/clearDom';

const showVocab = (array) => {
  clearDom();

  array.forEach((item) => {
    document.querySelector('#library').innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
          <p class="card-text">${item.definition}</p>
          <hr>
          <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-vocab--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
    `;
  });
};

const emptyVocab = () => {
  document.querySelector('#library').innerHTML = '<h1>No Vocab Entries</h1>';
};

export { showVocab, emptyVocab };
