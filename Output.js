function displayBookings() {
    // Retrieve the bookings from local storage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const email = document.querySelector('#email').value;
    // Get the table body element
    const tableBody = document.querySelector('#bookingsTableBody');
            // Clear the table body
tableBody.innerHTML = '';

// Loop through the bookings and add them to the table if email matches
bookings.forEach((booking) => {
if (booking.email === email) {
const row = tableBody.insertRow();
row.insertCell().textContent = booking.seatNumber;
row.insertCell().textContent = booking.name;
row.insertCell().textContent = booking.email;
row.insertCell().textContent = booking.gender;
row.insertCell().textContent = booking.date;
row.insertCell().textContent = booking.source;
row.insertCell().textContent = booking.destination;
}
});
}