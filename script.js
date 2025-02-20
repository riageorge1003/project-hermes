document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    const prevButton = document.querySelector(".slider .prev");
    const nextButton = document.querySelector(".slider .next");
  
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", function () {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
      });
  
      nextButton.addEventListener("click", function () {
        currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        showSlide(currentSlide);
      });
  
      showSlide(currentSlide);
    }
  
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        if (name.length < 3) {
          alert("Full Name must be at least 3 characters long.");
          return;
        }
        if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
        }
        if (message.length < 10) {
          alert("Message must be more than 10 characters.");
          return;
        }
  
        alert("Form submitted successfully!");
        contactForm.reset();
      });
  
      function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
    }
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    if (menuToggle) {
      menuToggle.addEventListener("click", function () {
        mobileNav.classList.toggle("open");
      });
    }
  });