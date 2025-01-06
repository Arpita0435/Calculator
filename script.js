const display = document.getElementById("display");

// Add a digit or operator to the display
function pressKey(key) {
    display.value += key;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
