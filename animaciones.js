const cards = document.querySelectorAll('.card');

// Aplica animación en secuencia: de arriba hacia abajo y de izquierda a derecha
cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});

// Efectos de hover dinámicos con franja luminosa y agrandamiento
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.background = 'linear-gradient(135deg, #6c5ce7, #00cec9)';
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.5)';
    card.style.transition = 'all 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = '#2c2c38';
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
  });
});



