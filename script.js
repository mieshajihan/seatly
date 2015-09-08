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
function showForm(e) {
  var target = e.currentTarget;

  form.style.display = 'block';
  
  for (i = 0; i < seatBtn.length; i++) {
    seatBtn[i].classList.add('btn-inactive');
  }
  
  target.classList.remove('btn-inactive');
  target.classList.add('btn-primary', 'active');
  // add seat # to form from 'data-seat' attribute
  activeSeat.innerHTML = target.getAttribute('data-seat');
}

function submitForm() {
    var activeBtn = document.querySelectorAll('.active');

    for (i = 0; i < seatBtn.length; i++) {
      seatBtn[i].classList.remove('btn-inactive');
    }

    for (i = 0; i < activeBtn.length; i++) {
      activeBtn[i].classList.add('btn-danger', 'reserved');
      activeBtn[i].innerHTML = 'Reserved';
    }

	form.style.display = 'none';

	form.reset();
}
