let timer;
let timeLeft = 0; 
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

function updateDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function startTimer() {
    if (timer) return; 
    if (timeLeft === 0) {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;

        timeLeft = hours * 3600 + minutes * 60 + seconds;
        updateDisplay();
    }

    if (timeLeft <= 0) return;

    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            alert("¡Tiempo terminado!");
        }
    }, 1000);
}
function pauseTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}
function resetTimer() {
    pauseTimer();
    timeLeft = 0;
    updateDisplay();
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);