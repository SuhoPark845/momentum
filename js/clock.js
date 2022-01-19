const clock = document.querySelector("h2#clock");

function getTimeUntilChristmas() {
  const date = new Date();
  const thisYear = date.getFullYear();

  const christmasDate = new Date(`${thisYear}-12-25 00:00:00`);

  const nowDate = new Date();
  const diffDate = christmasDate - nowDate;

  const millisecondsOfOneDay = 24 * 60 * 60 * 1000;
  const millisecondsOfOneHour = 60 * 60 * 1000;
  const millisecondsOfOneMinute = 60 * 1000;
  const millisecondsOfOneSecond = 1000;

  let diffDay = Math.floor(diffDate / millisecondsOfOneDay);
  let remainingTimeForToday = diffDate - diffDay * millisecondsOfOneDay;

  let diffHour = Math.floor(remainingTimeForToday / millisecondsOfOneHour);
  remainingTimeForToday =
    remainingTimeForToday - diffHour * millisecondsOfOneHour;

  let diffMinute = Math.floor(remainingTimeForToday / millisecondsOfOneMinute);
  remainingTimeForToday =
    remainingTimeForToday - diffMinute * millisecondsOfOneMinute;

  let diffSecond = Math.floor(remainingTimeForToday / millisecondsOfOneSecond);
  remainingTimeForToday =
    remainingTimeForToday - diffSecond * millisecondsOfOneSecond;

  diffDay = String(diffDay).padStart(3, "0");
  diffHour = String(diffHour).padStart(2, "0");
  diffMinute = String(diffMinute).padStart(2, "0");
  diffSecond = String(diffSecond).padStart(2, "0");
  clock.innerText = `${diffDay}d ${diffHour}h ${diffMinute}m ${diffSecond}s`;
}

getTimeUntilChristmas();
setInterval(getTimeUntilChristmas, 1000);
