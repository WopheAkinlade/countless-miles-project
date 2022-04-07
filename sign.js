var first = document.getElementById("page-1"); second = document.getElementById("page-2"); third = document.getElementById("page-3"); fourth = document.getElementById("page-4") 

const slides = [first, second, third, fourth];

const nextSlide = (x) => {
    x.classList.remove("no-show")
    console.log("Hi")
}

console.log(slides[2])