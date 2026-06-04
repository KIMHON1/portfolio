const nameError    = document.getElementById('name-error');
const emailError   = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError  = document.getElementById('submit-error');

// Set copyright year
document.getElementById('date').innerHTML = new Date().getFullYear();

// Navbar toggle
const navBtn   = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
});

// Smooth scroll
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.classList.remove('show-links');

        const id      = e.currentTarget.getAttribute('href').slice(1);
        const target  = document.getElementById(id);
        const navH    = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top:      target.offsetTop - navH,
            behavior: 'smooth'
        });
    });
});

// Form validation
function validateName() {
    const name = document.getElementById('name').value.trim();
    if (name.length === 0) {
        nameError.innerHTML = 'Name is required.';
        return false;
    }
    if (!name.match(/^[A-Za-z]+([\s'-][A-Za-z]+)*$/)) {
        nameError.innerHTML = 'Please enter a valid name.';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#27ae60"></i>';
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required.';
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#27ae60"></i>';
    return true;
}

function validateMessage() {
    const message  = document.getElementById('message').value;
    const required = 50;
    const left     = required - message.length;
    if (left > 0) {
        messageError.innerHTML = `${left} more characters required.`;
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#27ae60"></i>';
    return true;
}

function validateForm() {
    const valid = validateName() & validateEmail() & validateMessage();
    if (!valid) {
        submitError.style.display = 'block';
        submitError.innerHTML     = 'Please fix the errors above before submitting.';
        setTimeout(() => { submitError.style.display = 'none'; }, 3500);
        return false;
    }
}
