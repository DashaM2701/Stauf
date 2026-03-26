
    const playBtn = document.querySelectorAll('.card_overlay'); 
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