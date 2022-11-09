'use strict';

import getCurrentTime from './clock';
// import getDay from './day';
import './app.css';

(function () {
  function setTime() {
    const time = getCurrentTime();

    document.getElementById('clock').innerHTML = time;
  }

  function setImage() {
    const imageNumber = 5;
    let x = Math.floor(Math.random() * imageNumber + 1);
    document.getElementById(
      'img'
    ).innerHTML = `<img src="./images/image-${x}.gif" alt="gif" />`;
  }

  function setDay() {
    const day = getDay();

    document.getElementById('day').innerHTML = day;
  }

  function setupDashboard() {
    // setDay();
    setTime();
    setImage();
    setInterval(setTime, 1000);
  }

  setupDashboard();

  // Communicate with background file by sending a message
  chrome.runtime.sendMessage(
    {
      type: 'GREETINGS',
      payload: {
        message: 'Hello, my name is Ove. I am from Override app.',
      },
    },
    (response) => {
      console.log(response.message);
    }
  );
})();
