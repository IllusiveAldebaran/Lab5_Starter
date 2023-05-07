"always strict";
// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  //console.log("Hello world");
  const horn_selection = document.getElementById("horn-select");
  const horn_image = document.querySelector("img[alt='No image selected']");
  const horn_audio = document.getElementsByClassName("hidden");
  const audio_level = document.getElementById("volume");
	//!FIXME: the next depends on the 'alt' attribute unchanging. Since we can't access the JS it would be good to use the css structure of saying it is the descendent of a div with id='volume-controls', but this works for this lab
  let volume_icon = document.querySelector("img[alt='Volume level 2']");


  horn_selection.addEventListener("change", (event) => {  
    switch (event.target.value) {
      case "car-horn":
        horn_image.src = "/assets/images/car-horn.svg";
        horn_audio.src = "/assets/audio/car-horn.mp3";
	break;
      case "air-horn":
        horn_image.src = "/assets/images/air-horn.svg";
        horn_audio.src = "/assets/audio/air-horn.mp3";
	break;
      case "party-horn":
        horn_image.src = "/assets/images/party-horn.svg";
        horn_audio.src = "/assets/audio/party-horn.mp3";
	break;
      default:
	horn_image.src = "";
        horn_audio.src = "";
	
    }
	
    });


  //!FIXME Add a playing of audio
  console.log("No audio yet, but audio source (horn_audio.src) is in", horn_audio.src);

  audio_level.addEventListener("input", (event) => {
    horn_audio.volume = (audio_level.value)/100;
console.log(audio_level.value/100)

    // alternative is to multiply the above by 3 and put the string into /assets/icons/volume-level-{volume}.svg
    if (audio_level.value == 0) {
      volume_icon.src = "/assets/icons/volume-level-0.svg"
    }
    else if (audio_level.value < 33 ) {
      volume_icon.src = "/assets/icons/volume-level-1.svg"
    }
    else if (audio_level.value < 67) {
      volume_icon.src = "/assets/icons/volume-level-2.svg"
    }
    else {
      volume_icon.src = "/assets/icons/volume-level-3.svg"
    }

  }); 

}
