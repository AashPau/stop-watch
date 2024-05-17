let hrValue = 0;
let minValue = 0;
let secValue = 0;
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");
const secElement = document.getElementById("sec");
const minElement = document.getElementById("min");
const hrElement = document.getElementById("hr");
let intervalId = null;

//calculate the increasing time
const increaseTime = () => {
  secValue++;
  if (secValue >= 60) {
    secValue = 0;
    minValue++;
    if (minValue >= 60) {
      minValue = 0;
      hrValue++;
    }
  }
};

//update the time in DOM
const setTime = () => {
  increaseTime();
  //update sec
  secElement.innerText = secValue.toString().padStart(2, "0"); //padStart(2,"0") will help to have "01" insted of "1".
  //update min
  minElement.innerText = minValue.toString().padStart(2, "0");
  //update hr
  hrElement.innerText = hrValue.toString().padStart(2, "0");
};

//start button starts the 1s intervals
const handleOnStart = () => {
  if (!intervalId) {
    intervalId = setInterval(setTime, 1000);
  } else return;
};

//stops the timer
const handleOnStop = () => {
  clearInterval(intervalId);
  intervalId = null; // Reset intervalId
};

// stop and resets the timer
const handleOnReset = () => {
  handleOnStop();
  //reset all value
  secValue = 0;
  minValue = 0;
  hrValue = 0;
  //send the reset value to DOM.
  secElement.innerText = "00";
  minElement.innerText = "00";
  hrElement.innerText = "00";
};
//eventlisteners
startbtn.addEventListener("click", handleOnStart);
stopbtn.addEventListener("click", handleOnStop);
resetbtn.addEventListener("click", handleOnReset);

// // Initialize displayed time with initial values
// setTime();
