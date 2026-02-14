// Get package from URL
const urlParams = new URLSearchParams(window.location.search);
const packageName = urlParams.get("package");

// Show package title
if (packageName) {
    document.getElementById("packageTitle").innerText = packageName + " Package";
}

// Handle form submit
document.querySelector(".booking-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = this.querySelectorAll("input, textarea");

    const bookingData = {
        package: packageName,
        name: inputs[0].value,
        age: inputs[1].value,
        address: inputs[2].value,
        pincode: inputs[3].value,
        email: inputs[4].value,
        travellers: inputs[5].value,
        requirements: inputs[6].value
    };

    // Get existing bookings
    let trips = JSON.parse(localStorage.getItem("trips")) || [];

    // Add new booking
    trips.push(bookingData);

    // Save again
    localStorage.setItem("trips", JSON.stringify(trips));

    alert("Booking Confirmed! 🎉");

    this.reset();
});
