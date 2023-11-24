var imgArray1 = [
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
];

var imgArray2 = [
  "images/20.jpg",
  "images/21.jpg",
  "images/22.jpg",
  "images/23.jpg",
  "images/24.jpg",
  "images/25.jpg",
  "images/26.jpg",
  "images/27.jpg",
];

function imgRandom1() {
  var rand1 = imgArray1[Math.floor(Math.random() * imgArray1.length)];
  document.body.style.backgroundImage = "url(" + rand1 + ")";
}

function imgRandom2() {
  var rand2 = imgArray2[Math.floor(Math.random() * imgArray2.length)];
  document.body.style.backgroundImage = "url(" + rand2 + ")";
}

function updateClockHand(selector, rotation) {
  const hand = document.querySelector(selector);
  hand.style.transform = `rotate(${rotation}deg)`;
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  updateClockHand('.hour-hand', (360 / 12) * hours + (360 / 12) * (minutes / 60));
  updateClockHand('.min-hand', (360 / 60) * minutes);
  updateClockHand('.second-hand', (360 / 60) * seconds);
}

// Funktion aufrufen, um beim Laden der Seite ein zufälliges Bild zu setzen
window.onload = function() {
  const now = new Date();
  const hours = now.getHours() % 24 || 24; // Convert to 12-hour format

  if (hours > 4 && hours < 16) {
    imgRandom1();
  } else {
    imgRandom2();
  }

  // Update der Uhr initial aufrufen
  updateClock();

  // Update der Uhr jede Sekunde aufrufen
  setInterval(updateClock, 1000);
};

window.onload()