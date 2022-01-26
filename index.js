const searchIcon = document.querySelector('#search-icon')
const modalSearch = document.querySelector('.modal-search')
const closeSearch = document.querySelector('#close-search')
const navbar = document.querySelector('.header__navbar>ul')
const navMobile = document.querySelector('#mobileNav')
searchIcon.onclick = () => {
    modalSearch.classList.add('modal-active')
}
closeSearch.onclick = () => {
    modalSearch.classList.remove('modal-active')
}
navMobile.onclick = () => {
    navMobile.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}