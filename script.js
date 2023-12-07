// Get the current date in the format YYYY-MM-DD
const getCurrentDate = () => {
    const today = new Date();

    const dd = String(today.getUTCDate()).padStart(2, '0');
    const mm = String(today.getUTCMonth() + 1).padStart(2, '0'); // January
    const yyyy = today.getUTCFullYear();

    return `${yyyy}-${mm}-${dd}`;
};

// Set the min attribute of the date input to the current date
document.getElementById("sessionDate").min = getCurrentDate();

// Validate the form before submission
const validateForm = () => {
    const menteeName = document.getElementById("menteeName").value;
    const sessionDate = document.getElementById("sessionDate").value;
    const sessionTime = document.getElementById("sessionTime").value;

    // Required fields
    if (menteeName === "" || sessionDate === "" || sessionTime === "") {
        document.getElementById("errorMessage").innerText = "All fields marked with * are required.";
        return false; // Prevent submission
    }

    // Check for a past date using UTC
    const currentDate = new Date().setUTCHours(0, 0, 0, 0); // Set time to midnight in UTC
    const selectedDate = new Date(`${sessionDate}T00:00:00Z`).setUTCHours(0, 0, 0, 0); // Set time to midnight in UTC

    if (selectedDate < currentDate) {
        document.getElementById("errorMessage").innerText = "Please choose a future date.";
        return false; // Prevent form submission
    }

    document.getElementById("errorMessage").innerText = "";
    return true; // Allow form submission
};
