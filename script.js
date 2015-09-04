function toggleForm(id) {
   var e = document.getElementById("reservationForm");
   if(e.style.display == 'block') {
      e.style.display = 'none';
   }
   else {
      e.style.display = 'block';
   }
}

// var reservationForm = document.getElementById('reservationForm');

// document.querySelector(".seat").addEventListener('click', reserveSeat);

// function reserveSeat() {
// 	document.querySelector(".seat").addEventListener("click", function(){
// 	    document.querySelector("#reservationForm").style.display = "block";
// 	});	
// }

// reserveSeat();

// var seat = document.getElementsByClassName('seat');

// function showForm(seats) {
// 	seats.forEach(function(){
// 		document.querySelector(".seat").addEventListener("click", function(){
// 	    	document.querySelector("#reservationForm").style.display = "block";
// 		});	
// 	});
// }

// showForm();
