var userName = JSON.parse(localStorage.getItem("name"));
var welcomLine = document.querySelector(".welcomLine");
welcomLine.innerHTML = "Welcome " + userName;

var logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("name");
});
