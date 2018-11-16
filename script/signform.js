let signUpBtn = document.getElementById('sign-up-btn');

let signUpBox = document.getElementById('sign-up-box');

let closeBtn = document.getElementById('close-sign-up');

let cancelBtn = document.getElementById('cancel-sign-up');

let searchZone = document.getElementById('search-zone');

let slide = document.getElementById('slide-zone');

let navZone = document.getElementById('nav-id');

signUpBtn.addEventListener('click', openSignUpBox);

closeBtn.addEventListener('click', hideSignUpBox);

cancelBtn.addEventListener('click', hideSignUpBox);

function openSignUpBox(){
    signUpBox.style.display = "block";
    searchZone.style.display = "none";
    slide.style.display = "none";
    navZone.style.display = "none";
}
function hideSignUpBox(){
    signUpBox.style.display = "none";
    searchZone.style.display = "grid";
    slide.style.display = "block";
    navZone.style.display = "grid";
}
