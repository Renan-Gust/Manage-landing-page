const menu = document.querySelector(".menu")

menu.addEventListener("click", () => {
    document.querySelector("nav.navbar-mobile").classList.toggle("change")
    menu.classList.toggle("change")
    document.querySelector("body").classList.toggle("background")
})