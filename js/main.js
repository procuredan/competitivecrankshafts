// Competitive Crankshafts — small UI helpers

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Contact form handling.
// By default this just shows a friendly message. To actually receive
// submissions, wire it to a form service (see README) and remove this block.
const form = document.querySelector('[data-static-form]');
const status = document.querySelector('[data-form-status]');
if (form && status) {
  form.addEventListener('submit', (e) => {
    // If you've added a real `action` URL to the form, let it submit normally.
    if (form.getAttribute('action')) return;
    e.preventDefault();
    status.textContent = 'Thanks! This demo form isn’t connected yet — see the README to enable submissions.';
    form.reset();
  });
}
