// Плавная прокрутка по ссылкам меню
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // если ссылка ведёт на якорь — плавно крутим
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


