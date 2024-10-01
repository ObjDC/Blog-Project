document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Toggle the 'active' class
        // Add a smooth transition effect for the hamburger icon
        navToggle.classList.toggle("open");
    });
});
