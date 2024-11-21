document.getElementById('whatsappButton').addEventListener('click', function () {
  const phoneNumber = '5581999999999'; // Substitua pelo número do atendente com o código do país
  const message = 'Olá, gostaria de mais informações.'; // Mensagem inicial
  const whatsappUrl = `https://wa.me/55${81991702554}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
});
