const display = document.getElementById('display');

function appendvalue(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = "";
}

function calculate() { 
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

