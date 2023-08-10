const submitButton = document.getElementById("submitButton");
const errorSpan = document.querySelector("span.error-message");
console.log(errorSpan);
submitButton.onclick = (event) => onHandleSubmit(event);

function validatePassword(password, password2) {
  if (password === password2) {
    return true;
  }
  return false;
}

function onHandleSubmit(event) {
  const passwordInput = document.getElementById("password");
  const passwordInput2 = document.getElementById("password2");

  console.log(passwordInput);
  console.log(event);
  const result = validatePassword(passwordInput.value, passwordInput2.value);
  if (result === false) {
    event.preventDefault();
    errorSpan.textContent = "* Password do not match";
    passwordInput.value = "";
    passwordInput2.value = "";
    // passwordInput.setCustomValidity("Password missmatch");
  }
}
