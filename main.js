let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function calculate() {
    try {
        // Replacing 'x' with '*' for multiplication to use eval safely
        displayValue = displayValue.replace(/x/g, '*');
        // Adding support for modular division
        displayValue = displayValue.replace(/\/\//g, '%');
        document.getElementById("display").value = eval(displayValue).toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}