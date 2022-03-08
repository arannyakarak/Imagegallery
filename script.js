let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 6; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec


//second gallery`

let gallery = document.querySelector(".gallery2");
let imgs = document.querySelectorAll(".item");

gallery.addEventListener("click", clicked);

function clicked(e) {

    imgs.forEach(img => {
        if(e.target.tagName == "BUTTON") {  
            
            img.parentElement.classList.remove("hide");
            if(e.target.innerHTML == "Show All") {

                if(img.classList.contains("all")) {
                    img.parentElement.classList.remove("hide");
                }
        
            } else if(e.target.innerHTML == "Cars") {

                if(img.dataset.select !== "cars") {
                    img.parentElement.classList.add("hide");
                }
            
            } else if(e.target.innerHTML == "Nature") {

                if(img.dataset.select !== "nature") {
                    img.parentElement.classList.add("hide");
                }

            } else {

                if(img.dataset.select !== "people") {
                    img.parentElement.classList.add("hide");
                }
               
            }
        }
    });    
}
