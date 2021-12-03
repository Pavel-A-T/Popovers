// import {doPopup} from "../js/app";
//
// test('Проверка функции doPopup', () => {
//   const popup = document.getElementsByClassName("popup")[0];
//   console.log(popup)
//   const expected = !popup[0].classList.contains("show");
//   doPopup();
//   expect(expected).toBe(popup[0].classList.contains("show"));
//   doPopup();
//   expect(!expected).toBe(popup[0].classList.contains("show"));
// });

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new InnOgrnFormWidget(container);
  widget.bindToDOM();
  expect(container.innerHTML).toEqual(InnOgrnFormWidget.markup);
});
