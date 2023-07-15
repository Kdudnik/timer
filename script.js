const numbers = document.querySelector('.numbers')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const reset = document.querySelector('[data-submit-type="reset"]')
const start = document.querySelector('[data-submit-type="start"]')
const del = document.querySelector('[data-submit-type="delete"]')
const clock = document.querySelector('.clock')
const progressBarWrapper = document.querySelector('.progress-bar-wrapper')
const progressBar = progressBarWrapper.querySelector('.progress-bar')
let inputedTime = `${hours.innerHTML}${minutes.innerHTML}${seconds.innerHTML}`.split('')

let timer = null

numbers.addEventListener('click', (event) => {
    if (event.target.classList.contains('numbers')) return
    inputedTime.push(event.target.innerHTML)
    inputedTime.shift()
    translateToTime(inputedTime)
})

reset.addEventListener('click', () => {
    hours.innerHTML = '00'
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'
    inputedTime = ['0', '0', '0', '0', '0', '0']
    progressBarWrapper.style.display = "none"
    numbers.style.display = "flex"
    clock.style.flexGrow = "0"
    timer.abort()
})

start.addEventListener('click', () => {
    if (hours.textContent == '00' && minutes.textContent == '00' && seconds.textContent == '00') return
    clock.style.flexGrow = "1"
    progressBarWrapper.style.display = "flex"
    numbers.style.display = "none"
    const goal = new Date().getTime() + convertToTime(inputedTime)
    progressBar.style.animation = `${Math.floor((goal - new Date().getTime()) / 1000)}s show-progress linear`
    timer = Countdown.timer(goal, function (time) {
        hours.textContent = time.hours.toLocaleString(undefined, { minimumIntegerDigits: 2 })
        minutes.textContent = time.minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 })
        seconds.textContent = time.seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 })
    }, function () {
        hours.textContent = '00'
        minutes.textContent = '00'
        seconds.textContent = '00'
        progressBar.style.width = "100%"
    })
})

del.addEventListener('click', () => alert('Whooops... At this time I dont do anything :( TBA'))

function convertToTime(arr) {
    const cHours = Number(`${arr[0]}${arr[1]}`) * 3600000 // 1h = 3600s and 1s = 1000ms
    const cMinutes = Number(`${arr[2]}${arr[3]}`) * 60000 // 1m = 60s and 1s = 1000ms
    const cSeconds = Number(`${arr[4]}${arr[5]}`) * 1000 // 1s = 1000ms
    return cHours + cMinutes + cSeconds
}

function translateToTime(arr) {
    console.log(arr)
    hours.innerHTML = `${arr[0]}${arr[1]}`
    minutes.innerHTML = `${arr[2]}${arr[3]}`
    seconds.innerHTML = `${arr[4]}${arr[5]}`
}