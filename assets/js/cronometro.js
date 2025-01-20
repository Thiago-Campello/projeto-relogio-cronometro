const clock = document.querySelector(".clock");
const bStart = document.querySelector(".start");
const bVolta = document.querySelector(".volta");
const divTextWraper = document.querySelector('.text-wrapper');

let timer;
let hour = 0;
let min = 0;
let sec = 0;
let volta = 1;

bStart.addEventListener("click", function () {
  clearInterval(timer);

  if (bStart.classList.contains("pause")) {
    bStart.classList.remove("pause");
    bStart.innerHTML = "Iniciar";
    bVolta.classList.add('reset');
    bVolta.innerHTML = "Zerar";
    return;
  } else {
    bStart.classList.add("pause");
    bStart.innerHTML = "Parar";
    bVolta.innerHTML = "Volta";
    bVolta.disabled = false;
  }

  if (!divTextWraper.classList.contains('created')) {
    divTextWraper.classList.add('created');
    createDivText(`Volta ${volta}`, formatTime(hour, min, sec));
    volta++;
  }

  timer = setInterval(() => {
    if (sec < 59) {
      sec++;
    } else if (min < 59) {
      sec = 0;
      min++;
    } else if (hour < 23) {
      sec = 0;
      min = 0;
      hour++;
    } else {
      sec = 0;
      min = 0;
      hour = 0;
    }

    const currentTime = formatTime(hour, min, sec);
    clock.innerHTML = currentTime;

    // Atualizar o segundo parágrafo da última div
    const lastDiv = divTextWraper.lastElementChild;
    if (lastDiv && lastDiv.classList.contains("texts")) {
      const lastPar = lastDiv.querySelector("p:last-child");
      if (lastPar) {
        lastPar.innerHTML = currentTime;
      }
    }
  }, 1000);
});

bVolta.addEventListener("click", function () {
  if (bVolta.classList.contains("reset")) {
    // Resetar o cronômetro
    bStart.classList.remove("pause");
    bStart.innerHTML = "Iniciar";
    bVolta.classList.remove("reset");
    bVolta.innerHTML = "Volta";
    bVolta.disabled = true;

    clearInterval(timer);
    clock.innerHTML = `00:00:00`;
    hour = 0;
    min = 0;
    sec = 0;
    volta = 1;

    // Limpar todas as divs de volta
    divTextWraper.innerHTML = '';
    divTextWraper.classList.remove('created');
  } else {
    // Capturar o tempo atual para registrar a volta
    const currentTime = formatTime(hour, min, sec);
    createDivText(`Volta ${volta}`, currentTime);
    volta++;
  }
});

function formatTime(h, m, s) {
  return `${zeroOnTheLeft(h)}:${zeroOnTheLeft(m)}:${zeroOnTheLeft(s)}`;
}

function zeroOnTheLeft(n) {
  return n < 10 ? `0${n}` : n;
}

function createDivText(firstMsg, secondMsg) {
  const divText = document.createElement('div');
  divText.classList.add('texts');

  const p1 = document.createElement('p');
  p1.innerHTML = firstMsg;

  const p2 = document.createElement('p');
  p2.innerHTML = secondMsg;

  divText.appendChild(p1);
  divText.appendChild(p2);
  divTextWraper.appendChild(divText);
}