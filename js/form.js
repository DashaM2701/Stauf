document.addEventListener('DOMContentLoaded', () => {
    const inquiryForm = document.querySelector('.inquiry-form');
    const submitBtn = inquiryForm.querySelector('.submit-btn');

  
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

       
        const formData = new FormData(inquiryForm);
        const data = Object.fromEntries(formData.entries());
        
       
        const consentCheckbox = inquiryForm.querySelector('input[type="checkbox"]');
        if (!consentCheckbox.checked) {
            alert('Please accept the privacy policy to continue.');
            return;
        }

      
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        //  Имитация AJAX-запроса 
        setTimeout(() => {
            console.log('Form submitted successfully:', data);

            
            submitBtn.textContent = 'Sent';
            submitBtn.style.backgroundColor = '#4CAF50';
            submitBtn.style.color = '#fff';

            // Очистка формы через 2 секунды
            setTimeout(() => {
                inquiryForm.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.style = ''; 
                submitBtn.disabled = false;
            }, 2000);

        }, 1500);
    });
});