 document.getElementById('dataForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value.trim();
        const jobTitle = document.getElementById('jobTitle').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const address = document.getElementById('address').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked')?.value;

        let isValid = true;

        // Name Validation: No numbers allowed, can contain letters and spaces
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            document.getElementById('nameError').textContent = "Name can only contain letters and spaces.";
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = "";
        }

        // Age Validation: Age must be between 18 and 99 (adjust as needed)
        if (age < 18 || age > 99) {
            document.getElementById('ageError').textContent = "Age must be between 18 and 99.";
            isValid = false;
        } else {
            document.getElementById('ageError').textContent = "";
        }

        // Email Validation: Basic format validation using HTML5 pattern, so this is handled automatically
        if (!email.includes('@') || !email.includes('.')) {
            document.getElementById('emailError').textContent = "Enter a valid email address.";
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = "";
        }

        // Job Title Validation: At least 2 characters
        if (jobTitle.length < 2) {
            document.getElementById('jobTitleError').textContent = "Job Title must contain at least 2 characters.";
            isValid = false;
        } else {
            document.getElementById('jobTitleError').textContent = "";
        }

        // Mobile Validation: Must be exactly 11 digits
        const mobileRegex = /^\d{11}$/;
        if (!mobileRegex.test(mobile)) {
            document.getElementById('mobileError').textContent = "Mobile number must be exactly 11 digits.";
            isValid = false;
        } else {
            document.getElementById('mobileError').textContent = "";
        }

        // Address Validation: At least 5 characters
        if (address.length < 5) {
            document.getElementById('addressError').textContent = "Address must contain at least 5 characters.";
            isValid = false;
        } else {
            document.getElementById('addressError').textContent = "";
        }

        // Gender Validation: Ensure gender is selected
        if (!gender) {
            document.getElementById('genderError').textContent = "Please select a gender.";
            isValid = false;
        } else {
            document.getElementById('genderError').textContent = "";
        }

        // If form is not valid, stop submission
        if (!isValid) {
            return;
        }

        // Store data in sessionStorage
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('age', age);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('jobTitle', jobTitle);
        sessionStorage.setItem('mobile', mobile);
        sessionStorage.setItem('address', address);
        sessionStorage.setItem('gender', gender);

        // Redirect to another page
        window.location.href = 'showData.html';  // Redirect to the second page
    });