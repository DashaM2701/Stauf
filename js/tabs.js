document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab_btn');
    const tabContents = document.querySelectorAll('.press-content');

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

    // --- Логика кнопок "Load More" ---
    const loadMoreWrappers = document.querySelectorAll('.load_more-wrapp');

    loadMoreWrappers.forEach(wrapper => {
        const btn = wrapper.querySelector('.load_more-btn');
        const text = wrapper.querySelector('.load_more-text');

        btn.addEventListener('click', () => {
            // Имитация загрузки
            text.textContent = 'Loading...';
            btn.style.opacity = '0.5';
            btn.style.pointerEvents = 'none';

            setTimeout(() => {
                // Здесь обычно идет запрос к API и рендер новых карточек.
                // Пока просто выведем сообщение и скроем кнопку.
                text.textContent = 'All items loaded';
                btn.style.display = 'none';
                
                console.log('Additional content loaded for this section');
            }, 1000);
        });
    });
});