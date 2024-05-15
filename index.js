const pPlay = document.querySelector('#pPlay-el')
const reset = document.querySelector('#reset-el')
const timerDisplay = document.getElementById('timerDisplay-el')

let seconds = 0
let minutes = 0
let hours = 0

let leadingZero = 0

let hoursd = `0${hours}`
let minutesd = `0${minutes}`
let secondsd = `0${seconds}`

function stopwatch () { 
    seconds ++

    if (seconds / 60 == 1) {
        seconds = 0
        minutes ++
    }
    if (minutes / 60 == 1) {
        minutes = 0
        hours ++
    }
   
    if(seconds>=10) {
        secondsd = seconds
    } else {secondsd = `0${seconds}`}
    if(minutes>=10) {
        minutesd = minutes
    } else {minutesd = `0${minutes}`}
    if(hours>=10) {
        hoursd = hours
    } else {hoursd = `0${hours}`}
    
    
}

setInterval(() => {
    stopwatch()
    timerDisplay.textContent = `${hoursd} : ${minutesd} : ${secondsd}`
},1)
