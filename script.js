let hrValue = 0;
let minValue = 0;
let secValue = 0;
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");

//calculate the increasing time
const increseTime = () => {
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
  increseTime();
  //update sec
  document.getElementById("sec").innerText = secValue
    .toString()
    .padStart(2, "0"); //padStart(2,"0") will help to have "01" insted of "1".
  //update min
  document.getElementById("min").innerText = minValue
    .toString()
    .padStart(2, "0");
  //update hr
  document.getElementById("hr").innerText = hrValue.toString().padStart(2, "0");
};

let interval = 0;
//start button starts the 1s intervals
const handleOnStart = () => {
  interval = setInterval(setTime, 1000);
};

//stops the timer
const handleOnStop = () => {
  console.log("stop");
  clearInterval(interval);
};

// stop and resets the timer
const handleOnReset = () => {
  handleOnStop();
  //reset all value
  secValue = 0;
  minValue = 0;
  hrValue = 0;
  //send the reset value to DOM.
  document.getElementById("sec").innerText = secValue
    .toString()
    .padStart(2, "0");
  document.getElementById("min").innerText = minValue
    .toString()
    .padStart(2, "0");
  document.getElementById("hr").innerText = hrValue.toString().padStart(2, "0");
};
//eventlisteners
startbtn.addEventListener("click", handleOnStart);
stopbtn.addEventListener("click", handleOnStop);
resetbtn.addEventListener("click", handleOnReset);
