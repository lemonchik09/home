//home_work6

//1-2

const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next')
    btnPrev = document.querySelector('#btn-prev')

let count = 1

btnNext.addEventListener('click',  () => {
    const++
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
    const--
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
