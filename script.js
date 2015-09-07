// Setting up seats
var seats = [];
var numOfSeats = 24;
for (i = 1; i <= numOfSeats; i++) {
	seats.push({ seat: i, reserved: false });
}

// Variables
var seatBtn = document.getElementsByClassName('seat');
var form  = document.getElementById('reservationForm');
var activeSeat = document.getElementById('activeSeat');
var submit = document.getElementById('submit');

// Event handlers
for(i=0; i<seatBtn.length; i++){
	seatBtn[i].addEventListener('click', showForm);
}
submit.addEventListener('click', submitForm);

// Functions

// attempting to add seat # HTML..
// function getSeatNumber(el) {
// 	el.forEach(function(seat) {
// 		console.log(seat.seat);
// 	});
// }
// getSeatNumber(seats);

function showForm() {
  form.style.display = 'block';

  $('.seat').addClass('btn-inactive');
  $(this).removeClass('btn-inactive').addClass('btn-primary active');
  
  var seat = $(this).data('seat');
  $('#currentSeat').val(seat);
  $('#activeSeat').text(seat);
};

function submitForm(e) {
	e.preventDefault();

	$('.seat').removeClass('btn-inactive'); 
	$('.active').addClass('btn-danger btn-inactive').html('Reserved');
	form.style.display = 'none';

	form.reset();
};
