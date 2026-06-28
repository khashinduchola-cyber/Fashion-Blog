// FashionBlog Main JavaScript File
// Author: Tiffany Chola


// Scrolling to Top
window.onscroll = function() {
  const btn = document.getElementById('scrollTopBtn');
  if (btn) {
    if (document.documentElement.scrollTop > 200) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}


// Newsletter Form Validation
function validateNewsletter() {
    const email = document.getElementById('newsletterEmail').value.trim();
     const msg = document.getElementById('newsletterMsg');
     if (email === '') {

 msg.style.color = 'red';
    msg.textContent = 'Please enter your email address.';
    return;
  }
  if (!email.includes('@')) {
    msg.style.color = 'red';
    msg.textContent = 'Please enter a valid email address.';
    return;
  }
  msg.style.color = 'green';
  msg.textContent = 'Thank you for subscribing!';
}


