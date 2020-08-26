import { videoLooper } from './video';
import { drawMenu } from './menuDOM';
import { contact } from './contactDOM';
import { landing } from './landingDOM';
import { navBarDom } from './NavBarDOM';
import { tabcontent } from './tabContentDOM';

const parentAll = document.getElementById('content');

navBarDom.createNav(parentAll);
tabcontent.createTabs(parentAll);

const parentLanding = document.getElementById('home');

landing.putBackgr(parentLanding);

landing.putPresentation(parentLanding);

const parentContact = document.getElementById('contact-tab');

contact.putForm(parentContact);

drawMenu.addPanelMenu();

videoLooper.videoEndListener();
