document.querySelectorAll('.detalles-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const detalhes = btn.nextElementSibling; // pega o próximo elemento, que deve ser o container de detalhes
    if (detalhes.style.display === 'block') {
      detalhes.style.display = 'none';
      btn.textContent = 'Mostrar detalhes';
    } else {
      detalhes.style.display = 'block';
      btn.textContent = 'Esconder detalhes';
    }
  });
});
