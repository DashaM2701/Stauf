const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('.header_nav-list');
const overlay = document.querySelector('.overlay');

const dropdowns = [
  { 
    btn: '.dropbtn:not(.dropbtn-resourse)', 
    mega: '.mega-menu', 
    mobile: '.mobile-subnav' 
  },
  { 
    btn: '.dropbtn-resourse', 
    mega: '.resources-menu', 
    mobile: '.mobile-subnav' 
  }
];

// Функция закрытия всего
const closeEverything = () => {
  document.querySelectorAll('.mega-menu, .resources-menu, .mobile-subnav, .dropbtn-arrow').forEach(el => {
    el.classList.remove('active');
  });
  nav.classList.remove('open');
  burger.classList.remove('open');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
};

// Логика бургера
burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.classList.toggle('no-scroll', isOpen);
  if (!isOpen) closeEverything();
});

// Логика выпадающих списков
dropdowns.forEach(({ btn, mega }) => {
  const button = document.querySelector(btn);
  const megaMenu = document.querySelector(mega);
  const mobileList = button.parentElement.querySelector('.mobile-subnav'); 
  const arrow = button.querySelector('.dropbtn-arrow');

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const isMobile = window.innerWidth <= 768;
    
    // Если мобилка — работаем с внутренним списком, если десктоп — с мега-меню
    const target = isMobile ? mobileList : megaMenu;
    const isActive = target.classList.contains('active');

    
    document.querySelectorAll('.mega-menu, .resources-menu, .mobile-subnav, .dropbtn-arrow').forEach(el => {
        if (el !== target && el !== arrow) el.classList.remove('active');
    });

    if (!isActive) {
      target.classList.add('active');
      arrow.classList.add('active');
      if (!isMobile) {
          overlay.classList.add('active');
          document.body.style.overflow = 'hidden';
      }
    } else {
      target.classList.remove('active');
      arrow.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

overlay.addEventListener('click', closeEverything);