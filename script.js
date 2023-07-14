const numbers = document.querySelector('.numbers')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const reset = document.querySelector('[data-submit-type="reset"]')
let inputedTime = `${hours.innerHTML}${minutes.innerHTML}${seconds.innerHTML}`.split('')
numbers.addEventListener('click', (event) => {
    if(event.target.classList.contains('numbers')) return
    if(!Number(event.target.innerHTML)) return
    inputedTime.push(event.target.innerHTML)
    inputedTime.shift()
    translateToTime(inputedTime)
})

function translateToTime(arr) {
    hours.innerHTML = `${arr[0]}${arr[1]}`
    minutes.innerHTML = `${arr[2]}${arr[3]}`
    seconds.innerHTML = `${arr[4]}${arr[5]}`
}

reset.addEventListener('click', () => {
    hours.innerHTML = '00'
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'
})