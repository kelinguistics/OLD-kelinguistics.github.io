theme-switch.js

document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference, if any, and apply it
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    // Select the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        // Toggle the .dark-mode class on the body
        document.body.classList.toggle('dark-mode');

        // Save the user's theme preference
        let theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';
        localStorage.setItem('theme', theme);
    });
});
