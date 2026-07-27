
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(link => {
  const current = location.pathname.split('/').pop() || 'index.html';
  if (link.getAttribute('href') === current) link.classList.add('active');
});
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
