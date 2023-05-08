// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
const voiceSelect = document.querySelector("select");
let voices = [];


function populateVoiceList() {
  voices = synth.getVoices();

  for(let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    voiceSelect.appendChild(option);
  }
}

function init() {
  // TODO
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const button = document.querySelector("button");
  const text = document.querySelector("textarea");
  const image = document.querySelector("img");

  button.onclick = function() {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    utterThis.voice = voices[voiceSelect.value];
    synth.speak(utterThis);

    image.src = "./assets/images/smiling-open.png";

    utterThis.addEventListener("end", function() {
      image.src = "./assets/images/smiling.png";
    });

  }
  
}