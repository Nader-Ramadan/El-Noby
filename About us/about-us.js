let wraper = document.querySelector(".section2 .img-wraper1")
let buttonLeft = document.querySelector(".section2 .arrow-left")
let buttonRight = document.querySelector(".section2 .arrow-right")

buttonLeft.addEventListener("click", () => {
    if (window.innerWidth <= 375) {
        wraper.scrollBy({
            left: -76,
            behavior: "smooth"
        })
    }
    else if (window.innerWidth <= 425) {
        wraper.scrollBy({
            left: -152,
            behavior: "smooth"
        })
    }
    else if (window.innerWidth <= 1024) {
        wraper.scrollBy({
            left: -190,
            behavior: "smooth"
        })
    }
    else if (window.innerWidth <= 1440) {
        wraper.scrollBy({
            left: -228,
            behavior: "smooth"
        })
    }
    else if (window.innerWidth <= 1920) {
        wraper.scrollBy({
            left: -304,
            behavior: "smooth"
        })
    }
})
buttonRight.addEventListener("click", () => {
    if (window.innerWidth <= 375) {
        wraper.scrollBy({
            left: 76,
            behavior: "smooth"
        })
    }
    else if (window.innerWidth <= 425) {
        wraper.scrollBy({
            left: 152,
            behavior: "smooth"
        })
    }
    else if (window.innerWidth <= 1024) {
        wraper.scrollBy({
            left: 190,
            behavior: "smooth"
        })
    }
    else if (window.innerWidth <= 1440) {
        wraper.scrollBy({
            left: 228,
            behavior: "smooth"
        })
    }
    else if (window.innerWidth <= 1920) {
        wraper.scrollBy({
            left: 304,
            behavior: "smooth"
        })
    }
})