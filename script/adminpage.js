let adminTag = document.getElementById('admin-page');
adminTag.style.display = "none";

//auto create admin account
function autoCreateAdminAccount(){
  var admAcc = {
    ho: "super",
    ten:"admin",
    username: "ad",
    email: " ",
    password: "adminadmin"
  };
  if(localStorage.getItem('accounts') === null){
    let accounts = [];
    accounts.push(admAcc);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }else{
    let accounts = JSON.parse(localStorage.getItem('accounts'));
      //check exists of admin account
      let checkExistsAd = false;
      for(let i = 0; i < accounts.length; i++){
        if(accounts[i].username === "ad"){
          checkExistsAd = true;
        }
      }
      if(checkExistsAd === false){
        accounts.push(admAcc);
        localStorage.setItem('accounts', JSON.stringify(accounts));
      }
  }
}

function defaultUserAccount(){
  var userAcc1 = {
    ho:"nguyen",
    ten: "teo",
    username: "cuteo",
    email: "cuteo@gmail.com",
    password: "12345"

  };
  var userAcc2 = {
    ho:"le",
    ten: "ti",
    username: "cutii",
    email: "cuti@gmail.com",
    password: "12345"

  };
  var userAcc3 = {
    ho:"ly",
    ten: "meo",
    username: "meomeo",
    email: "meomeo@gmail.com",
    password: "12345"

  };
  var userAcc4 = {
    ho:"nguyen",
    ten: "gau",
    username: "gaugau",
    email: "gaugau@gmail.com",
    password: "12345"

  };
  var userAcc5 = {
    ho:"le",
    ten: "tao",
    username: "taoapple",
    email: "appletao@gmail.com",
    password: "12345"

  };

  if(localStorage.getItem('accounts') === null){
    let accounts = [];
    accounts.push(userAcc1);
    accounts.push(userAcc2);
    accounts.push(userAcc3);
    accounts.push(userAcc4);
    accounts.push(userAcc5);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }else{
    let accounts = JSON.parse(localStorage.getItem('accounts'));
      //check exists of admin account
      let checkExistsAcc = false;
      for(let i = 0; i < accounts.length; i++){
        if(accounts[i].username === "cutii" || accounts[i].username === "gaugau" || accounts[i].username === "meomeo" || accounts[i].username === "cuteo" || accounts[i].username === "subadmin"){
          checkExistsAcc = true;
        }
      }
      if(checkExistsAcc === false){
        accounts.push(userAcc1);
        accounts.push(userAcc2);
        accounts.push(userAcc3);
        accounts.push(userAcc4);
        accounts.push(userAcc5);
        localStorage.setItem('accounts', JSON.stringify(accounts));
      }
  }
}
