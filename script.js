
const expenseForm = document.getElementById('expenseform');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value; // Fixed typo
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if (description && category && !isNaN(amount)) {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>
        `;

        expenseList.appendChild(newRow);
    } else {
        alert('Please fill out all fields with valid data');
    }

    // Clear input fields
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
});
