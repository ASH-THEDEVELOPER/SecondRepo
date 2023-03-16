document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const seatNumberSelect = document.querySelector('#seat-number');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#mail');
    const genderSelect = document.querySelector('#gender');
    const dateInput = document.querySelector('#dates');
    const sourceInput = document.querySelector('#Source');
    const destInput = document.querySelector('#Dest');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const booking = {
            seatNumber: seatNumberSelect.value,
            name: nameInput.value,
            email: emailInput.value,
            gender: genderSelect.value,
            date: dateInput.value,
            source: sourceInput.value,
            destination: destInput.value,
        };

        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

        const isSeatBooked = bookings.some((existingBooking) => {
            return existingBooking.seatNumber === booking.seatNumber && existingBooking.date === booking.date && (existingBooking.destination === booking.destination && existingBooking.source === booking.source);
        });

        if (isSeatBooked) {
            alert(`Sorry, seat number ${booking.seatNumber} is already booked. Please choose another seat.`);
        }

        else if(booking.gender === 'male') {
            if (booking.seatNumber % 2 === 0) {

                let adjacentSeat = parseInt(booking.seatNumber) - 1;
                let adjacentBooking = bookings.find(
                    (booking) => parseInt(booking.seatNumber) === adjacentSeat
                );
                console.log(booking.seatNumber)
                if (adjacentBooking && adjacentBooking.gender === "female" && booking.gender === "male" && adjacentBooking.date === booking.date && adjacentBooking.destination === booking.destination && adjacentBooking.source === booking.source) {
                    alert("Sorry, you cannot book this seat as it is adjacent to a female customer's seat.");
                    form.reset();
                    return;
                }
                else {
                    bookings.push(booking);
                    localStorage.setItem('bookings', JSON.stringify(bookings));
                    alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${booking.seatNumber}\nName: ${booking.name}\nEmail: ${booking.email}\nGender: ${booking.gender}\nDate: ${booking.date}\nSource: ${booking.source}\nDestination: ${booking.destination}`);
                    form.reset();
                    return;
                }
            } else {
                let adjacentSeat = parseInt(booking.seatNumber) + 1;
                let adjacentBooking = bookings.find(
                    (booking) => parseInt(booking.seatNumber) === adjacentSeat
                );
                if (adjacentBooking && adjacentBooking.gender === "female" && booking.gender === "male" && adjacentBooking.date === booking.date && adjacentBooking.destination === booking.destination && adjacentBooking.source === booking.source) {
                    alert("Sorry, you cannot book this seat as it is adjacent to a female customer's seat.");
                    form.reset();
                    return;
                }
                else {
                    bookings.push(booking);
                    localStorage.setItem('bookings', JSON.stringify(bookings));
                    alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${booking.seatNumber}\nName: ${booking.name}\nEmail: ${booking.email}\nGender: ${booking.gender}\nDate: ${booking.date}\nSource: ${booking.source}\nDestination: ${booking.destination}`);
                    form.reset();
                    return;
                }
            }
        }

        else{
            if (booking.seatNumber % 2 === 0) {

                let adjacentSeat = parseInt(booking.seatNumber) - 1;
                let adjacentBooking = bookings.find(
                    (booking) => parseInt(booking.seatNumber) === adjacentSeat
                );
                console.log(booking.seatNumber)
                if (adjacentBooking && adjacentBooking.gender === "male" && booking.gender === "female" && adjacentBooking.date === booking.date && adjacentBooking.destination === booking.destination && adjacentBooking.source === booking.source) {
                    alert("Sorry, you cannot book this seat as it is adjacent to a male customer's seat.");
                    form.reset();
                    return;
                }
                else {
                    bookings.push(booking);
                    localStorage.setItem('bookings', JSON.stringify(bookings));
                    alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${booking.seatNumber}\nName: ${booking.name}\nEmail: ${booking.email}\nGender: ${booking.gender}\nDate: ${booking.date}\nSource: ${booking.source}\nDestination: ${booking.destination}`);
                    form.reset();
                    return;
                }
            } else {
                let adjacentSeat = parseInt(booking.seatNumber) + 1;
                let adjacentBooking = bookings.find(
                    (booking) => parseInt(booking.seatNumber) === adjacentSeat
                );
                if (adjacentBooking && adjacentBooking.gender === "male" && booking.gender === "female" && adjacentBooking.date === booking.date && adjacentBooking.destination === booking.destination && adjacentBooking.source === booking.source) {
                    alert("Sorry, you cannot book this seat as it is adjacent to a male customer's seat.");
                    form.reset();
                    return;
                }
                else {
                    bookings.push(booking);
                    localStorage.setItem('bookings', JSON.stringify(bookings));
                    alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${booking.seatNumber}\nName: ${booking.name}\nEmail: ${booking.email}\nGender: ${booking.gender}\nDate: ${booking.date}\nSource: ${booking.source}\nDestination: ${booking.destination}`);
                    form.reset();
                    return;
                }
            }
        }
        
        
    });
});
