
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    if (!form) return;
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      const name = form.querySelector("input[name='name']");
      const email = form.querySelector("input[name='email']");
      const message = form.querySelector("textarea[name='message']");
  
      let valid = true;
  
     
      [name, email, message].forEach((field) => {
        field.style.borderColor = "#ffb347";
      });
  
      
      if (!name.value.trim()) {
        name.style.borderColor = "red";
        valid = false;
      }
  
    
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        email.style.borderColor = "red";
        valid = false;
      }
  
    
      if (!message.value.trim()) {
        message.style.borderColor = "red";
        valid = false;
      }
  
      if (valid) {
        form.innerHTML =
          "<p style='color: #1b1b1b; font-size: 1.2rem; text-align:center;'>Köszönjük az üzenetet! Hamarosan felvesszük Önnel a kapcsolatot.</p>";
      }
    });
  });
  