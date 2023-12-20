const togglePassword = document.getElementById("togglePassword");
const togglePassword2 = document.getElementById("togglePassword2");
const passwordhide = document.getElementById("password");
const passwordhide2 = document.getElementById("password2");

togglePassword.addEventListener("click", function () {
  const type =
    passwordhide.getAttribute("type") === "password" ? "text" : "password";
  passwordhide.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

togglePassword2.addEventListener("click", function () {
  const type =
    passwordhide2.getAttribute("type") === "password" ? "text" : "password";
  passwordhide2.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});
