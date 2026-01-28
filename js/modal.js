/ ============================================
// MODAL.JS - Управление модальными окнами
// ============================================

let currentTicketData = {
    type: '',
    price: 0
};

document.addEventListener('DOMContentLoaded', () => {
    initializeModal();
});

function initializeModal() {
    // Закрытие модального окна при клике на фон
    const modal = document.getElementById('buyModal');
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
}

function buyTicket(ticketType, price) {
    currentTicketData.type = ticketType;
    currentTicketData.price = price;
    
    // Обновляем информацию в модальном окне
    document.getElementById('modalTicketType').textContent = ticketType;
    document.getElementById('modalPrice').textContent = price;
    
    // Открываем модальное окно
    const modal = document.getElementById('buyModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('buyModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
    }
    
    // Очищаем форму
    const form = document.getElementById('buyForm');
    if (form) {
        form.reset();
    }
}

function submitBuy() {
    const form = document.getElementById('buyForm');
    
    if (!form.checkValidity()) {
        alert('Пожалуйста, заполните все обязательные поля');
        return;
    }
    
    const name = document.getElementById('buyName').value;
    const email = document.getElementById('buyEmail').value;
    const phone = document.getElementById('buyPhone').value;
    
    // Валидация
    if (!name  !email  !phone) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    // Здесь обычно была бы отправка данных на сервер
    // Для учебного проекта просто показываем сообщение об успехе
    
    const confirmMessage = `
        Спасибо за регистрацию!
        
        Тариф: ${currentTicketData.type}
        Цена: ${currentTicketData.price} ₽
        Имя: ${name}
        Email: ${email}
        Телефон: ${phone}
        
        На ваш email будет отправлена информация о регистрации.
    `;
    
    alert(confirmMessage);
    
    // Закрываем модальное окно
    closeModal();
    
    // Очищаем форму
    form.reset();
}

function submitForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    
    if (!name  !email  !topic || !message) {
        showMessage(formMessage, 'Пожалуйста, заполните все поля', 'error');
        return;
    }
    
    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage(formMessage, 'Пожалуйста, введите корректный email', 'error');
        return;
    }
    
    // Здесь обычно отправляется форма на сервер
    // Для учебного проекта просто показываем сообщение об успехе
    
    showMessage(formMessage, 
        'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.', 
        'success');
    
    // Очищаем форму
    form.reset();
    
    // Скрываем сообщение через 5 секунд
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

function showMessage(element, message, type) {
    if (!element) return;
    
    element.textContent = message;
    element.className = `form__message ${type}`;
    element.style.display = 'block';
}
function scheduleFilterDay(day) {
    const dayElements = document.querySelectorAll('.schedule__day');
    const filterButtons = document.querySelectorAll('.filter__btn');
    
    // Скрываем все дни
    dayElements.forEach(el => el.classList.remove('active'));
    
    // Убираем активный класс со всех кнопок
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Показываем выбранный день
    const selectedDay = document.getElementById(`day-${day}`);
    if (selectedDay) {
        selectedDay.classList.add('active');
    }
    
    // Добавляем активный класс к нажатой кнопке
    const clickedButton = document.querySelector([data-day=\"${day}\"]);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// Экспорт функций для использования из HTML
window.buyTicket = buyTicket;
window.closeModal = closeModal;
window.submitBuy = submitBuy;
window.submitForm = submitForm;
window.scheduleFilterDay = scheduleFilterDay;