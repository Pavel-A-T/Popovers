export default class App {
  doPopup() {
    const popup = document.getElementsByClassName('popup');
    if (popup[0].classList.contains('show')) popup[0].classList.remove('show');
    else popup[0].classList.add('show');
  }

  createButton() {
    const button = document.getElementById('btn');
    button.addEventListener('click', ((ev) => {
      ev.preventDefault();
      this.doPopup();
    }));
  }
}

const app = new App();
app.createButton();
