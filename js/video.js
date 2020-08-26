
const videoLoop = (function() {

function looper(elem){
  if (elem.currentTarget.currentTime >= 4) {
    elem.currentTarget.currentTime = 1;
    elem.play();
  }
}


function videoEndListener() {
  elem=document.getElementById("bgvid");
  elem.addEventListener('timeupdate', looper);
}

return { videoEndListener, looper };
})();

videoLoop.videoEndListener();