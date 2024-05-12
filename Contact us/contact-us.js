let links = [
    "../index.html",
    "../Shopping/shopping.html",
    "../About us/about-us.html",
    "./contact-us.html"
]
let navButtons = document.querySelectorAll("header nav ul li")

navButtons.forEach((link, index) => {
    link.addEventListener('click', () => {
        window.location.href = links[index]
    })
})