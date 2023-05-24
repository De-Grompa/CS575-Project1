function toggleNav() {
  document.getElementById("nav").classList.toggle("active");
}

  
function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }
  
function showMessage() {
    var message = document.getElementById("message");
    message.style.display = "block";
  }
  
function animateLogo() {
    var logo = document.getElementById("logo");
    logo.classList.add("animated");
    logo.classList.add("bounce");
  }