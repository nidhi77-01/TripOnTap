document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault(); // stop page refresh

        const tripData = {
            package: document.getElementById("package").value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            date: document.getElementById("date").value,
            travellers: document.getElementById("travellers").value,
            age: document.getElementById("age").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            requirements: document.getElementById("requirements").value
        };

        let trips = JSON.parse(localStorage.getItem("trips")) || [];

        trips.push(tripData);

        localStorage.setItem("trips", JSON.stringify(trips));

        alert("Trip Submitted Successfully! 🎉");

        form.reset();
    });

});
