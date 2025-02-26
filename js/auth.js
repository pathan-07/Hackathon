document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.form');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and forms
            tabBtns.forEach(b => b.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));

            // Add active class to clicked button and corresponding form
            btn.classList.add('active');
            document.getElementById(`${btn.dataset.tab}-form`).classList.add('active');
        });
    });

    // Form submission handling
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login submitted');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Signup submitted');
    });
}); 