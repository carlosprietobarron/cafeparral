import { navBarDom } from './NavBarDOM';

const pageLoader = (function ld() {
  function pageLoad() {
    const parentAll = document.getElementById('content');

    navBarDom.createNav(parentAll);
    // tabcontent.createTabs(parentAll);
  }

  return { pageLoad };
}());

export { pageLoader };
