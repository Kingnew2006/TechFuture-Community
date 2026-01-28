// ============================================
// MAIN.JS - Основная логика приложения
// ============================================

console.log('TechFuture 2026 - Conference Website');

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружена');
    initializeApp();
});

function initializeApp() {
    // Привет в консоль
    console.log('✓ Приложение инициализировано');
    
    // Можно добавить другую инициализацию если нужно
}

// Общие утилиты
const Utils = {
    // Форматирование даты
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ru-RU', options);
    },

    // Форматирование времени
    formatTime(date) {
        return date.toLocaleTimeString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    },

    // Получение параметра из URL
    getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },

    // Сохранение в localStorage
    saveToStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Ошибка при сохранении в localStorage:', error);
            return false;
        }
    },

    // Получение из localStorage
    getFromStorage(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Ошибка при чтении из localStorage:', error);
            return null;
        }
    }
};

// Экспорт для использования в других файлах
window.Utils = Utils;