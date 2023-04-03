const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const resumeBtn = document.querySelector('.resume-btn');
const stopBtn = document.querySelector('.stop-btn');

const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const millisecondsEl = document.querySelector('.milliseconds')

let interval;
let isPaused = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', pause);
resumeBtn.addEventListener('click', resume);
resetBtn.addEventListener('click', reset)

function start(){
    interval = setInterval(function (){
        if (isPaused == false){
            milliseconds+=10

            if (milliseconds == 1000){
                seconds++
                milliseconds = 0
            }

            if (seconds == 60){
                minutes++
                seconds = 0
            }

            if (minutes == 60){
                hours++
                minutes = 0
            }

            timeContent()
        }
    }, 10)

    startBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
    stopBtn.style.display = 'inline-block';
}

function formatTime(time){
    return time < 10 ? '0' + time : time
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, '0') : time
}

function timeContent(){
    millisecondsEl.innerHTML = formatMilliseconds(milliseconds);
    secondsEl.innerHTML = formatTime(seconds);
    minutesEl.innerHTML = formatTime(minutes);
    hoursEl.innerHTML = formatTime(hours);
}

function pause(){
    isPaused = true

    resumeBtn.style.display = 'inline-block'
    stopBtn.style.display = 'none'
}

function resume(){
    isPaused = false

    resumeBtn.style.display = 'none'
    stopBtn.style.display = 'inline-block'
}

function reset(){
    clearInterval(interval);

    isPaused = false

    milliseconds = 00;
    seconds = 00;
    minutes = 00;
    hours = 00;

    timeContent()

    stopBtn.style.display = 'none'
    resetBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
    resumeBtn.style.display = 'none'
}