document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menubutton'),
          menu = document.querySelector('.hmenu');

    menuBtn.addEventListener('click', () => {
        menu.classList.add('active');
    })

    document.body.addEventListener('click', (e) => {
        if (e.target != menu && !menu.contains(e.target) && e.target != menuBtn && !menuBtn.contains(e.target)) {
            menu.classList.remove('active')
        }
    })
})