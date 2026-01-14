// ==========================
// READ PACKAGE NAME
// ==========================
const params = new URLSearchParams(window.location.search);
const packageName = params.get("package");

// ==========================
// ITINERARY DATA
// ==========================
const itineraries = {
    Kedarnath: [
        "Day 1: Arrival & Rest",
        "Day 2: Kedarnath Temple Darshan",
        "Day 3: Trek Return",
        "Day 4: Departure"
    ],
    Ooty: [
        "Day 1: Arrival & Sightseeing",
        "Day 2: Tea Gardens & Peaks",
        "Day 3: Leisure Day",
        "Day 4: Departure"
    ],
    MadhyaPradesh: [
        "Day 1: Arrival",
        "Day 2: Heritage Tour",
        "Day 3: Wildlife Safari",
        "Day 4: Culture Visit",
        "Day 5: Departure"
    ],
    Singapore: [
        "Day 1: City Tour",
        "Day 2: Sentosa",
        "Day 3: Universal Studios",
        "Day 4: Night Safari",
        "Day 5: Departure"
    ],
    Dubai: [
        "Day 1: Marina Walk",
        "Day 2: Desert Safari",
        "Day 3: Burj Khalifa",
        "Day 4: Shopping",
        "Day 5: Departure"
    ]
};

// ==========================
// SHOW ITINERARY
// ==========================
if (packageName && itineraries[packageName]) {
    document.getElementById("packageTitle").innerText =
        packageName + " Package Itinerary";

    const list = document.getElementById("itineraryList");

    itineraries[packageName].forEach(day => {
        const li = document.createElement("li");
        li.innerText = day;
        list.appendChild(li);
    });
}

// ==========================
// SAVE BOOKING DATA
// ==========================
const form = document.getElementById("bookingForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const booking = {
            package: packageName,
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            address: document.getElementById("address").value,
            pincode: document.getElementById("pincode").value,
            email: document.getElementById("email").value,
            travellers: document.getElementById("travellers").value,
            requirements: document.getElementById("requirements").value
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Trip booked successfully!");
        window.location.href = "yourtrips.html";
    });
}
