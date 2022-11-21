'use strict';

import './app.css';
import dayjs from 'dayjs';
import getCurrentTime from './clock';
import getDay from './day';
import greetPlugin from 'dayjs-greet';

(function () {
  dayjs.extend(greetPlugin);
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

  function setGreetings() {
    const day = getDay();
    document.getElementById('greetings').innerHTML = `<h1>${dayjs(
      day
    ).greet()}<i style='color: #8c977d'>
    gael
    </i></h1>`;
  }

  function setupDashboard() {
    setGreetings();
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
