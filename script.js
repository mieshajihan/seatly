// Setting up seats
var seats = [];
var numOfSeats = 24;
for (i = 1; i <= numOfSeats; i++) {
	seats.push({ seat: i, reserved: false } );
}

// Variables
var seatsContainer = document.getElementById('seats');
var seatBtn = document.getElementsByClassName('seat');
var form    = document.getElementById('reservationForm');
var activeSeat = document.getElementById('activeSeat');

// Event handlers
$(document).on('click','.seat', showForm);
$('#submit').on('click', submitForm);

function showForm() {
  form.style.display = 'block';

  $('.seat').addClass('btn-inactive');
  $(this).addClass('btn-primary active');
  $(this).removeClass('btn-inactive');

  // for(i = 0; i < seatBtn.length; i++) {
  // 	activeSeat.innerHTML = seats[i].seat;
  // }
};

function submitForm(e) {
	e.preventDefault();

	$('.seat').removeClass('btn-inactive'); 
	$('.active').addClass('btn-danger');
	form.style.display = 'none';
};