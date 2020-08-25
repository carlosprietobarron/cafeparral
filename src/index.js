import { videoLooper } from './video';
import { drawMenu } from './menuDOM';
import { Speciality, menu } from './menu';
import { contact } from './contactDOM';
import { landing } from './landingDOM';
import { navBarDom } from './NavBarDOM';
import { tabcontent } from './tabContentDOM';

console.log("CafeParral  Kickoff!");

let parentAll = document.getElementById("content");

navBarDom.createNav(parentAll);
tabcontent.createTabs(parentAll);

let parentLanding = document.getElementById("home");


landing.putBackgr(parentLanding);

landing.putPresentation(parentLanding);

let parentContact = document.getElementById("contact-tab"); 

contact.putForm(parentContact);

drawMenu.addPanelMenu();

videoLooper.videoEndListener();


