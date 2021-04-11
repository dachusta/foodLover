const headerMenu = document.querySelector('.header__menu')
if (headerMenu) {
    headerMenu.addEventListener('click', function() {
        document.body.classList.toggle('_lock')
        headerMenu.classList.toggle('_active')
    })
}