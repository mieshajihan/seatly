// Setting up seats
var seats = [];
var numOfSeats = 24;
for (i = 1; i <= numOfSeats; i++) {
	seats.push({ seat: i, 
				 reserved: false } );
};

// Variables
var seatBtn = document.getElementsByClassName('seat');
var form    = document.getElementById('reservationForm');

// Toggle form
function toggleForm() {
    if (form.style.display === 'block') {
    	form.style.display = 'none';
    } else {
    	form.style.display = 'block';
    }
}

for (var i = 0; i < seatBtn.length; i++) {
    seatBtn[i].addEventListener('click', toggleForm);
}

