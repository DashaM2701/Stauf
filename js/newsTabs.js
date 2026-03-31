document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab_btn');
    const contents = document.querySelectorAll('.news-content');

    function initTabs() {
        contents.forEach(content => {
            if (content.getAttribute('data-content') !== 'all') {
                content.style.display = 'none';
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

         
            tabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');

         
            contents.forEach(content => {
                if (content.getAttribute('data-content') === target) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    initTabs();
});