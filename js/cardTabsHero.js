const tabButtons = document.querySelectorAll('.tab_btn-hero');
const tabContents = document.querySelectorAll('.hero-content-change');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Проверка: если экран шире 768px — ничего не делаем
        if (window.innerWidth > 768) return;

        const target = button.getAttribute('data-tab');

        // 1. Переключаем активный класс у кнопок
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 2. Переключаем контент
        tabContents.forEach(content => {
            if (content.getAttribute('data-content') === target) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // Важно для Splide: на мобилках часто нужно форсировать пересчет
        window.dispatchEvent(new Event('resize'));
    });
});