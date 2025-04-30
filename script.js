"use strict";

// Initialize particles background
document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffea00",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffea00",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
});

// Modal handling
const instructionsModal = document.getElementById("instructions-modal");
const howToPlayBtn = document.getElementById("howToPlay");
const closeModalBtn = document.querySelector(".close-modal");

// Show instructions modal
howToPlayBtn.addEventListener("click", function () {
  instructionsModal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
});

// Close instructions modal
closeModalBtn.addEventListener("click", function () {
  instructionsModal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling again
});

// Close modal when clicking outside content
window.addEventListener("click", function (event) {
  if (event.target === instructionsModal) {
    instructionsModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Handle play with others button
const playOthersBtn = document.getElementById("playOthers");
playOthersBtn.addEventListener("click", function () {
  // Create a flash message
  showFlashMessage("Coming Soon! This feature is under development.", 3000);
});

// Flash message function
function showFlashMessage(message, duration = 3000) {
  // Remove existing flash message if any
  const existingFlash = document.querySelector(".flash-message");
  if (existingFlash) {
    existingFlash.remove();
  }

  // Create flash message element
  const flashMessage = document.createElement("div");
  flashMessage.className = "flash-message";
  flashMessage.innerHTML = `
    <span>${message}</span>
    <span class="close-flash">&times;</span>
  `;

  // Add to body
  document.body.appendChild(flashMessage);

  // Show with animation
  setTimeout(() => {
    flashMessage.classList.add("show");
  }, 10);

  // Close button functionality
  const closeFlash = flashMessage.querySelector(".close-flash");
  closeFlash.addEventListener("click", function () {
    flashMessage.classList.remove("show");
    setTimeout(() => {
      flashMessage.remove();
    }, 300);
  });

  // Auto close after duration
  if (duration) {
    setTimeout(() => {
      if (flashMessage.parentNode) {
        flashMessage.classList.remove("show");
        setTimeout(() => {
          if (flashMessage.parentNode) {
            flashMessage.remove();
          }
        }, 300);
      }
    }, duration);
  }
}

// Animation for cards
const cards = document.querySelectorAll(".mode-card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});
