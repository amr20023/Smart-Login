/*SignUp system*/
var inputName = document.getElementById("inputName");
var inputMail = document.getElementById("inputMail");
var inputPass = document.getElementById("inputPass");
var myInput = document.getElementsByClassName("myInput");
var nameAlert = document.getElementById("nameAlert");
var mailAlert = document.getElementById("mailAlert");
var existsMail = document.getElementById("existsMail");
var addBtn = document.getElementById("btn");
var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");
var loginBtn = document.getElementById("loginBtn");
var alertlogin = document.getElementById("alertlogin");
var welcomePage = document.querySelector(".welcomePage");
var sign = document.querySelector(".sign");

var users = [];

if (JSON.parse(localStorage.getItem("users")) != null) {
  users = JSON.parse(localStorage.getItem("users"));
}
if (addBtn != null) {
  addBtn.addEventListener("click", function () {
    if (
      regex.test(inputName.value) == true &&
      reg.test(inputMail.value) == true &&
      isExists() == false
    ) {
      addUser();
      clearForm();
    } else {
      existsMail.classList.remove("d-none");
    }
  });
}
function addUser() {
  var user = {
    name: inputName.value,
    mail: inputMail.value,
    pass: inputPass.value,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}
function isExists() {
  var Check = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].mail == inputMail.value || users[i].name == inputName.value) {
      Check = true;
    } else {
      Check = false;
    }
  }
  return Check;
}
function clearForm() {
  for (var i = 0; i < myInput.length; i++) {
    myInput[i].value = "";
  }
}
var regex = /^[a-z]{3,}(\s[a-z]{2,})*$/i;

if (inputName != null) {
  inputName.addEventListener("input", function () {
    if (regex.test(inputName.value) == true) {
      inputName.classList.add("is-valid");
      inputName.classList.remove("is-invalid");
      nameAlert.classList.add("d-none");
    } else {
      inputName.classList.add("is-invalid");
      inputName.classList.remove("is-valid");
      nameAlert.classList.remove("d-none");
    }
  });
}

var reg = /^[a-z]{2,}[0-9]*@(gmail|yahoo)\.com$/i;

if (inputMail != null) {
  inputMail.addEventListener("input", function () {
    if (reg.test(inputMail.value) == true) {
      inputMail.classList.add("is-valid");
      inputMail.classList.remove("is-invalid");
      mailAlert.classList.add("d-none");
    } else {
      inputMail.classList.add("is-invalid");
      inputMail.classList.remove("is-valid");
      mailAlert.classList.remove("d-none");
    }
  });
}

/*login System*/

if (loginBtn != null) {
  loginBtn.addEventListener("click", function () {
    logIn();
    clearForm();
  });
}
function getRightInfo() {
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].mail == loginEmail.value &&
      users[i].pass == loginPass.value
    ) {
      localStorage.setItem("name", JSON.stringify(users[i].name));
      return true;
    }
  }
}
function getWrongInfo() {
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].mail != loginEmail.value ||
      users[i].pass != loginPass.value
    ) {
      return true;
    }
  }
}
function logIn() {
  if (getRightInfo() == true) {
    loginBtn.setAttribute("href", "welcome.html");
    alertlogin.classList.add("d-none");
  } else if (getWrongInfo() == true) {
    alertlogin.classList.remove("d-none");
    loginBtn.removeAttribute("href");
  }
}
