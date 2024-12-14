// DOM Elements
const billInput = document.getElementById('bill-amount');
const tipInput = document.getElementById('tip-percentage');
const peopleInput = document.getElementById('num-people');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const perPersonDisplay = document.getElementById('per-person-amount');
const feedbackDisplay = document.getElementById('feedback');
const resetButton = document.getElementById('reset-button');
const roundButton = document.getElementById('round-button');
const themeButton = document.getElementById('theme-button');
const body = document.body;

// Event Listeners
[billInput, tipInput, peopleInput].forEach(input => {
    input.addEventListener('input', calculate);
});

resetButton.addEventListener('click', resetFields);
roundButton.addEventListener('click', roundTotal);
themeButton.addEventListener('click', toggleTheme);

// Calculate Tip, Total, and Per-Person Amounts
function calculate() {
    const bill = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipInput.value);
    const numPeople = parseInt(peopleInput.value);

    if (isNaN(bill) || isNaN(tipPercentage) || isNaN(numPeople) || bill <= 0 || tipPercentage < 0 || numPeople <= 0) {
        tipAmountDisplay.textContent = '0.00';
        totalAmountDisplay.textContent = '0.00';
        perPersonDisplay.textContent = '0.00';
        feedbackDisplay.textContent = '';
        return;
    }

    const tipAmount = (bill * tipPercentage) / 100;
    const totalAmount = bill + tipAmount;
    const perPersonAmount = totalAmount / numPeople;

    tipAmountDisplay.textContent = tipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
    perPersonDisplay.textContent = perPersonAmount.toFixed(2);

    // Feedback based on tip percentage
    feedbackDisplay.textContent =
        tipPercentage >= 20
            ? "You're Generous!"
            : tipPercentage >= 10
            ? "Great Tip!"
            : "Consider tipping more!";
}

// Reset Fields
function resetFields() {
    billInput.value = '';
    tipInput.value = '';
    peopleInput.value = '';
    tipAmountDisplay.textContent = '0.00';
    totalAmountDisplay.textContent = '0.00';
    perPersonDisplay.textContent = '0.00';
    feedbackDisplay.textContent = '';
}

// Round Total Amount
function roundTotal() {
    const total = parseFloat(totalAmountDisplay.textContent);
    if (!isNaN(total)) {
        totalAmountDisplay.textContent = Math.round(total).toFixed(2);
    }
}

// Toggle Theme
function toggleTheme() {
    body.classList.toggle('light-mode');
    themeButton.textContent = body.classList.contains('light-mode')
        ? 'Dark Mode'
        : 'Light Mode';
}
