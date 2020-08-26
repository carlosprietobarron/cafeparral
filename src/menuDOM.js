import { speciality, menu } from './menu';

const drawMenu = (function () {
  function putMenuItem(item, parent) {
    const colDiv = document.createElement('div');
    colDiv.setAttribute('class', 'col-lg-3 col-md-4 col-sm-5');
    parent.appendChild(colDiv);
    const carDiv = document.createElement('div');
    carDiv.setAttribute('class', 'card dish-card');
    colDiv.appendChild(carDiv);
    const imgItm = document.createElement('img');
    imgItm.setAttribute('class', 'card-img-top');
    imgItm.setAttribute('src', item.getFile());
    imgItm.setAttribute('alt', 'Card image cap');
    carDiv.appendChild(imgItm);
    const carBody = document.createElement('div');
    carBody.setAttribute('class', 'card-body');
    carDiv.appendChild(carBody);
    const carItemName = document.createElement('h5');
    carItemName.setAttribute('class', 'card-title');
    carItemName.textContent = item.getName();
    carBody.appendChild(carItemName);
    const carText = document.createElement('p');
    carText.setAttribute('class', 'card-text');
    carText.textContent = item.getDescription(); 7;
    carBody.appendChild(carText);
    const carUl = document.createElement('ul');
    carUl.setAttribute('class', 'list-group list-group-flush');
    carDiv.appendChild(carUl);
    const carli = document.createElement('li');
    carli.setAttribute('class', 'list-group-item');
    carli.textContent = item.getPrice();
    carUl.appendChild(carli);
    const carBody2 = document.createElement('div');
    carBody2.setAttribute('class', 'card-body');
    carDiv.appendChild(carBody2);
    const anchor1 = document.createElement('a');
    anchor1.setAttribute('href', '#');
    anchor1.setAttribute('class', 'card-link');
    anchor1.textContent = 'No Diee stuff';
    carBody2.appendChild(anchor1);
    const anchor2 = document.createElement('a');
    anchor2.setAttribute('href', '#');
    anchor2.setAttribute('class', 'card-link');
    anchor2.textContent = 'No Diee stuff';
    carBody2.appendChild(anchor2);
  }

  function addPanelMenu() {
    menu.seedMenu();
    const parent = document.getElementById('menu-row');
    menu.displayMenu(parent);
  }

  return { addPanelMenu, putMenuItem };
}());

export { drawMenu };