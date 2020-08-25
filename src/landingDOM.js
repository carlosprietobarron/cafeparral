const landing = (function(){

  function putBackgr(parent){
    const landDiv = document.createElement("div");
    landDiv.setAttribute("class", "video-background");
    parent.appendChild(landDiv);

    const videoWrap = document.createElement("div");
    videoWrap.setAttribute("class", "video-wrap");
    landDiv.appendChild(videoWrap);

    const videoEle = document.createElement("div");
    videoEle.setAttribute("class", "video")
    videoWrap.appendChild(videoEle);

    const videoFile = document.createElement("video");
    videoFile.setAttribute("id","bgvid");
    videoFile.setAttribute("width","320");
    videoFile.setAttribute("heigth", "240");
    videoFile.autoplay = true;
    videoFile.loop = true;
    videoFile.muted = true;
    videoFile.src = "../imag/grill.mp4";
    videoEle.appendChild(videoFile);

  }

  function putPresentation(parent){
    const presentDiv = document.createElement("div");
    presentDiv.setAttribute("id","presentation");
    presentDiv.setAttribute("class", "row justify-content-center");
    parent.appendChild(presentDiv);

    const wellcomeSect = document.createElement("div");
    wellcomeSect.setAttribute("id","wellcome-section");
    wellcomeSect.setAttribute("class", "col-md-8 text-center");
    presentDiv.appendChild(wellcomeSect);

    const h1WellCome = document.createElement("h1");
    h1WellCome.innerHTML= "Parral, Cafe & Grill";
    wellcomeSect.appendChild(h1WellCome);

    const leadWellcome = document.createElement("p");
    leadWellcome.setAttribute("class", "lead");
    leadWellcome.textContent = "The Best Place to Eat, Drink and learn JavaScrip + Bootstrap 4!";
    wellcomeSect.appendChild(leadWellcome);

    const anchorWellcome = document.createElement("a");
    anchorWellcome.setAttribute("class", "btn btn-secondary btn-sm");
    anchorWellcome.setAttribute("href","#menu-tab");
    anchorWellcome.textContent = "Wellcome";
    wellcomeSect.appendChild(anchorWellcome);
  }

  return { putBackgr, putPresentation };
})();

export { landing };