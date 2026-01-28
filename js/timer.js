// ============================================
// TIMER.JS - Таймер обратного отсчёта
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeTimer();
});

function initializeTimer() {
    // Целевая дата: 15 марта 2026, 10:00
    const conferenceDate = new Date('2026-03-15T10:00:00').getTime();
    
    // Обновляем таймер каждую секунду
    updateTimer(conferenceDate);
    setInterval(() => {
        updateTimer(conferenceDate);
    }, 1000);
}

function updateTimer(targetDate) {
    // Текущее время
    const now = new Date().getTime();
    
    // Разница во времени
    const difference = targetDate - now;
    
    // Если конференция уже началась
    if (difference <= 0) {
        displayConferenceStarted();
        return;
    }
    
    // Расчёт времени
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Обновляем DOM элементы
    updateTimerElement('days', days);
    updateTimerElement('hours', hours);
    updateTimerElement('minutes', minutes);
    updateTimerElement('seconds', seconds);
}

function updateTimerElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        // Форматируем значение с нулями
        element.textContent = String(value).padStart(2, '0');
    }
}

function displayConferenceStarted() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = '00';
    if (hoursEl) hoursEl.textContent = '00';
    if (minutesEl) minutesEl.textContent = '00';
    if (secondsEl) secondsEl.textContent = '00';
    
    // Добавляем сообщение о начале конференции
    const timerContainer = document.getElementById('conferenceTimer');
    if (timerContainer) {
        const message = document.createElement('p');
        message.style.textAlign = 'center';
        message.style.color = '#fff';
        message.style.fontSize = '1.2rem';
        message.style.fontWeight = '600';
        message.style.marginTop = '1rem';
        message.textContent = '🎉 Конференция началась!';
        timerContainer.parentElement.appendChild(message);
    }
}