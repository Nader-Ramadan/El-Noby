let links = [
    "../index.html",
    "../Shopping/shopping.html",
    "../About us/about-us.html",
    "./contact-us.html",
    "../index.html",
    "../Shopping/shopping.html",
    "../About us/about-us.html",
    "./contact-us.html"
]
let navButtons = document.querySelectorAll("nav ul li")

navButtons.forEach((link, index) => {
    link.addEventListener('click', () => {
        window.location.href = links[index]
    })
})