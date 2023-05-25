class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Method
  greet() {
    return "Welcome " + this.name + "!";
  }
}

function toggleNav() {
  document.getElementById("nav").classList.toggle("active");
}

function animateLogo() {
    var logo = document.getElementById("logo");
    logo.classList.add("animated");
    logo.classList.add("slideInDown");
}

function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  if (name == "" || email == "" || password == "") {
    alert("All fields must be filled out");
    return false;
  }
}

function validateEmail() {
  var email = document.forms["myForm"]["email"].value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert("Not a valid e-mail address");
    return false;
  }
}

function validatePassword() {
  var password = document.forms["myForm"]["password"].value;
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
}