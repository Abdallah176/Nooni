let count = 0;
const countElement = document.getElementById('count');

function increment() {
    count++;
    countElement.textContent = count;
}

function decrement() {
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
}