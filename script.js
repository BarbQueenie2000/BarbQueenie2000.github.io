// your-script.js

document.addEventListener('DOMContentLoaded', function () {
  // Menu toggle functionality
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('nav div.md\\:flex');

  if (menuToggle) {
      menuToggle.addEventListener('click', function () {
          navLinks.classList.toggle('hidden');
      });
  }
});
