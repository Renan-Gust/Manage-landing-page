const c = element => document.querySelector(element)
const cs = element => document.querySelectorAll(element)

testimonialsJsonDesktop.map((item) => {
    let testimonialsItem = c(".testimonials-content .testimonials-person").cloneNode(true)
    c(".testimonials-desktop-area").append(testimonialsItem)

    testimonialsItem.querySelector(".testimonials-desktop-area .testimonials-person img").src = item.img
    testimonialsItem.querySelector(".testimonials-desktop-area .testimonials-person h2").innerHTML = item.name
    testimonialsItem.querySelector(".testimonials-desktop-area .testimonials-person p").innerHTML = item.description
})

testimonialsJsonMobile.map((item) => {
    let testimonialsItem = c(".testimonials-content .testimonials-person").cloneNode(true)
    c(".testimonials-mobile-area .testimonials-mobile").append(testimonialsItem)

    testimonialsItem.querySelector(".testimonials-mobile-area .testimonials-mobile img").src = item.img
    testimonialsItem.querySelector(".testimonials-mobile-area .testimonials-mobile h2").innerHTML = item.name
    testimonialsItem.querySelector(".testimonials-mobile-area .testimonials-mobile p").innerHTML = item.description

    let spanElement = document.createElement("span")
    c(".testimonials-mobile-area .index").append(spanElement)
})

c(".testimonials-mobile .testimonials-person").classList.add("selected")
c(".testimonials-mobile-area .index span").classList.add("active")

let people = cs(".testimonials-mobile .testimonials-person")
let indexActive = cs(".testimonials-mobile-area .index span")
let max = people.length
let indexCurrent = 0

function nextPerson() {
    people[indexCurrent].classList.remove("selected")
    indexActive[indexCurrent].classList.remove("active")

    indexCurrent++
    if (indexCurrent >= max) indexCurrent = 0

    people[indexCurrent].classList.add("selected")
    indexActive[indexCurrent].classList.add("active")
}

function start() {
    setInterval(() => {
        nextPerson()
    }, 2000);
}

window.addEventListener("load", start)