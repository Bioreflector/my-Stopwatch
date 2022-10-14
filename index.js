const hoursOut = document.querySelector('.hours')
const minutesOut = document.querySelector('.minutes')
const secondsOut = document.querySelector('.seconds')
const milisecondsOut = document.querySelector('.miliseconds')
const startBtn = document.querySelector('.start-btn')
const pauseBtn = document.querySelector('.pause-btn')
const resetBtn = document.querySelector('.reset-btn')
const lapBtn = document.querySelector('.lap-btn')
const resultOut = document.querySelector('.result')
const stopwatchValue = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    lapTime: 0,
    lap: 1
}
let interval

startBtn.addEventListener('click' , ()=>{
    clearInterval(interval)
    interval = setInterval(startStopwatch, 10)
})
pauseBtn.addEventListener('click' , () => clearInterval(interval))

lapBtn.addEventListener('click' , () => {
    resultOut.innerHTML += `<p>Lap ${stopwatchValue.lap} : ${msToTime(stopwatchValue.lapTime)}</p>`
    stopwatchValue.lap++
    stopwatchValue.lapTime = 0
})
resetBtn.addEventListener('click' , resetStopwatch)


function startStopwatch(){
    stopwatchValue.milliseconds++
    stopwatchValue.lapTime++
    stopwatchValue.milliseconds < 9 ? milisecondsOut.innerText = `0${stopwatchValue.milliseconds}`: milisecondsOut.innerText = stopwatchValue.milliseconds
    if(stopwatchValue.milliseconds > 99){
        stopwatchValue.seconds++
        stopwatchValue.milliseconds = 0
    }
    stopwatchValue.seconds < 9 ? secondsOut.innerText = `0${stopwatchValue.seconds}`: secondsOut.innerText = stopwatchValue.seconds
    if(stopwatchValue.seconds > 59){
        stopwatchValue.minutes++
        stopwatchValue.seconds = 0
    }
    stopwatchValue.minutes < 9 ? minutesOut.innerText = `0${stopwatchValue.minutes}`: minutesOut.innerText = stopwatchValue.minutes
    if(stopwatchValue.minutes > 59){
        stopwatchValue.hours++
        stopwatchValue.minutes = 0
    }
    stopwatchValue.hours < 9 ? hoursOut.innerText = `0${stopwatchValue.hours}`: hoursOut.innerText = stopwatchValue.hours
}
function msToTime(time){
    let milliseconds = parseInt((time % 100) / 10)
    let seconds = parseInt((time / 100) % 60)
    let minutes = parseInt((time / (100 * 60)) % 60)
    let hours = parseInt((time / (100 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    console.log(seconds)
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
function resetStopwatch(){
    clearInterval(interval)
    stopwatchValue.hours = 0
    stopwatchValue.minutes = 0
    stopwatchValue.seconds = 0
    stopwatchValue.milliseconds  = 0
    stopwatchValue.lapTime = 0
    stopwatchValue.lap = 1
    hoursOut.innerText = '00'
    minutesOut.innerText = '00'
    secondsOut.innerText = '00'
    milisecondsOut.innerText = '00'
    resultOut.innerHTML = ''
}

