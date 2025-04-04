const cards = document.querySelectorAll('.card');
const hoverColor = 'linear-gradient(135deg, #6c5ce7, #00cec9)'; // mismo que header
const baseColor = '#2c2c38';

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.background = hoverColor;
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.5)';
    card.style.transition = 'all 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = baseColor;
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
  });
});
