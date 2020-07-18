let prevNumber = "";
let operation = "";
let currentNumber = "0";

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const display = document.querySelector(".display");

const updateDisplay = (number) => {
    display.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateDisplay(currentNumber);
    });
})

const operators = document.querySelectorAll(".operator");

operators.forEach ((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
})

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    operation = operator;
    currentNumber = "0";
};

const equalSign = document.querySelector(".equal");

equalSign.addEventListener("click", () => {
    calculate();
    updateDisplay(currentNumber);
})

const calculate = () => {
    let result;
    switch(operation) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            return;
    };
    currentNumber = result;
    operation = "";
};

const allClear = document.querySelector(".all-clear");

allClear.addEventListener("click", () => {
    clearAll();
    updateDisplay(currentNumber);
})

const clearAll = () => {
    prevNumber = "";
    operation = "";
    currentNumber = "0";
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateDisplay(currentNumber);
});

const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
};

const negative = document.querySelector(".negative");

negative.addEventListener("click", () => {
    inputNegative();
    updateDisplay(currentNumber);
})

const inputNegative = () => {
    currentNumber *= -1;
};

const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
    inputPercentage();
    updateDisplay(currentNumber);
})

const inputPercentage = () => {
    currentNumber /= 100;
};

const dlt = document.querySelector(".dlt");

dlt.addEventListener("click", () => {
    deleteNumber();
    updateDisplay(currentNumber);
})

const deleteNumber = () => {
    currentNumber = display.value.substring(0, display.value.length - 1);
    /*if (display.value.length === 1) {
        currentNumber = 0;
    }*/
}