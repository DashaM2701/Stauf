
    // ---(Tabs) ---
    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            
            tabLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            
            
            console.log(`Switching to: ${link.textContent.trim()}`);
        });
    });
