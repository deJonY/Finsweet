const registerForm = document.getElementById("register-form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submitBtn = document.getElementById("submitBtn");

// registerForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let check = this.checkValidity();
//   this.classList.add("was-validated");
//   if (check) {
//     let data = {
//       first_name: firstname.value,
//       last_name: lastname.value,
//       username: username.value,
//       password: password.value,
//       // password2: password2.value,
//     };
//     submitBtn.disabled = true;
//     requestRegister
//       .post("auth/register", data)
//       .then((res) => {
//         localStorage.setItem(REGISTERTOKEN, res.data.token);
//         location.href = "../login.html";
//       })
//       .catch((err) => {
//         alert("Username yoki password xato !");
//       })
//       .finally(() => {
//         submitBtn.disabled = false;
//       });
//   }
//   // validatedInputs();
// });

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let check = this.checkValidity();
  this.classList.add("was-validated");
  validatedInputs();
  if (check) {
    let data = {
      first_name: firstname.value,
      last_name: lastname.value,
      username: username.value,
      password: password.value,
      password2: password2.value,
    };
    submitBtn.disabled = true;
    requestRegister
      .post("auth/register", data)
      .then((res) => {
        localStorage.setItem(REGISTERTOKEN, res.data.token);
        location.href = "../login.html";
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validatedInputs = () => {
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 5) {
    setError(password, "Password must be at least 5 characters.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};
