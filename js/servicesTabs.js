// --- (Tabs) ---
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.warranty-content'); 

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetTab = link.getAttribute('data-tab'); 

      
        tabLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');

       
        tabContents.forEach(content => {
            
            if (content.getAttribute('data-content') === targetTab) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

       
    });
});