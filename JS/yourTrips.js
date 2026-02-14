const container = document.getElementById("tripsContainer");

let trips = JSON.parse(localStorage.getItem("trips")) || [];

if (trips.length === 0) {
    container.innerHTML = "<p>No trips booked yet.</p>";
} else {

    trips.forEach((trip, index) => {

        const card = document.createElement("div");
        card.classList.add("trip-card");

        card.innerHTML = `
            <h3>${trip.package || "Custom Trip"}</h3>
            <p><strong>Name:</strong> ${trip.name}</p>
            <p><strong>Email:</strong> ${trip.email}</p>
            <p><strong>Date:</strong> ${trip.date}</p>
            <p><strong>Travellers:</strong> ${trip.travellers}</p>
            <p><strong>Age:</strong> ${trip.age}</p>
            <p><strong>Phone:</strong> ${trip.phone}</p>
            <p><strong>Address:</strong> ${trip.address}</p>
            <p><strong>Special:</strong> ${trip.requirements || "None"}</p>

            <button class="delete-btn">Delete Trip</button>
        `;

        card.querySelector(".delete-btn").addEventListener("click", function () {

            trips.splice(index, 1);
            localStorage.setItem("trips", JSON.stringify(trips));
            location.reload();

        });

        container.appendChild(card);
    });
}
