const numbers = document.querySelector('.numbers')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const reset = document.querySelector('[data-submit-type="reset"]')
const start = document.querySelector('[data-submit-type="start"]')
const del = document.querySelector('[data-submit-type="delete"]')
let inputedTime = `${hours.innerHTML}${minutes.innerHTML}${seconds.innerHTML}`.split('')
numbers.addEventListener('click', (event) => {
    if (event.target.classList.contains('numbers')) return
    if (!Number(event.target.innerHTML)) return
    inputedTime.push(event.target.innerHTML)
    inputedTime.shift()
    translateToTime(inputedTime)
})

reset.addEventListener('click', () => {
    hours.innerHTML = '00'
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'
    inputedTime = ['0', '0', '0', '0', '0', '0']
})

start.addEventListener('click', () => {
    const goal = new Date().getTime() + convertToTime(inputedTime)
    Countdown.timer(goal, function (time) {
        document.querySelector('.hours').textContent = ('0' + time.hours).substring(-2)
        document.querySelector('.minutes').textContent = ('0' + time.minutes).substring(-2)
        document.querySelector('.seconds').textContent = ('0' + time.seconds).substring(-2)
    }, function () {
        document.querySelector('.hours').textContent = '00'
        document.querySelector('.minutes').textContent = '00'
        document.querySelector('.seconds').textContent = '00'
    })
})

del.addEventListener('click', () => alert('Whooops... At this time I dont do anything :( TBA'))

function convertToTime(arr) {
    const cHours = Number(`${arr[0]}${arr[1]}`) * 3600000 // 1h = 3600s and 1s = 1000ms
    const cMinutes = Number(`${arr[2]}${arr[3]}`) * 60000 // 1m = 60s and 1s = 1000ms
    const cSeconds = Number(`${arr[4]}${arr[5]}`) * 1000 // 1s = 1000ms
    console.log(123)
    console.log(cHours + cMinutes + cSeconds)
    return cHours + cMinutes + cSeconds
}

function translateToTime(arr) {
    hours.innerHTML = `${arr[0]}${arr[1]}`
    minutes.innerHTML = `${arr[2]}${arr[3]}`
    seconds.innerHTML = `${arr[4]}${arr[5]}`
}