
 function hidePreloader() {
    const pre = document.getElementById('preloader');
    const con = document.getElementById('content');
    pre.classList.add('hidden');
    con.classList.add('visible');
  }

  function replay() {
    const pre = document.getElementById('preloader');
    const con = document.getElementById('content');
    pre.classList.remove('hidden');
    con.classList.remove('visible');
    pre.querySelector('.bar-fill').style.animation = 'none';
    void pre.querySelector('.bar-fill').offsetWidth;
    pre.querySelector('.bar-fill').style.animation = '';
    setTimeout(hidePreloader, 2000);
  }

  setTimeout(hidePreloader, 2000);