var first = document.getElementById("page-1"); 
var second = document.getElementById("page-2"); 
var third = document.getElementById("page-3"); 
var fourth = document.getElementById("page-4");

const slides = [first, second, third, fourth];
let count = 1; prev = 0;
const nextSlide = (x, y) => {
    if(count < slides.length){
        x.classList.remove("no-show");
        y.classList.add("no-show")
        count += 1;
        prev += 1;
    } else if(count === slides.length){    
        first.classList.remove("no-show");
        second.classList.remove("no-show");
        third.classList.remove("no-show");
        document.getElementById("title").innerHTML = "Get Early Access(Summary)";
        document.getElementById("submit").classList.remove("no-show");
        document.getElementById("buttons").classList.add("no-show");
    }
}


const prevSlide = (x, y) => {
    if(count > 1){
        count -= 1;
        prev -= 1;
        x.classList.add("no-show");
        y.classList.remove("no-show")
    }
}