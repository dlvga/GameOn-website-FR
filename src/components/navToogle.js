function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Navigation toggle for mobile view
document.getElementById('nav-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    editNav();
});

// Selector for navigation links but excluding icon
const navLinks = document.querySelectorAll('.main-navbar a:not(.icon)');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default action of the link
        event.preventDefault();
        // Withdraw the active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add the active class to the clicked link
        this.classList.add('active');
    });
});
