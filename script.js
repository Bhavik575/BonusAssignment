document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    var navLinks = navbar.querySelectorAll('a[href^="#"]');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }

    var menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});