document.addEventListener("DOMContentLoaded", function() {
  
  const Logform = document.getElementById("logform");
 
  const messagewhenlogginin = document.getElementById("msgforlogin");

  Logform.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    
    const password = document.getElementById("password").value;

    if (username && password) {
      messagewhenlogginin.textContent = `Welcome, ${username}! You are now logged in.`;
      
      messagewhenlogginin.style.color = "green";
      Logform.reset();
    } else {
      
      messagewhenlogginin.textContent = "Please enter a valid username and password.";
      
      messagewhenlogginin.style.color = "red";
    }
  });
});
