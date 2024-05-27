let links = [
    "../index.html",
    "./shopping.html",
    "../About us/about-us.html",
    "../Contact us/contact-us.html",
    "../index.html",
    "./shopping.html",
    "../About us/about-us.html",
    "../Contact us/contact-us.html"
]
let navButtons = document.querySelectorAll("nav ul li")

navButtons.forEach((link, index) => {
    link.addEventListener('click', () => {
        window.location.href = links[index]
    })
})