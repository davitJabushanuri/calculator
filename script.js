const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const previousValue = document.getElementById('previous-value');
const currentValue = document.getElementById('current-value');

let currentOutput = '';
let previousOutput = '';
let currentOperator = '';

const handleClear = () => {
	currentOutput = '';
	previousOutput = '';
	operation = undefined;
};

const handleBackspace = () => {
	currentOutput = currentOutput.toString().slice(0, -1);
};

const handleDisplay = (number) => {
	if (number === '.' && currentOutput.includes('.')) return;
	currentOutput = currentOutput.toString() + number.toString();
};

const chooseOperation = (operator) => {
	this.operation = operator;
	if (currentOutput === '') return;
	if (previousOutput !== '') {
		handleMath();
	}
	previousOutput = currentOutput;
	currentOutput = '';
};

const handleMath = () => {
	let computation;
	const previous = parseFloat(previousOutput);
	const current = parseFloat(currentOutput);
	if (isNaN(previous) || isNaN(current)) return;
	switch (operation) {
		case '+':
			console.log(computation);
			computation = previous + current;
			break;
		case '-':
			computation = previous - current;
			break;
		case '×':
			computation = previous * current;
			break;
		case '÷':
			computation = previous / current;
			break;

		default:
			return;
	}
	console.log(computation);
	currentOutput = computation;
	operation = undefined;
	previousOutput = '';
};

const updateDisplay = () => {
	currentValue.innerText = currentOutput;
	if (this.operation) {
		previousValue.innerText = previousOutput + ` ` + this.operation;
	} else {
		previousValue.innerText = previousOutput;
	}
};

numberButtons.forEach((number) => {
	number.addEventListener('click', () => {
		handleDisplay(number.innerText);
		updateDisplay();
	});
});

operatorButtons.forEach((operator) => {
	operator.addEventListener('click', () => {
		chooseOperation(operator.innerText);
		updateDisplay();
	});
});

equalsButton.addEventListener('click', () => {
	handleMath();
	updateDisplay();
});

clearButton.addEventListener('click', () => {
	handleClear();
	updateDisplay();
});

backspaceButton.addEventListener('click', () => {
	handleBackspace();
	updateDisplay();
});
