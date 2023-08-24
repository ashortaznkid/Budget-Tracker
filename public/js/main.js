const descriptionInput = document.getElementById('expense-description');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const expenseForm = document.getElementById('new-expense-form');

// Populate input fields from localStorage on page load
descriptionInput.value = localStorage.getItem('expense-description') || '';
amountInput.value = localStorage.getItem('expense-amount') || '';
categoryInput.value = localStorage.getItem('expense-category') || '';

// Save input values to localStorage on form submission
expenseForm.addEventListener('submit', () => {
    localStorage.setItem('expense-description', descriptionInput.value);
    localStorage.setItem('expense-amount', amountInput.value);
    localStorage.setItem('expense-category', categoryInput.value);
});
