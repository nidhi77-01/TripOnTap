
const container = document.getElementById("tripsContainer");
const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

if (bookings.length === 0) {
    container.innerHTML = "<p style='color:white'>No trips booked yet.</p>";
}

bookings.forEach((trip, index) => {
    const card = document.createElement("div");
    card.className = "trip-card";

    card.innerHTML = `
        <h3>${trip.package}</h3>
        <p><strong>Name:</strong> ${trip.name}</p>
        <p><strong>Email:</strong> ${trip.email}</p>
        <p><strong>Travellers:</strong> ${trip.travellers}</p>
        <p><strong>Address:</strong> ${trip.address}</p>
        <p><strong>Special:</strong> ${trip.requirements || "None"}</p>
        <button onclick="deleteTrip(${index})">Delete</button>
    `;

    container.appendChild(card);
});

function deleteTrip(index) {
    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    location.reload();
}

