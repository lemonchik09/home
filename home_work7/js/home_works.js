//home1//{задание1 провалено}//home2//

const childBlock = document.querySelector(child_block)

const parentFreeWidth = 449
const moveSpeedChildBlock =10

let positionX= 0
let positionY= 0

const moveBlock = () => {
    if (positionX < parentFreeWidth) {
        positionX++
        childBlock.style.left = '${positionX}px'
        setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionX <= parentFreeWidth && positionY < parentFreeWidth) {
        positionY++
    childBlock.style.top = '${positionY}px'
    setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionY <= parentFreeWidth && positionX < parentFreeWidth) {
        positionX++
        childBlock.style.right = '${positionX}px'
        setTimeout(moveBlock, moveSpeedChildBlock)
    }  else if (positionX <= parentFreeWidth && positionY < parentFreeWidth) {
        positionX++
        childBlock.style.top = '${positionY}px'
        setTimeout(moveBlock, moveSpeedChildBlock)
    }
}

//stopwatch

const  seconds =document.querySelector('#seconds')
const  start =document.querySelector('#start')
const  stop =document.querySelector('#stop')
const  reset =document.querySelector('#reset')
let interval
let second =0

const updateSeconds = () => {
    clearInterval(interval)
    interval = setInterval(() =>{
        second++
        seconds.innerHTML = second
    }, 1000)
}

start.onclick = () => updateSeconds()
stop.onclick = () => clearInterval(interval)
reset.onclick = () => {
    clearInterval(interval)
    second = 0
    seconds.innerHTML = second
}

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}
