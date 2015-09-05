var customers = [];

var reservationForm = document.getElementById('reservationForm');
var seat = document.getElementsByClassName('seat');

var seatList = [].slice.call(seat); // turn seats into an array

function toggleAvail(seats) {
	seats.forEach(function(seat) {
		seat.addEventListener('click', function() {
			seat.innerHTML = seat.innerHTML.replace('Reserve', 'Sold Out');
		});
	});
}

toggleAvail(seatList);

function toggleForm(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
