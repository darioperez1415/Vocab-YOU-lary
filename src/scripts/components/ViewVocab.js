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
          <a href="#" class="card-link">Edit</a>
          <a href="#" class="card-link">Delete</a>
        </div>
      </div>
    `;
  });
};

const emptyVocab = () => {
  document.querySelector('#home').innerHTML = '<h1>No Vocab Entries</h1>';
};

export { showVocab, emptyVocab };
