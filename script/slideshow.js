
/**SLIDE SHOW**/
//get all slide
let slides = document.getElementsByClassName('slide');

//get all dot
let dots = document.getElementsByClassName('dot');

//get slide zone
let slideZone = document.getElementById('slide-zone');

//get left and right arrow
let pre = document.getElementById('leftarrow');
let next = document.getElementById('rightarrow');

let current = 0; //current slide index

//reset all slides
function slideReset(){
        //for slide image
        for(let i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        //for dots
        for(let i = 0; i < dots.length; i++){
            dots[i].style.backgroundColor = "#fff";
        }
    }

//start slide
function startSlide(){
    slideReset();
        //set default slide
        slides[0].style.display = "block";
        //set default dot
        dots[0].style.backgroundColor = "#ff5959";
    }
    startSlide();

//when click pre button
function leftSlide(){
    slideReset();
    slides[current - 1].style.display = "block";
    dots[current - 1].style.backgroundColor = "#ff5959";
    current--;
}
pre.addEventListener('click',previousSlide);

function previousSlide(){
    if(current === 0){
        current = slides.length;
    }
    leftSlide();
}
//when click next button
function rightSlide(){
    slideReset();
    slides[current + 1].style.display = "block";
    dots[current + 1].style.backgroundColor = "#ff5959";
    current++;
}
next.addEventListener('click',nextSlide);
function nextSlide(){
    if(current === slides.length - 1){
        current = -1;
    }
    rightSlide();
}

//for dot click
function gotoSlide(index){
    slideReset();
    slides[index].style.display = "block";
    dots[index].style.backgroundColor = "#ff5959";
    current = index;
}


//auto next slide
let times = 4000;
function autoNextSlide(){
    nextSlide();

    setTimeout("autoNextSlide()", times);
}

