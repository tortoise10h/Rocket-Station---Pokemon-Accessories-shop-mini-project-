//For sign up zone
let signUpBtn = document.getElementById('sign-up-btn');
let signUpBox = document.getElementById('sign-up-box');
let closeSignUpBtn = document.getElementById('close-sign-up');
let cancelSignUpBtn = document.getElementById('cancel-sign-up');
signUpBtn.addEventListener('click', openSignUpBox);
closeSignUpBtn.addEventListener('click', hideSignUpBox);
cancelSignUpBtn.addEventListener('click', hideSignUpBox);

//for sign in zone
let signInBtn = document.getElementById('sign-in-btn');
let signInBox = document.getElementById('sign-in-box');
let closeSigninBtn = document.getElementById('close-sign-in');
let cancelSigninBtn = document.getElementById('cancel-sign-in');
signInBtn.addEventListener('click', openSignInBox);
closeSigninBtn.addEventListener('click', hideSignInBox);
cancelSigninBtn.addEventListener('click', hideSignInBox);

//get related zone
let searchZone = document.getElementById('search-zone');

let slide = document.getElementById('slide-zone');

let navZone = document.getElementById('nav-id');





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

function openSignInBox(){
	signInBox.style.display = "block";
    searchZone.style.display = "none";
    slide.style.display = "none";
    navZone.style.display = "none";
}
function hideSignInBox(){
    signInBox.style.display = "none";
    searchZone.style.display = "grid";
    slide.style.display = "block";
    navZone.style.display = "grid";
}