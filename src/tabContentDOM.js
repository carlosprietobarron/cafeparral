import { landing } from './landingDOM';
import { videoLooper } from './video';
import { drawMenu } from './menuDOM';
import { contact } from './contactDOM';

const tabcontent = (function tbCont() {
  function createTabDisplay(parent) {
    const tabContent = document.createElement('div');
    tabContent.setAttribute('id', 'tab-content');
    parent.appendChild(tabContent);
  }

  function deleteTabContent() {
    const tabContent = document.getElementById('tab-content');
    while (tabContent.firstChild) {
      tabContent.firstChild.remove();
    }
    tabContent.innerHTML = '';
  }

  function createTabHome() {
    const tabContent = document.getElementById('tab-content');
    deleteTabContent();
    const tabHome = document.createElement('div');
    tabHome.setAttribute('id', 'home');
    tabHome.setAttribute('class', 'tab-pane active');
    tabHome.setAttribute('role', 'tabpanel');
    tabContent.appendChild(tabHome);
    // const parentLanding = document.getElementById('home');
    landing.putBackgr(tabHome);
    landing.putPresentation(tabHome);
    videoLooper.videoEndListener();
  }

  function createTabMenu() {
    const tabContent = document.getElementById('tab-content');
    deleteTabContent();
    const tabMenu = document.createElement('div');
    tabMenu.setAttribute('id', 'menu-tab');
    tabMenu.setAttribute('class', 'tab-pane');
    tabMenu.setAttribute('role', 'tabpanel');
    tabContent.appendChild(tabMenu);

    const menuSect = document.createElement('div');
    menuSect.setAttribute('class', 'menu-section');
    menuSect.setAttribute('id', 'menu-table');
    tabMenu.appendChild(menuSect);

    const rewMenu = document.createElement('div');
    rewMenu.setAttribute('class', 'row');
    rewMenu.setAttribute('id', 'menu-row');
    menuSect.appendChild(rewMenu);

    drawMenu.addPanelMenu();
  }

  function createTabContact() {
    const tabContent = document.getElementById('tab-content');
    deleteTabContent();
    const tabContact = document.createElement('div');
    tabContact.setAttribute('id', 'contact-tab');
    tabContact.setAttribute('class', 'tab-pane');
    tabContact.setAttribute('role', 'tabpanel');
    tabContent.appendChild(tabContact);
    // const parentContact = document.getElementById('contact-tab');
    contact.putForm(tabContact);
  }

  return {
    createTabHome, createTabMenu, createTabContact, createTabDisplay,
  };
}());

export { tabcontent };