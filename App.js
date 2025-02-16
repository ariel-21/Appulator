// Function to validate user input
function validateInput(value) {
    return !isNaN(value) && value.trim() !== ""; 
}

// Function to display error message
function showError(message) {
    document.getElementById('error-message').innerText = message;
}

// Add button functionality
document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

   
    if (!validateInput(num1) || !validateInput(num2)) {
        showError("Please enter valid numbers.");
        return;
    }

    const result = parseFloat(num1) + parseFloat(num2);
    document.getElementById('result').value = result;

    showError("");
});

// Clear button functionality
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
    showError("");
});

// Exit button functionality
document.getElementById('exitBtn').addEventListener('click', function() {
    alert('Exit button clicked - This would close the window in a desktop app.');
});
