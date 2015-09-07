// Setting up seats
// var seats = [];
// var numOfSeats = 24;
// for (i = 1; i <= numOfSeats; i++) {
// 	seats.push({ seat: i, reserved: false });
// }

// Variables
var seatContainer = document.querySelector('#seats');
var seatBtn = seatContainer.querySelectorAll('.seat');
var form = document.querySelector('#reservationForm');
var activeSeat = document.querySelector('#activeSeat');
var submit = document.querySelector('#submit');

// Event handlers
for(i = 0; i < seatBtn.length; i++){	      
  seatBtn[i].addEventListener('click', showForm);
  seatBtn[i].setAttribute('data-seat', i + 1);
}

submit.addEventListener('click', submitForm);

// Functions
function showForm(event) {
  var target = event.currentTarget;

  form.style.display = 'block';
  
  for (i = 0; i < seatBtn.length; i++) {
    seatBtn[i].classList.add('btn-inactive');
  }
  
  target.classList.remove('btn-inactive');
  target.classList.add('btn-primary', 'active');

  activeSeat.innerHTML = target.getAttribute('data-seat');
}

function submitForm(e) {
    var allActive = document.querySelectorAll('.active');

	e.preventDefault();
    for (i = 0; i < seatBtn.length; i++) {
      seatBtn[i].classList.remove('btn-inactive');
    }

    for (i = 0; i < allActive.length; i++) {
      allActive[i].classList.add('btn-danger', 'reserved');
      allActive[i].innerHTML = 'Reserved';
    }

	form.style.display = 'none';

	form.reset();
}

