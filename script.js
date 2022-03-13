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
    if (e.target.tagName == "BUTTON") {

      img.parentElement.classList.remove("hide");
      if (e.target.innerHTML == "All") {

        if (img.classList.contains("all")) {
          img.parentElement.classList.remove("hide");
        }

      } else if (e.target.innerHTML == "Festival") {

        if (img.dataset.select !== "festival") {
          img.parentElement.classList.add("hide");
        }

      } else if (e.target.innerHTML == "Heritage") {

        if (img.dataset.select !== "heritage") {
          img.parentElement.classList.add("hide");
        }

      } else {

        if (img.dataset.select !== "food") {
          img.parentElement.classList.add("hide");
        }

      }
    }
  });
}


//Big image
const galleryItem = document.querySelectorAll(".all");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const next = document.querySelector(".right");
const prev = document.querySelector(".left");

var idx_src_arr = {};
var current_idx = 0;

//clicking on image item
galleryItem.forEach((item, i) => {
  idx_src_arr[i] = item.children[0].src;
  item.addEventListener("click", function(){
    current_idx = i;
    // console.log(item.children[0].src);
    overlay.classList.add("show");
    modal.classList.add("show");
    modal.children[0].src=item.children[0].src;
  });
})

//close button
close.addEventListener("click", function(){
    overlay.classList.remove("show");
    modal.classList.remove("show");
})

let show_modal = (src_str) => {
  modal.children[0].src = src_str;
}

//next
next.addEventListener('click', function(){
  // console.log("next");
  //showSlide(slideIdx++);
  if(current_idx == galleryItem.length - 1){
    current_idx = 0;
  }
  else{
    current_idx = current_idx + 1;
  }
  show_modal(idx_src_arr[current_idx]);
})
//back
prev.addEventListener('click', function(){
  if(current_idx == 0){
    current_idx = galleryItem.length - 1;
  }
  else{
    current_idx = current_idx - 1;
  }
  show_modal(idx_src_arr[current_idx]);
})



