const checkTerms = () => {
  let termsCheck = document.getElementById('agree-terms');
  let btn = document.getElementById('signup_submit');
  if (termsCheck.checked == true){
    btn.classList.remove("disabled");
    btn.disabled = false;
  }else{
    btn.classList.add("disabled");
    btn.disabled = true;
  }
}

let signUp = document.getElementById("sign-up");
let logIn = document.getElementById("log-in");

const changeToLogin = () => {
  signUp.classList.add("hidden");
  logIn.classList.remove("hidden");
}

const changeToSignup = () => {
  signUp.classList.remove("hidden");
  logIn.classList.add("hidden");
}