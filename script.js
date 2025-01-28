// script.js

const testimonials = document.querySelectorAll(".testimonial");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Function to show the current testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle("active", i === index);
  });
}

// Event listener for the "Previous" button
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

// Initialize the first testimonial as active
showTestimonial(currentIndex);