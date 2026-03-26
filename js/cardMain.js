document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('mainOverlay') || document.querySelector('.pop-up-overlay');
    const body = document.body;
    const popupSliders = {};

    // 1. Инициализация всех Splide в попапах
    const sliderIds = ['#splide-popup', '#splide-popup-dial', '#splide-popup-hand'];
    sliderIds.forEach(id => {
        const el = document.querySelector(id);
        if (el && typeof Splide !== 'undefined') {
            popupSliders[id] = new Splide(id, {
                type: 'fade',
                rewind: true,
                pagination: false,
                arrows: true,
            }).mount();
        }
    });

    // 2. Универсальная функция открытия
    function openPopUp(popupElement) {
        if (!popupElement) {
            console.error("Попап не найден!");
            return;
        }

        // Синхронизация для попапа сохранения
        if (popupElement.id === 'popupSave') {
            const mainDial = document.querySelector('.hero-watch-img-dial');
            const saveDial = popupElement.querySelector('.save-dial');
            if (mainDial && saveDial) saveDial.src = mainDial.src;
        }

        // Показываем оверлей и попап
        if (overlay) {
            overlay.style.display = 'block';
            setTimeout(() => overlay.classList.add('active'), 10);
        }
        
        popupElement.style.display = 'block';
        setTimeout(() => popupElement.classList.add('active'), 10);
        
        body.style.overflow = 'hidden';

        // Обновляем слайдер внутри
        const sliderInPopup = popupElement.querySelector('.splide');
        if (sliderInPopup && popupSliders['#' + sliderInPopup.id]) {
            popupSliders['#' + sliderInPopup.id].refresh();
        }
    }

    // 3. Функция закрытия
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

    // 4. Навешиваем события на ВСЕ кнопки с data-popup
    // Это заставит работать .btn-more, .overlay-btn и любые другие
    document.querySelectorAll('[data-popup]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-popup');
            openPopUp(document.getElementById(targetId));
        });
    });

    // Специальные триггеры (если у них нет data-popup)
    const saveTrigger = document.querySelector('.hero-download');
    const popupSave = document.getElementById('popupSave');
    if (saveTrigger) saveTrigger.addEventListener('click', () => openPopUp(popupSave));

    // Кнопки закрытия внутри попапов
    document.querySelectorAll('.pop-up-close').forEach(btn => {
        btn.addEventListener('click', closeAll);
    });

    if (overlay) overlay.addEventListener('click', closeAll);

    // 5. Логика смены циферблата (твоя существующая)
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

    // 6. Аккордеон и Темы
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            document.documentElement.setAttribute('data-theme', themeToggle.checked ? 'dark' : 'light');
        });
    }

    document.querySelectorAll('.spec-header').forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.spec-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
});
    const tabBtns = document.querySelectorAll('.tab_btn');

  // --- Логика переключения табов ---
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // 1. Убираем активный класс у всех кнопок и добавляем нажатой
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Логика отображения контента
            tabContents.forEach(content => {
                const contentCategory = content.getAttribute('data-content');

                if (targetTab === 'all') {
                    // Если выбрано "All", показываем все блоки
                    content.style.display = 'block';
                } else if (contentCategory === targetTab) {
                    // Показываем только соответствующий блок
                    content.style.display = 'block';
                } else {
                    // Скрываем остальные
                    content.style.display = 'none';
                }
            });
        });
    });