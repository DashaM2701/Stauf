document.addEventListener('DOMContentLoaded', () => {
    const firstPopup = document.getElementById('popupPassport');
    const secondPopup = document.getElementById('passportStageWelcome');
    const passportForm = document.querySelector('.passport-form');
    const overlay = document.querySelector('.pop-up-overlay');
    
   
    const closeBtn = document.getElementById('closeBtnPassport'); 
    const btnArchive = document.querySelector('.welcome-full-submit'); 

  
    const closeEverything = () => {
        if (firstPopup) {
            firstPopup.classList.remove('active');
            setTimeout(() => firstPopup.style.display = 'none', 400);
        }
        if (secondPopup) {
            secondPopup.classList.remove('active-welcome');
            setTimeout(() => secondPopup.style.display = 'none', 400);
        }
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => overlay.style.display = 'none', 400);
        }
        document.body.style.overflow = ''; 
    };

    setTimeout(() => {
        if (firstPopup) {
            firstPopup.style.display = 'flex';
            if (overlay) overlay.style.display = 'block';
            setTimeout(() => {
                firstPopup.classList.add('active');
                if (overlay) overlay.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    }, 1000);

  
    if (passportForm) {
        passportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (firstPopup) firstPopup.style.display = 'none';
            if (secondPopup) {
                secondPopup.style.setProperty('display', 'block', 'important');
                setTimeout(() => secondPopup.classList.add('active-welcome'), 50);
            }
        });
    }

   
    if (btnArchive) {
        btnArchive.addEventListener('click', closeEverything);
    }

  
    if (closeBtn) {
        closeBtn.addEventListener('click', closeEverything);
    }

    
    if (overlay) {
        overlay.addEventListener('click', closeEverything);
    }
});