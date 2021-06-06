const countdown = prompt("Enter the date like: day month(as a word) year?");

let countdowFunc = () => {
  const countdownDate = new Date(countdown);
  const currentDate = new Date();
  const timeLeft = countdownDate - currentDate;
  const days = Math.trunc(timeLeft / 86400000);
  const hours = Math.trunc((timeLeft - days * 24 * 3600 * 1000) / 3600000);
  const minutes = Math.trunc(
    (timeLeft - days * 24 * 3600 * 1000 - hours * 60 * 60 * 1000) / 60000
  );
  const seconds = Math.trunc(
    (timeLeft -
      days * 24 * 3600 * 1000 -
      hours * 60 * 60 * 1000 -
      minutes * 60000) /
      1000
  );

  const object = {
    days,
    hours,
    minutes,
    seconds,
  };
  
  Object.keys(object).forEach((key) => {
    document.getElementById(key).textContent = object[key];
  });
};

countdowFunc();
setInterval(countdowFunc, 1000);
