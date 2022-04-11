var first = document.getElementById("page-1"), second = document.getElementById("page-2"), third = document.getElementById("page-3"), fourth = document.getElementById("page-4") 

const slides = [first, second, third, fourth];
let count = 1; prev = 0;
const nextSlide = (x, y) => {
    if(count < slides.length){
        console.log(x, y)
        x.classList.remove("no-show");
        y.classList.add("no-show")
        count += 1;
        prev += 1;
        if(count === slides.length){
            count -= 1;
            prev -= 1;
            
        }
        console.log(count, prev);
    } 
}

const prevSlide = (x, y) => {
    if(count >= 1){
        console.log(x, y)
        x.classList.add("no-show");
        y.classList.remove("no-show")
        count -= 1;
        prev -= 1;
        console.log(count, prev)
    }
}
