const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const addTenButton = document.getElementById('addTen');

let count = 0;

function updateCounter() {
    counterElement.textContent = count;
}

function incrementCounter() {
    count++;
    updateCounter();
}

function decrementCounter() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

function resetCounter() {
    count = 0;
    updateCounter();
}

function addTenToCounter() {
    count += 10;
    updateCounter();
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);
addTenButton.addEventListener('click', addTenToCounter);

updateCounter();