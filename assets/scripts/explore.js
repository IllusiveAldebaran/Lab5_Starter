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
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  
}