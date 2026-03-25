document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contacts_form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        // Собираем данные формы
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        
        const privacyChecked = this.querySelector('input[name="privacy"]').checked;
        
        if (!privacyChecked) {
            alert('Please consent to the processing of your data.');
            return;
        }

        // Имитация отправки данных на сервер
        console.log('Sending data...', data);

        // Визуальный фидбек пользователю
        const submitBtn = this.querySelector('.form_btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';

        // Имитируем задержку сети
        setTimeout(() => {
            alert('Thank you! Your message has been sent.');
            
           
            this.reset();
            
           
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }, 1500);
    });

    
    const inputs = contactForm.querySelectorAll('.form_input, .form_textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('is-focused');
        });
        
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentElement.classList.remove('is-focused');
            }
        });
    });
});