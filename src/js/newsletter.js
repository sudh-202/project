export function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    
    // Here you would typically send this to your backend
    console.log('Subscription email:', email);
    
    // Show success message
    alert('Thanks for subscribing! We\'ll keep you updated.');
    form.reset();
  });
}