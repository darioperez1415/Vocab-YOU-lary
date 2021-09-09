const showVocab = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocab</button>';

  document.querySelector('#library').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#library').innerHTML += `
<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <hr>
        <h4 class="card-title">${item.language}</h4>
        <p class="card-text">${item.description}</p>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-btn--${item.firebaseKey}">Edit</button>
        <button class="btn btn-danger" id="delete--${item.firebaseKey}">Delete</button>
        </div>
</div>
   `;
  });
};

export default showVocab;
