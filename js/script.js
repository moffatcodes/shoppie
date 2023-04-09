// Function to handle form submission for registration form
function handleRegistrationFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Perform form validation 
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        
        alert(`Registration successful. Username: ${username}, Password: ${password}`);
        // Reset form
        document.getElementById('registration-form').reset();
    }
}

// Function to handle form submission for search form
function handleSearchFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve form data
    const searchTerm = document.getElementById('search-term').value;
    // Perform search logic (
    alert(`Searching for: ${searchTerm}`);
    // Reset form
    document.getElementById('search-form').reset();
}

// Add event listeners to the registration and search forms
document.getElementById('registration-form').addEventListener('submit', handleRegistrationFormSubmit);
document.getElementById('search-form').addEventListener('submit', handleSearchFormSubmit);

// Add click event listener to the logo

document.getElementById('logo').addEventListener('click', function() {
    alert('You clicked the logo');
});

