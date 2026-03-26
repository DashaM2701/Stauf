  const banner = document.getElementById('banner');
  const zoneLeft = document.getElementById('zoneLeft');
  const zoneRight = document.getElementById('zoneRight');
function isMobile() { return window.innerWidth <= 530; }
  // Track which half the mouse is in
  banner.addEventListener('mousemove', (e) => {
     if (isMobile()) return;
    const rect = banner.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = rect.width / 2;

    if (x < half) {
      banner.classList.remove('state-right');
      banner.classList.add('state-left');
    } else {
      banner.classList.remove('state-left');
      banner.classList.add('state-right');
    }
  });

  // When mouse leaves banner — go back to left (default)
  banner.addEventListener('mouseleave', () => {
      if (isMobile()) return;
    banner.classList.remove('state-right');
    banner.classList.add('state-left');
  });