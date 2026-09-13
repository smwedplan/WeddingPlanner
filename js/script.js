/* Mobile menu */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
});

/* Navbar scroll effect */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

/* Gallery popup */
const galleryImages = document.querySelectorAll(".gallery-item img");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
let currentImage = 0;

function openPopup(image) {
    currentImage = Array.from(galleryImages).indexOf(image);
    popupImage.src = image.src;
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePopup() {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
}

function changeImage(direction) {
    currentImage += direction;

    if (currentImage >= galleryImages.length) currentImage = 0;
    if (currentImage < 0) currentImage = galleryImages.length - 1;

    popupImage.src = galleryImages[currentImage].src;
}

popup.addEventListener("click", event => {
    if (event.target === popup) closePopup();
});

document.addEventListener("keydown", event => {
    if (!popup.classList.contains("active")) return;

    if (event.key === "Escape") closePopup();
    if (event.key === "ArrowRight") changeImage(1);
    if (event.key === "ArrowLeft") changeImage(-1);
});

/* Testimonials */
const testimonials = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".slider-dots button");
let testimonialIndex = 0;

function showTestimonial(index) {
    testimonials.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
    testimonialIndex = index;
}

showTestimonial(0);

setInterval(() => {
    testimonialIndex++;
    if (testimonialIndex >= testimonials.length) testimonialIndex = 0;
    showTestimonial(testimonialIndex);
}, 5000);

/* Contact form */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (!name) {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your wedding enquiry has been received. 💍`;

    contactForm.reset();
});

/* Back to top */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 500);
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
