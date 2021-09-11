const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div>
    <div id="main-container">
    <div id="form-container"></div>
    <div id="library"></div>
  </div>`;
};

export default domBuilder;
