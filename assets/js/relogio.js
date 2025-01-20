document.addEventListener("DOMContentLoaded", () => {
  const clock = document.querySelector(".clock");

  function updateClock() {
    const now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const t = formatTime(hour, min);

    clock.innerHTML = t;
  }

  updateClock();

  setInterval(updateClock, 1000);
  function formatTime(h, m) {
    return `${zeroOnTheLeft(h)}:${zeroOnTheLeft(m)}`;
  }

  function zeroOnTheLeft(n) {
    return n < 10 ? `0${n}` : n;
  }
});
