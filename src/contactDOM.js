const contact = (function contacto() {
  function putForm(parent) {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('class', 'container container-fluid');
    contactContainer.setAttribute('id', 'contact-info');
    parent.appendChild(contactContainer);

    const contactRow = document.createElement('div');
    contactRow.setAttribute('class', 'row');
    contactContainer.appendChild(contactRow);

    const contactCol1 = document.createElement('div');
    contactCol1.setAttribute('class', 'col-sm-12 col-md-6');
    contactCol1.setAttribute('id', 'cntc-media-col');
    contactRow.appendChild(contactCol1);

    const mediaRow = document.createElement('div');
    mediaRow.setAttribute('class', 'row');
    mediaRow.setAttribute('id', 'adress-card');
    contactCol1.appendChild(mediaRow);

    const adressDiv = document.createElement('div');
    adressDiv.setAttribute('class', 'card card-18rem');
    mediaRow.appendChild(adressDiv);

    const addBody = document.createElement('div');
    addBody.setAttribute('class', 'card-body');
    adressDiv.appendChild(addBody);

    const addTitle1 = document.createElement('h5');
    addTitle1.setAttribute('class', 'card-title');
    addTitle1.textContent = 'Adress';
    adressDiv.appendChild(addTitle1);

    const addTitle2 = document.createElement('h6');
    addTitle2.setAttribute('class', 'card-subtitle mb-2 text-muted');
    addTitle2.textContent = 'We will be happyto serve you at:';
    adressDiv.appendChild(addTitle2);

    const adressText = document.createElement('p');
    adressText.setAttribute('class', 'card-text adress-text');
    adressText.textContent = 'Zaragoza ave. #75, Colonia Centro. Parral, Chihuahua, MX.';
    adressDiv.appendChild(adressText);

    const mediaRow2 = document.createElement('div');
    mediaRow2.setAttribute('class', 'row');
    mediaRow2.setAttribute('id', 'icons-div');
    contactCol1.appendChild(mediaRow2);

    const mediaBlock = document.createElement('div');
    mediaBlock.setAttribute('class', 'media-block');
    mediaRow2.appendChild(mediaBlock);

    const icoWrap1 = document.createElement('div');
    icoWrap1.setAttribute('class', 'ico-wrapper');
    mediaBlock.appendChild(icoWrap1);

    const icon1 = document.createElement('a');
    icon1.setAttribute('class', 'fa fa-facebook icon-link');
    icon1.setAttribute('href', '#');
    icoWrap1.appendChild(icon1);

    const icoWrap2 = document.createElement('div');
    icoWrap2.setAttribute('class', 'ico-wrapper');
    mediaBlock.appendChild(icoWrap2);

    const icon2 = document.createElement('a');
    icon2.setAttribute('class', 'fa fa-twitter icon-link');
    icon2.setAttribute('href', '#');
    icoWrap2.appendChild(icon2);

    const icoWrap3 = document.createElement('div');
    icoWrap3.setAttribute('class', 'ico-wrapper');
    mediaBlock.appendChild(icoWrap3);

    const icon3 = document.createElement('a');
    icon3.setAttribute('class', 'fa fa-whatsapp icon-link');
    icon3.setAttribute('href', '#');
    icoWrap3.appendChild(icon3);

    // col 2 FORM

    const contactCol2 = document.createElement('div');
    contactCol2.setAttribute('class', 'col-sm-12 col-md-6');
    contactCol2.setAttribute('id', 'cntc-form-col');
    contactRow.appendChild(contactCol2);

    const formdiv = document.createElement('form');
    formdiv.setAttribute('id', 'cntc-form');
    contactCol2.appendChild(formdiv);

    const group1 = document.createElement('div');
    group1.setAttribute('class', 'form-group');
    formdiv.appendChild(group1);

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'InputEmail1');
    label1.textContent = 'Email address';
    group1.appendChild(label1);

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'email');
    input1.setAttribute('class', 'form-control');
    input1.setAttribute('id', 'InputEmail1');
    input1.setAttribute('aria-describedby', 'emailHelp');
    input1.setAttribute('placeholder', 'email');
    group1.appendChild(input1);

    const small1 = document.createElement('small');
    small1.setAttribute('id', 'emailHelp');
    small1.setAttribute('class', 'form-text text-muted');
    small1.textContent = ">We'll never share your email with anyone else.";
    group1.appendChild(small1);

    const group2 = document.createElement('div');
    group2.setAttribute('class', 'form-group');
    formdiv.appendChild(group2);

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'InputPassword1');
    label2.textContent = 'Password';
    group2.appendChild(label2);

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'password');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', 'InputPassword1');
    input2.setAttribute('placeholder', 'Password');
    group2.appendChild(input2);

    const chkGroup = document.createElement('div');
    chkGroup.setAttribute('class', 'form-check');
    formdiv.appendChild(chkGroup);

    const chkInput = document.createElement('input');
    chkInput.setAttribute('type', 'checkbox');
    chkInput.setAttribute('class', 'form-check-input');
    chkInput.setAttribute('id', 'Check1');
    chkGroup.appendChild(chkInput);

    const labelChk = document.createElement('label');
    labelChk.setAttribute('for', 'Check1');
    labelChk.textContent = 'Send me information about events and promotions.';
    chkGroup.appendChild(labelChk);

    const group3 = document.createElement('div');
    group3.setAttribute('class', 'form-group');
    formdiv.appendChild(group3);

    const label3 = document.createElement('label');
    label3.setAttribute('for', 'FormControlTextarea1');
    label3.textContent = 'We want to know your comentaries!';
    group3.appendChild(label3);

    const input3 = document.createElement('textarea');
    input3.setAttribute('class', 'form-control');
    input3.setAttribute('id', 'FormControlTextarea1');
    input3.setAttribute('rows', '3');
    group3.appendChild(input3);

    const btnsbm = document.createElement('button');
    btnsbm.setAttribute('class', 'btn btn-primary');
    btnsbm.setAttribute('type', 'submit');
    btnsbm.textContent = 'Submit';
    formdiv.appendChild(btnsbm);
  }

  return { putForm };
}());

export { contact };