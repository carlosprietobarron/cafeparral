import  { drawMenu } from "./menuDOM";

class  Speciality  {
  constructor (name,price,description,imgfile){ 
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

  getDescription()  {
      return this.description;
  }

  getFile()  {
      return this.imgFile;
  }
};

const menu  = (function() {
  const menuItems = [];
  
  function seedMenu() {
    menuItems.push(new Speciality("Parral Ham", "$ 4.95", "Deliciius half pound grilled mea","../imag/cardImgHam.png"));
    menuItems.push(new Speciality("Parral Ham", "$ 4.95", "Deliciius half pound grilled mea","../imag/cardImgHam.png"));
    menuItems.push(new Speciality("Parral Ham", "$ 4.95", "Deliciius half pound grilled mea","../imag/cardImgHam.png"));
    menuItems.push(new Speciality("Parral Ham", "$ 4.95", "Deliciius half pound grilled mea","../imag/cardImgHam.png"));
    menuItems.push(new Speciality("Parral Ham", "$ 4.95", "Deliciius half pound grilled mea","../imag/cardImgHam.png"));
    menuItems.push(new Speciality("Parral Ham", "$ 4.95", "Deliciius half pound grilled mea","../imag/cardImgHam.png"));
    menuItems.push(new Speciality("Parral Ham", "$ 4.95", "Deliciius half pound grilled mea","../imag/cardImgHam.png"));
    menuItems.push(new Speciality("Parral Ham", "$ 4.95", "Deliciius half pound grilled mea","../imag/cardImgHam.png"));
  }

  function displayMenu(parent) {
    let i = 0;
    for (i = 0; i < menuItems.length; i +=1) {
        drawMenu.putMenuItem(menuItems[i],parent);
    }

  }

  return { seedMenu, displayMenu };

})();


export { Speciality, menu }