    let timer;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    function startStopwatch() {
        timer = setInterval(updateStopwatch, 10);
    }

    function stopStopwatch() {
        clearInterval(timer);
    }
function resetStopwatch() {
        clearInterval(timer);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        updateDisplay();
    }

    function updateStopwatch() {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        updateDisplay();
    }

    function updateDisplay() {
        document.getElementById('minutesS').innerText = padNumber(minutes);
        document.getElementById('secondsS').innerText = padNumber(seconds);
        document.getElementById('ml-secondsS').innerText = padNumber(milliseconds);
    }

    function padNumber(num) {
        return num.toString().padStart(2, '0');
    }