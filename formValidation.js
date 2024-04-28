function validateForm() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Perform validation checks
    if (firstName === "" || lastName === "" || phone === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Validate phone number format
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
        return false;
    }

    // Add more validation rules as needed

    return true; // If all validation passes, return true to submit the form
}
