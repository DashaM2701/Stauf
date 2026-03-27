document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('mainOverlay') || document.querySelector('.pop-up-overlay');
    const body = document.body;
    const popupSliders = {}; // Сюда попадают слайдеры, если они инициализируются в другом месте

    // --- 1. ЛОГИКА ТАБОВ (внутри pop-hand) ---
    const popupHand = document.getElementById('pop-hand');
    if (popupHand) {
        const tabs = popupHand.querySelectorAll('.tab_btn');
        const contents = popupHand.querySelectorAll('.popup-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');

                // Переключаем активную кнопку
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Переключаем активный контент
                contents.forEach(content => {
                    if (content.getAttribute('data-content') === target) {
                        content.classList.add('active');
                        // Исправляем отображение Splide после display: block
                        window.dispatchEvent(new Event('resize'));
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    }

    // --- 2. УНИВЕРСАЛЬНЫЕ ФУНКЦИИ ПОПАПОВ ---
    function openPopUp(popupElement) {
        if (!popupElement) {
            console.error("Попап не найден!");
            return;
        }

        // Синхронизация для попапа сохранения (Stauf)
        if (popupElement.id === 'popupSave') {
            const mainDial = document.querySelector('.hero-watch-img-dial');
            const saveDial = popupElement.querySelector('.save-dial');
            if (mainDial && saveDial) saveDial.src = mainDial.src;
        }

        if (overlay) {
            overlay.style.display = 'block';
            setTimeout(() => overlay.classList.add('active'), 10);
        }
        
        popupElement.style.display = 'block';
        setTimeout(() => popupElement.classList.add('active'), 10);
        body.style.overflow = 'hidden';

        // Обновляем слайдер, если он есть
        const sliderInPopup = popupElement.querySelector('.splide');
        if (sliderInPopup && popupSliders['#' + sliderInPopup.id]) {
            popupSliders['#' + sliderInPopup.id].refresh();
        }
    }

    function closeAll() {
        const activePopups = document.querySelectorAll('.pop-up, .pop-up-info, .pop-up-save');
        activePopups.forEach(p => {
            p.classList.remove('active');
            setTimeout(() => p.style.display = 'none', 300);
        });

        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => overlay.style.display = 'none', 300);
        }
        body.style.overflow = '';
    }

    // --- 3. ОБРАБОТЧИКИ СОБЫТИЙ ---

    // Открытие по data-popup
    document.querySelectorAll('[data-popup]').forEach(btn => {
        // Если это сама кнопка открытия, а не элемент попапа
        if (btn.tagName !== 'DIV') { 
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = btn.getAttribute('data-popup');
                openPopUp(document.getElementById(targetId));
            });
        }
    });

    // Специальный триггер для сохранения
    const saveTrigger = document.querySelector('.hero-download');
    if (saveTrigger) {
        saveTrigger.addEventListener('click', () => openPopUp(document.getElementById('popupSave')));
    }

    // Кнопки закрытия
    document.querySelectorAll('.pop-up-close').forEach(btn => {
        btn.addEventListener('click', closeAll);
    });

    if (overlay) overlay.addEventListener('click', closeAll);

    // Логика смены циферблата
    const mainDial = document.querySelector('.hero-watch-img-dial');
    const dialThumbs = document.querySelectorAll('.dial-thumb');

    dialThumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            dialThumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const imgInside = this.querySelector('img');
            if (imgInside && mainDial) {
                mainDial.style.opacity = '0.5';
                setTimeout(() => {
                    mainDial.src = imgInside.getAttribute('src');
                    mainDial.style.opacity = '1';
                }, 150);
            }
        });
    });

    // Переключатель темы
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            document.documentElement.setAttribute('data-theme', themeToggle.checked ? 'dark' : 'light');
        });
    }

    // Аккордеон (Specs)
    document.querySelectorAll('.spec-header').forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.spec-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
    
    const playBtn = document.querySelectorAll('.card_play-btn'); 
    const popupVideo = document.getElementById('popupVideo');      
    const videoPlayer = document.getElementById('mainVideoPlayer'); 
    const closeVideoBtn = document.getElementById('closeBtnVideo'); 
  
    const videoOverlay = document.getElementById('mainOverlay') || document.querySelector('.pop-up-overlay');

  
    function openVideo() {
        if (!popupVideo || !videoPlayer) return;

        if (videoOverlay) {
            videoOverlay.style.display = 'block';
            setTimeout(() => videoOverlay.classList.add('active'), 10);
        }

        popupVideo.style.display = 'flex';
        setTimeout(() => popupVideo.classList.add('active'), 10);
        
        
        document.body.style.overflow = 'hidden';

       
        videoPlayer.play().catch(error => {
            console.log("Автовоспроизведение заблокировано браузером. Пользователь должен нажать Play.");
        });
    }

   
    function closeVideo() {
        if (!popupVideo || !videoPlayer) return;

      
        popupVideo.classList.remove('active');
        if (videoOverlay) videoOverlay.classList.remove('active');

       
        setTimeout(() => {
            popupVideo.style.display = 'none';
            if (videoOverlay) videoOverlay.style.display = 'none';
        }, 400);

       
        document.body.style.overflow = '';

        
        videoPlayer.pause();
       
    }

  
    if (playBtn) {
   playBtn.forEach(play => {
      play.addEventListener('click', (e) => {
            e.preventDefault();
            openVideo();
        });
   })
      
    }

    if (closeVideoBtn) {
        closeVideoBtn.addEventListener('click', closeVideo);
    }


    if (popupVideo) {
        popupVideo.addEventListener('click', (e) => {
            
            if (e.target === popupVideo) {
                closeVideo();
            }
        });
    }

    // Закрытие по клавише Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popupVideo.classList.contains('active')) {
            closeVideo();
        }
    });
});