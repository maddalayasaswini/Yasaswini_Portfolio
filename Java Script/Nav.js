document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        
        // Toggle between fa-bars and fa-times
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            menuIcon.classList.replace('fa-times', 'fa-bars');
        }
    });
});
