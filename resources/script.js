// Dynamic Navigation Highlighting
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});


// ==========================================
// Show or hide the back-to-top button
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});


// =====================================
// Back to top button: scroll to the top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// ======================================
// Newsletter subscription alert
document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    var emailInput = document.getElementById('email');
    if (emailInput.value === '') {
        alert('Please enter your email address.');
    } else {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    }
});
