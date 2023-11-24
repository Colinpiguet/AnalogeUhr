// Arrays containing image URLs for different hours of the day
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

// Function to set a random background image from imgArray1
function imgRandom1() {
  var rand1 = imgArray1[Math.floor(Math.random() * imgArray1.length)];
  document.body.style.backgroundImage = "url(" + rand1 + ")";
}

// Function to set a random background image from imgArray2
function imgRandom2() {
  var rand2 = imgArray2[Math.floor(Math.random() * imgArray2.length)];
  document.body.style.backgroundImage = "url(" + rand2 + ")";
}

// Function to update the rotation of clock hands
function updateClockHand(selector, rotation) {
  const hand = document.querySelector(selector);
  hand.style.transform = `rotate(${rotation}deg)`;
}

// Function to update the clock hands based on the current time
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Update rotation angles for each clock hand
  updateClockHand('.hour-hand', (360 / 12) * hours + (360 / 12) * (minutes / 60));
  updateClockHand('.min-hand', (360 / 60) * minutes);
  updateClockHand('.second-hand', (360 / 60) * seconds);
}

// Function to set a random background image based on the time of day
window.onload = function() {
  const now = new Date();
  const hours = now.getHours() % 24 || 24; // Convert to 24-hour format

  // Set a random background image from imgArray1 for daytime, otherwise from imgArray2
  if (hours > 4 && hours < 16) {
    imgRandom1();
  } else {
    imgRandom2();
  }

  // Initial call to update the clock
  updateClock();

  // Update the clock every second
  setInterval(updateClock, 1000);
};
