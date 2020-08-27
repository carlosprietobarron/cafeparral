import { videoLooper } from './video';
import { drawMenu } from './menuDOM';
import { contact } from './contactDOM';
import { landing } from './landingDOM';
import { navBarDom } from './NavBarDOM';
import { tabcontent } from './tabContentDOM';

const pageLoader = (function ld() {
  function pageLoad() {
    const parentAll = document.getElementById('content');

    navBarDom.createNav(parentAll);
    //tabcontent.createTabs(parentAll);

    
  }

  return { pageLoad };
}());

export { pageLoader };
