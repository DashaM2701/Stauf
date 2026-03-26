document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('#lang-switcher');
  const langMenu = document.querySelector('.lang-dropdown-menu');
  const langArrow = document.querySelector('.lang-arrow');
  const langText = document.querySelector('.header_lang-text');
  const langLinks = document.querySelectorAll('.lang-dropdown-menu a');


  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('active');
    langArrow.classList.toggle('active');
  });

  
  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const selectedLang = link.getAttribute('data-lang');
      
    
      langText.textContent = selectedLang;

      
      langLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

     
      langMenu.classList.remove('active');
      langArrow.classList.remove('active');

      console.log(`Язык переключен на: ${selectedLang}`);
     
    });
  });

 
  document.addEventListener('click', () => {
    langMenu.classList.remove('active');
    langArrow.classList.remove('active');
  });
});