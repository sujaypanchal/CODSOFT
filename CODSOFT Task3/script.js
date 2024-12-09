let display = document.getElementById('display');
let currentValue = '';

function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentValue = eval(currentValue).toString();
        display.value = currentValue;
    } catch {
        display.value = 'Error';
        currentValue = '';
    }
}

function toggleTheme() {
    document.body.classList.toggle('light');
}