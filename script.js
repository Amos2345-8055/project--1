function navigate(pageId) {
  // Hide all sections
  var sections = document.querySelectorAll('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('active');
  }

  // Show selected section
  document.getElementById(pageId).classList.add('active');

  // Scroll to top smoothly
  window.scrollTo(0, 0);
}

// Handle booking form
var form = document.getElementById('bookingForm');
form.onsubmit = function(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var room = document.getElementById('roomType').value;
  
  alert("Thank you, " + name + "! Your " + room + " has been booked successfully.");
  
};

