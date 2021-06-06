let countdown = null;

const countdownElem = document.getElementById("date");
const formSubmit = document.getElementById("submit");
const countdownElement = document.getElementById("countdown");

const getCountdow = (countdown) => {
  const countdownDate = new Date(countdown || Date.now());
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

  return `${days}d - ${hours}h - ${minutes}m - ${seconds}s`;
};

document.addEventListener("DOMContentLoaded", () => {
  countdownElement.textContent = getCountdow(Date.now());
});

formSubmit.addEventListener("click", (e) => {
  countdown = countdownElem.value;
  countdownElement.textContent = getCountdow(countdown);
});

setInterval(() => {
  countdownElement.textContent = getCountdow(countdown || Date.now());
}, 1000);
