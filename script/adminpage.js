let adminTag = document.getElementById('admin-page');
adminTag.style.display = "none";

//auto create admin account
function autoCreateAdminAccount(){
	var admAcc = {
		username: "ad",
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
