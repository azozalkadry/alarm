document.addEventListener('DOMContentLoaded', function () {
    const timer = document.getElementById('timer');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let startTime;
    let stopwatchInterval;
    let elapsedTime = 0;

    function formatTime(milliseconds) {
        const minutes = Math.floor(milliseconds / (1000 * 60));
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
        const millisecondsPart = milliseconds % 1000;

        return `${padNumber(minutes)} : ${padNumber(seconds)} : ${padNumber(millisecondsPart, 3)}`;
    }

    function padNumber(number, length = 2) {
        return number.toString().padStart(length, '0');
    }

    function startStopwatch() {
        startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(function () {
            const elapsedMilliseconds = Date.now() - startTime;
            timer.textContent = formatTime(elapsedMilliseconds);
        }, 1);
    }

    function stopStopwatch() {
        clearInterval(stopwatchInterval);
        elapsedTime = Date.now() - startTime;
    }

    function resetStopwatch() {
        clearInterval(stopwatchInterval);
        timer.textContent = '00 : 00 : 000';
        elapsedTime = 0;
    }

    startButton.addEventListener('click', startStopwatch);
    stopButton.addEventListener('click', stopStopwatch);
    resetButton.addEventListener('click', resetStopwatch);
});