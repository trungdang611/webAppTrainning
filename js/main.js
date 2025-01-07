const inputPassword = document.getElementById("password");
const passwordImg = document.getElementById("password-img");

passwordImg.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    passwordImg.src = "./assets/icons/phosphor-right-icon-eye.svg";
  } else {
    inputPassword.type = "password";
    passwordImg.src = "./assets/icons/phosphor-right-icon.svg";
  }
});
