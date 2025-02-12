//SLIDE SHOW
let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n - 1;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

showSlides(); // Start the slideshow


//scroll bar
document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show button when user scrolls down 100px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// Toggle the "show" class on nav-links when the hamburger icon is clicked

document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.getElementById("hamburger");
    let navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});