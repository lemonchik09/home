//home_work6

//1-2

const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next')
    btnPrev = document.querySelector('#btn-prev')

let count = 1

btnNext.addEventListener('click',  () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.complete}</p>
                <span>${data.is}</span>
            `
        })
})
btnPrev.addEventListener('click',  () => {
    count--
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.complete}</p>
                <span>${data.is}</span>
            `
        })
})

const tadContentBlocks = document.querySelectorAll('.tab_content_block')
const  tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentTab =0
const hideTabContent = () => {
    tadContentBlocks.forEach(tadContentBlocks => {
        tadContentBlocks.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const  showTabContent = (tabIndex = 0) => {
    tadContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

const  autoSwitchTab = (tabIndex) => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length
    showTabContent(currentTab)
}

hideTabContent()
showTabContent(currentTab)
setInterval(autoSwitchTab, 3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) =>{
            if (event.target === tab) {
                hideTabContent()
                currentTab = tabIndex
                showTabContent(tabIndex)
            }
        })
    }
}

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

som.addEventListener('input', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET','../data/converter.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)
        usd.value = (som.value / data.usd).toFixed(2)
    })
})

usd.addEventListener('input', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET','../data/converter.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)
        som.value = (usd.value * data.usd).toFixed(2)
    })
})

eur.addEventListener('input', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET','../data/converter.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)
        som.value = (eur.value * data.eur).toFixed(2)
    })
})




const cityNameInput = document.querySelector('.cityName')
const btnSearch = document.querySelector('#btn-search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const  BASE_URL = 'http://api.openweathermap.org'
const  API_KEY = 'e417df62e04d3b1b111abeab19cea714'

btnSearch.addEventListener( 'click', () => {
    fetch (`${BASE_URL}/data/2.5/weather?q=${cityNameInput.value}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            city.innerHTML = data.name ? data.name : 'Город не найден...'
            temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273.15) + '&deg;C' : '...'
        })
})