 document.addEventListener('DOMContentLoaded', () => {
    initializeFAQ();
});

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        
        if (question) {
            question.addEventListener('click', () => {
                toggleFAQItem(item);
            });
        }
    });
}

function toggleFAQ(element) {
    // Эта функция вызывается из HTML onclick
    const item = element.closest('.faq__item');
    if (item) {
        toggleFAQItem(item);
    }
}

function toggleFAQItem(item) {
    const isActive = item.classList.contains('active');
    
    // Закрываем все остальные элементы (опционально для одновременного открытия одного)
    const allItems = document.querySelectorAll('.faq__item');
    
    // Раскомментируйте эту строку, если хотите, чтобы открывался только один вопрос:
    // allItems.forEach(el => el.classList.remove('active'));
    
    // Переключаем текущий элемент
    if (!isActive) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
}

// Экспорт функции для использования из HTML
window.toggleFAQ = toggleFAQ;
