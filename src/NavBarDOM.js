import { tabcontent } from './tabContentDOM';
import logopng from '../imag/logo.png';

const navBarDom = (function nvbar() {
  function createNav(parent) {
    const NavBar = document.createElement('nav');
    NavBar.setAttribute('class', 'navbar navbar-dark fixed-top');
    parent.appendChild(NavBar);

    const navTabs = document.createElement('nav');
    navTabs.setAttribute('class', 'nav nav-tabs nav-stacked');
    NavBar.appendChild(navTabs);

    const anchor1 = document.createElement('a');
    anchor1.setAttribute('class', 'nav-link');
    anchor1.setAttribute('href', '#home');
    anchor1.textContent = 'Home';
    anchor1.onclick = tabcontent.createTabHome;
    navTabs.appendChild(anchor1);

    const anchor2 = document.createElement('a');
    anchor2.setAttribute('class', 'nav-link');
    anchor2.setAttribute('href', '#menu-tab');
    anchor2.textContent = 'Menu';
    anchor2.onclick = tabcontent.createTabMenu;
    navTabs.appendChild(anchor2);

    const anchor3 = document.createElement('a');
    anchor3.setAttribute('class', 'nav-link');
    anchor3.setAttribute('href', '#contact-tab');
    anchor3.textContent = 'Conctact us';
    anchor3.onclick = tabcontent.createTabContact;
    navTabs.appendChild(anchor3);

    const logoCandas = document.createElement('a');
    logoCandas.setAttribute('class', 'navbar-brand');
    logoCandas.setAttribute('href', '#');
    NavBar.appendChild(logoCandas);

    const imgLogo = document.createElement('img');
    imgLogo.src = logopng;
    // imgLogo.setAttribute('src', '../imag/logo.png');
    // imgLogo.src = logoImg;
    logoCandas.appendChild(imgLogo);

    tabcontent.createTabDisplay(parent);
    tabcontent.createTabHome();
  }

  return { createNav };
}());

export { navBarDom };
