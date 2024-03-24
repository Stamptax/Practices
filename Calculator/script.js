let value = document.querySelector('.result');
let numArray = [];
let operator;
let result;

function appendNumber(num) {
    numArray.push(num);
    value.textContent = numArray.join('');
}

function setOperator(op) {
    if (numArray.length === 0)
        return;
    if (operator)
        calculate();
    operator = op;
    result = parseFloat(numArray.join(''));
    numArray = [];
}

function calculate() {
    if (!operator || numArray.length === 0)
        return;
    const num = parseFloat(numArray.join(''));
    switch (operator) {
        case '+':
            result += num;
            break;
        case '-':
            result -= num;
            break;
        case '*':
            result *= num;
            break;
        case '/':
            if (num === 0) {
                alert('Error');
                return;
            }
            result /= num;
            break;
    }
    value.textContent = result;
    numArray = [result.toString()];
    operator = undefined;
}

function clearAll() {
    numArray = [];
    operator = undefined;
    result = 0;
    value.textContent = '0';
}

function operations(event) {
    const pressedKey = event.target.textContent;
    if (!isNaN(pressedKey)) {
        appendNumber(pressedKey);
    } else {
        switch (pressedKey) {
            case '+':
            case '-':
            case '*':
            case '/':
                setOperator(pressedKey);
                break;
            case '=':
                calculate();
                break;
            case 'AC':
                clearAll();
                break;
            case '.':
                if (!numArray.includes('.')) {
                    appendNumber(pressedKey);
                }
                break;
        }
    }
}