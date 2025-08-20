function toggleFaq(element) {
  const faqItem = element.parentElement;
  const answer = faqItem.querySelector('.faq-answer');
  const icon = element.querySelector('.faq-icon');

  // Cerrar todas las otras respuestas
  document.querySelectorAll('.faq-item').forEach(item => {
    const ans = item.querySelector('.faq-answer');
    const ic = item.querySelector('.faq-icon');
    if (ans !== answer) {
      ans.style.maxHeight = null;
      ans.classList.remove('active');
      ic.src = 'images/plus.png';
    }
  });

  // Alternar la respuesta actual
  if (answer.classList.contains('active')) {
    answer.style.maxHeight = null;
    answer.classList.remove('active');
    icon.src = 'images/plus.png';
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px"; // altura real del contenido
    answer.classList.add('active');
    icon.src = 'images/minus.png';
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => toggleFaq(question));
  });
});
