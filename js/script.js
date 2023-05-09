const burgerBtn = document.querySelector('.burger');
const closeMobileMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const shadow = document.querySelector('.bg-shadow')
const body = document.querySelector('body')

const dropdowns = document.querySelectorAll('.drop')

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active')
    shadow.style.display = 'block'
    body.style.overflow = 'hidden'
    
    
})

closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active')
    shadow.style.display = 'none'
    body.style.overflow = 'auto'
})

dropdowns.forEach(function(item) {
    item.addEventListener('click', () => {
        let dropdown = item.querySelector('.dropdown')
        let arrowImg = item.querySelector('img')
        dropdown.classList.toggle('dropdown--active')
        if (dropdown.classList.contains('dropdown--active')) {
            arrowImg.setAttribute('src','../images/icon-arrow-up.svg')
        } else {
            arrowImg.setAttribute('src','../images/icon-arrow-down.svg')
        }
    })
})