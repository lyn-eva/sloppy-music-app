const sound = document.querySelector('.sound-icon');
const volumePercent = document.querySelector('.percent');
const vol = document.getElementById('volume');
const music = document.querySelector('audio');
const action = document.querySelector('.basic-actions');

updateVolume();
sound.onclick = (() => {
   let cond = true, previousVolume = 0;
   return function() {
      if (cond) {
         sound.firstChild.className = "fas fa-volume-mute";
         previousVolume = vol.value;
         vol.value = 0;
         volumePercent.textContent = 0;
         cond = false;
      }
      else {
         sound.firstChild.className = "fas fa-volume-up";
         vol.value = previousVolume;
         volumePercent.textContent = previousVolume;
         cond = true;
      }
   }
})()
vol.onchange = () => {
   updateVolume();
}
vol.onmousemove = () => {
   updateVolume();
}

action.onclick = (e => {
   let cond1 = false;
   function() {

      if (e.target.className == "pause") {
         if (cond1) {
            music.pause();
            e.target.firstChild.className = "fas fa-play";
            cond1 = false;
         }
         else {
            music.play();
            e.target.firstChild.className = "fas fa-pause";
            cond1 = true;
         }
      }
   }
})()

   function updateVolume() {
      music.volume = (vol.value / 100);
   }
      volumePercent.textContent = vol.value;
      
   }