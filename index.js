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
    
    timerDisplay.textContent = `${hoursd} : ${minutesd} : ${secondsd}`
}

// let TimerControl = window.setInterval(() => {
//     stopwatch()
//     timerDisplay.textContent = `${hoursd} : ${minutesd} : ${secondsd}`
// },1000/2000)

let timerId = null
let timerStatus = "stopped"

pPlay.addEventListener ('click', function() {
    if (timerStatus === "stopped") {
        timerStatus = "started"

        timerId = setInterval(
            stopwatch
        ,1)

        pPlay.innerHTML = `<i class="fa-regular fa-circle-pause"></i>`

    } else  {
        timerStatus = "stopped"
        pPlay.innerHTML = `<i class="fa-regular fa-circle-play"></i>`
        clearInterval(
           timerId
        )
    }
})


reset.addEventListener ('click', function() {

     seconds = 0
     minutes = 0
     hours = 0
    
    
    
     hoursd = `0${hours}`
     minutesd = `0${minutes}`
    secondsd = `0${seconds}`
    
    timerDisplay.textContent = `${hoursd} : ${minutesd} : ${secondsd}`
})

