const hoursOut = document.querySelector('.hours')
const minutesOut = document.querySelector('.minutes')
const secondsOut = document.querySelector('.seconds')
const milisecondsOut = document.querySelector('.miliseconds')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const stopwatchValue = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0
}
let interval

startBtn.addEventListener('click' , ()=>{
    clearInterval(interval)
    interval = setInterval(startStopwatch, 10)
})
pauseBtn.addEventListener('click' , () => clearInterval(interval))
resetBtn.addEventListener('click' , resetStopwatch)


function startStopwatch(){
    stopwatchValue.miliseconds++
    stopwatchValue.miliseconds < 9 ? milisecondsOut.innerText = `0${stopwatchValue.miliseconds}`: milisecondsOut.innerText = stopwatchValue.miliseconds
    if(stopwatchValue.miliseconds > 99){
        stopwatchValue.seconds++
        stopwatchValue.miliseconds = 0
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

function resetStopwatch(){
    clearInterval(interval)
    stopwatchValue.hours = 0
    stopwatchValue.minutes = 0
    stopwatchValue.seconds = 0
    stopwatchValue.miliseconds = 0
    hoursOut.innerText = '00'
    minutesOut.innerText = '00'
    secondsOut.innerText = '00'
    milisecondsOut.innerText = '00'
}