import { drawMenu } from './menuDOM';

class Speciality {
  constructor(name, price, description, imgfile) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgFile = imgfile;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }

  getFile() {
    return this.imgFile;
  }
}

const menu = (function mnu() {
  const menuItems = [];

  function seedMenu() {
    menuItems.push(new Speciality('Parral Ham', '$ 4.95', 'Deliciius half pound grilled meat', './imag/cardImgHam.png'));
    menuItems.push(new Speciality('Parral Atascate!', '$ 9.95', 'All a great programmer needs to grow!', './imag/cardImgAtascate.png'));
    menuItems.push(new Speciality('Santa Barbara DietHam', '$ 3.95', 'Deliciius quater pound grilled meat', './imag/cardImgHam2.png'));
    menuItems.push(new Speciality('Triplay Tacos!', '$ 4.95', 'Traditional Mining worker Tacos!', './imag/cardImgTacos.png'));
    menuItems.push(new Speciality('Parral WakeUP!', '$ 4.95', 'The best way to start a healthy day', './imag/cardImgBreakFst.png'));
    menuItems.push(new Speciality('Parral Ham', '$ 4.95', 'Deliciius half pound grilled mea', './imag/cardImgHam2.png'));
    menuItems.push(new Speciality('Parral Ham', '$ 4.95', 'Deliciius half pound grilled mea', './imag/cardImgAtascate.png'));
    menuItems.push(new Speciality('Parral Ham', '$ 4.95', 'Deliciius half pound grilled mea', './imag/cardImgHam.png'));
  }

  function displayMenu(parent) {
    let i = 0;
    for (i = 0; i < menuItems.length; i += 1) {
      drawMenu.putMenuItem(menuItems[i], parent);
    }
  }

  return { seedMenu, displayMenu };
}());

export { Speciality, menu };