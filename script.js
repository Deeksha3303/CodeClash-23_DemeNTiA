document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener("mouseleave", function() {
        this.querySelector(".dropdown-content").style.display = "none";
      });
    });
  });
  