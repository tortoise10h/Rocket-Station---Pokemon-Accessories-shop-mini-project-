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


function openSignUpBox(){
    signUpBox.style.display = "block";
    // searchZone.style.display = "none";
    // slide.style.display = "none";
    // navZone.style.display = "none";
}
function hideSignUpBox(){
    signUpBox.style.display = "none";
    // searchZone.style.display = "grid";
    // slide.style.display = "block";
    // navZone.style.display = "grid";
}

function openSignInBox(){
    signInBox.style.display = "block";
    // searchZone.style.display = "none";
    // slide.style.display = "none";
    // navZone.style.display = "none";
}
function hideSignInBox(){
    signInBox.style.display = "none";
    // searchZone.style.display = "grid";
    // slide.style.display = "block";
    // navZone.style.display = "grid";
}
/**SIGN UP ACCOUNT**/
//Get submit form sign up box
let signUpSubmit = document.forms["sign-up-form"];
let signUpSubmitBtn = document.forms["sign-up-form"]["sign-up-submit"];
// signUpSubmit.addEventListener('submit',saveAccount);
signUpSubmitBtn.addEventListener('click',saveAccount);
//Get username and password to create new account from sign up from
function saveAccount(){
    let usernameRegis = document.forms["sign-up-form"]["email"].value;
    let passwordRegis = document.forms["sign-up-form"]["psw"].value;
    let repeatPasswordRegis = document.forms["sign-up-form"]["psw-repeat"].value;
    //account object
    var account = {
        username: usernameRegis,
        password: passwordRegis
    };
    //check if input box was ignored
    if(usernameRegis === "" || passwordRegis === "" || repeatPasswordRegis === ""){
        alert("Vui lòng điền đầy đủ thông tin vào các trường bên dưới!!!");
        return false;
    }
    //check length of username
    if(usernameRegis.length < 5){
        alert("Tên tài khoản phải có 5 ký tự trở lên!!!");
        return false;
    }
    //we don't accept space in register form -_-
    if(usernameRegis.indexOf(" ") > -1 || passwordRegis.indexOf(" ") > -1 || repeatPasswordRegis.indexOf(" ") > -1){
        alert("Tên tài khoản hoặc mật khẩu không được có khoảng trắng!!!");
        return false;
    }
    //check password and repeat password
    if(passwordRegis !== repeatPasswordRegis){
        alert("Mật khẩu và mật khẩu nhập lại phải giống nhau!!!");
        return false;
    }
    //check if accounts is null
    if(localStorage.getItem('accounts') === null){
        //init new account array
        let accounts = [];
        accounts.push(account);
        //push to local storage
        localStorage.setItem('accounts', JSON.stringify(accounts));
        alert("Chúc mừng bạn đã đăng ký tài khoản thành công, Mời đăng nhập và trải nghiệm mua hàng cùng chúng tôi!!!");
        window.location.reload();
    }else{
        //get accounts array from local storage
        let accounts = JSON.parse(localStorage.getItem('accounts'));
        //check duplicate user
        let checkExistsUser = true;
        for(let i = 0; i < accounts.length; i++){
            if(accounts[i].username == account.username){
                checkExistsUser = false;
            }
        }
        if(checkExistsUser == false){
            alert("Tên tài khoản đã có người sử dụng!!!");
        }else{
            //add new account to accounts array
            accounts.push(account);
            //push accounts array back to local storage
            localStorage.setItem('accounts', JSON.stringify(accounts));
            alert("Chúc mừng bạn đã đăng ký tài khoản thành công, Mời đăng nhập và trải nghiệm mua hàng cùng chúng tôi!!!");
            window.location.reload();
        }
    }

}


/**LOGIN ACCOUNT**/
//get sign in box
let signInSubmit = document.forms["sign-in-form"];
let signInSubmitBtn = document.forms["sign-in-form"]["sign-in-submit"];
signInSubmitBtn.addEventListener('click',checkLogin);
function checkLogin(){
    //get user name and password from user input
    let usernameLogin = document.forms["sign-in-form"]["username"].value;
    let passwordLogin = document.forms["sign-in-form"]["psw"].value;
    //get account array from local storage
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    //check username and password of user
    let isAccountExists = false;
    for(let i = 0; i < accounts.length; i++){
        if(usernameLogin == accounts[i].username && passwordLogin == accounts[i].password){
            let check2 = JSON.parse(localStorage.getItem('check'));
            check2 = {
                isLogin: true,
                currentUsername: accounts[i].username
            };
            localStorage.setItem('check', JSON.stringify(check2));
            alert("Đăng nhập thành công, Xin chào " + '"' + usernameLogin + '" !!!');
            isAccountExists = true;
            window.location.reload();
        }
    }
    if(isAccountExists == false){
        alert("Tên tài khoản hoặc mật khẩu không chính xác!!!");
    }
}

