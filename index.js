const hoursOut = document.querySelector('.hours')
const minutesOut = document.querySelector('.minutes')
const secondsOut = document.querySelector('.seconds')
const milisecondsOut = document.querySelector('.miliseconds')
const toggleStartStopBtn = document.querySelector('.start-stop-btn')
const toggleLapResetBtn = document.querySelector('.lap-reset-btn')
const resultOut = document.querySelector('.result')
toggleLapResetBtn.disabled = true
const stopwatchValue = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    lapTime: 0,
    lap: 1,
    lapResult:[]
}
let interval

toggleStartStopBtn.addEventListener('click' , ()=>{
    clearInterval(interval)
    toggleStartStopBtn.classList.toggle('started')
    toggleStartStopBtn.className.includes('started') ? start() : stop()
})

function start(){
    interval = setInterval(startStopwatch, 10)
    toggleStartStopBtn.innerText = 'Stop'
    toggleLapResetBtn.innerText = 'Lap'
    toggleLapResetBtn.classList.remove('reset-active')
    toggleLapResetBtn.disabled = false
    toggleLapResetBtn.removeEventListener('click' , resetStopwatch)
    toggleLapResetBtn.addEventListener('click' ,  lap)

}

function stop(){
    toggleStartStopBtn.innerText = 'Start'
    toggleLapResetBtn.innerText = 'Reset'
    toggleLapResetBtn.classList.add('reset-active')
    toggleLapResetBtn.removeEventListener('click' ,  lap)
    toggleLapResetBtn.addEventListener('click' , resetStopwatch)
}

function lap(){
    stopwatchValue.lapResult.push(stopwatchValue.lapTime)
    randerLapResult()
    stopwatchValue.lapTime = 0
}

function randerLapResult(){
    const {lapResult} = stopwatchValue
    resultOut.innerHTML = ""
    lapResult.forEach((timeLap ,index) =>{
        if(timeLap === Math.min(...lapResult)){
            resultOut.innerHTML += `<p class = 'best-time time-result'>Lap ${index + 1} - ${msToTime(timeLap)}</p>`
        }
        else if(timeLap === Math.max(...lapResult)){
            resultOut.innerHTML += `<p class = 'worst-time time-result'>Lap ${index + 1} - ${msToTime(timeLap)}</p>`
        }
        else{
            resultOut.innerHTML += `<p class = 'time-result'>Lap ${index + 1} - ${msToTime(timeLap)}</p>`
        }
        })
}

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
    return `${hours} : ${minutes} : ${seconds} : ${milliseconds}`  
}

function resetStopwatch(){
    clearInterval(interval)
    toggleLapResetBtn.disabled = true
    stopwatchValue.hours = 0
    stopwatchValue.minutes = 0
    stopwatchValue.seconds = 0
    stopwatchValue.milliseconds  = 0
    stopwatchValue.lapTime = 0
    stopwatchValue.lap = 1
    stopwatchValue.lapResult = []
    hoursOut.innerText = '00'
    minutesOut.innerText = '00'
    secondsOut.innerText = '00'
    milisecondsOut.innerText = '00'
    resultOut.innerHTML = ''
}

