const navBarDom = (function nvbar() {
  function createNav(parent) {
    const NavBar = document.createElement('nav');
    NavBar.setAttribute('class', 'navbar navbar-dark fixed-top');
    parent.appendChild(NavBar);

    const navTabs = document.createElement('nav');
    navTabs.setAttribute('class', 'nav nav-tabs nav-stacked');
    NavBar.appendChild(navTabs);

    const anchor1 = document.createElement('a');
    anchor1.setAttribute('class', 'nav-link active');
    anchor1.setAttribute('href', '#home');
    anchor1.setAttribute('role', 'tab');
    anchor1.setAttribute('data-toggle', 'tab');
    anchor1.textContent = 'Home';
    navTabs.appendChild(anchor1);

    const anchor2 = document.createElement('a');
    anchor2.setAttribute('class', 'nav-link');
    anchor2.setAttribute('href', '#menu-tab');
    anchor2.setAttribute('role', 'tab');
    anchor2.setAttribute('data-toggle', 'tab');
    anchor2.textContent = 'Menu';
    navTabs.appendChild(anchor2);

    const anchor3 = document.createElement('a');
    anchor3.setAttribute('class', 'nav-link');
    anchor3.setAttribute('href', '#contact-tab');
    anchor3.setAttribute('role', 'tab');
    anchor3.setAttribute('data-toggle', 'tab');
    anchor3.textContent = 'Conctact us';
    navTabs.appendChild(anchor3);

    const logoCandas = document.createElement('a');
    logoCandas.setAttribute('class', 'navbar-brand');
    logoCandas.setAttribute('href', '#');
    NavBar.appendChild(logoCandas);

    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src', './imag/logo.png');
    logoCandas.appendChild(imgLogo);
  }

  return { createNav };
}());

export { navBarDom };
