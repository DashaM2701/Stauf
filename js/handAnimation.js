document.addEventListener('DOMContentLoaded', () => {
  const hands = document.querySelectorAll('.hand-img');
  let currentIndex = 0;

  function switchHand() {
   
    hands[currentIndex].classList.remove('active');


    currentIndex = (currentIndex + 1) % hands.length;

    
    hands[currentIndex].classList.add('active');
  }

 
  setInterval(switchHand, 4000);
});

