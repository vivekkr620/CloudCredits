// TOGGLE BUTTON FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  // variable define
  const toggleBtn = document.getElementById("toggleBtn");
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.getElementById("menu-icon");

  // toggle functionality
  toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // logic for icon change
    if (navLinks.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times"); // show x when menu is open
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars"); //show icon when menu is closed
    }
  });

  // click on nav links
  const navLinksItems = document.querySelectorAll(".nav-link");
  navLinksItems.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
      }
    });
  });

  // close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (window.innerWidth <= 768) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnToggle = toggleBtn.contains(event.target);

      if (
        !isClickInsideNav &&
        !isClickOnToggle &&
        navLinks.classList.contains("active")
      ) {
        navLinks.classList.remove("active");
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
      }
    }
  });

  // add scroll functionality
  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 768 && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    }
  });

   // Disable 'Source Code' link in Projects section
   const sourceCodeLinks = document.querySelectorAll('.project-links .link-holographic');
   sourceCodeLinks.forEach(link => {
     link.addEventListener('click', function(event) {
       event.preventDefault();
       alert('Source code is not available yet .');
     });
   });
 });
