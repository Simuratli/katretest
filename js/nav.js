var hamburger = document.querySelector('.hamburger')
var responsiveNav  = document.querySelector(".responsive_nav")
hamburger.addEventListener("click", openmenu)

function openmenu(){
    responsiveNav.classList.toggle("active")
}