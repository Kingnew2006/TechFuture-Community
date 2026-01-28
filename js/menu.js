// ============================================
// MENU.JS - Управление мобильным меню
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
});

function initializeMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        // Открытие/закрытие меню при клике на кнопку
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Закрытие меню при клике на ссылку
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // Подсветка текущей страницы в меню
    highlightCurrentPage();
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar__menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Проверяем, соответствует ли ссылка текущей странице
        if (currentPath.includes(href) || 
            (href === 'index.html' && currentPath.endsWith('/')) ||
            (currentPath.endsWith(href.replace('.html', '')))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}