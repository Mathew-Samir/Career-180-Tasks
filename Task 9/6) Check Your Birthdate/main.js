        // Function to get day name from a date string
        function getDayName(dateString) {
            const date = new Date(dateString);
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return days[date.getDay()];
        }

        // Function to validate date format
        function validateDateFormat(dateString) {
            if (dateString.length === 10 && dateString[2] === '-' && dateString[5] === '-') {
                const day = parseInt(dateString.slice(0, 2));
                const month = parseInt(dateString.slice(3, 5));
                const year = parseInt(dateString.slice(6));

                // Check if day, month, and year are valid numbers
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                    return new Date(year, month - 1, day); // Month is 0-based in JS Date object
                }
            }
            throw new Error("Wrong Date Format");
        }

        // Function to prompt for birthdate and handle the validation
        function promptBirthDate() {
            const userInput = prompt("Please enter your birthdate (DD-MM-YYYY):");

            try {
                const date = validateDateFormat(userInput);
                if (isNaN(date.getTime())) {
                    throw new Error("Invalid date value");
                }

                // Show the valid date and day name in alert
                const formattedDate = date.toDateString(); // Converts to readable date string
                const dayName = getDayName(date);
                alert(`You entered a valid date: ${formattedDate}. It was a ${dayName}.`);
            } catch (error) {
                alert(`Error: ${error.message}`);
            }
        }
