addEventListener('DOMContentLoaded', () => {
    const icon_menu = document.querySelector('.icon_menu')
    if (icon_menu) {
        icon_menu.addEventListener('click',() => {
           const items_menu = document.querySelector('.items_menu')
           items_menu.classList.toggle('show')
        })
    }
})


