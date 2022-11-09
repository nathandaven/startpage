'use strict';

function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const secondes = date.getSeconds();

  let time = '';
  time += hours;
  time += ':';
  time += minutes < 10 ? '0' + minutes : minutes;
  time += ':';
  time += secondes < 10 ? '0' + secondes : secondes;

  return time;
}

export default getCurrentTime;
