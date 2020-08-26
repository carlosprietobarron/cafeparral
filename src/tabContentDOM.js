const tabcontent = (function tbCont() {
  function createTabs(parent) {
    const tabContent = document.createElement('div');
    tabContent.setAttribute('class', 'tab-content');
    parent.appendChild(tabContent);

    const tabHome = document.createElement('div');
    tabHome.setAttribute('id', 'home');
    tabHome.setAttribute('class', 'tab-pane active');
    tabHome.setAttribute('role', 'tabpanel');
    tabContent.appendChild(tabHome);

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

    const tabContact = document.createElement('div');
    tabContact.setAttribute('id', 'contact-tab');
    tabContact.setAttribute('class', 'tab-pane');
    tabContact.setAttribute('role', 'tabpanel');
    tabContent.appendChild(tabContact);
  }

  return { createTabs };
}());

export { tabcontent };