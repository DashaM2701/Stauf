// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab_btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          
            tabButtons.forEach(btn => btn.classList.remove('active'));

           
            button.classList.add('active');

          
            const filterValue = button.textContent.trim();
            console.log('Фильтр по категории:', filterValue);
            
        
        });
    });
});