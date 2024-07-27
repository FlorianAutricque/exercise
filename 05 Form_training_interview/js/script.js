document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const returnBtn = document.getElementById("returnBtn");
  const mainContainer = document.getElementById("mainContainer");
  const successContainer = document.getElementById("successContainer");
  const email = document.getElementById("email");
  const inputs = document.querySelectorAll("input");
  const textarea = document.querySelector("textarea");
  const phone = document.getElementById("phone");

  const errorMessage = document.getElementById("errorMessage");
  const errorMessageEmail = document.getElementById("errorMessageEmail");
  const errorMessageTextarea = document.getElementById("errorMessageTextarea");
  const errorMessagePhone = document.getElementById("errorMessagePhone");

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const regexPhone = /^\d+$/;

  function handleSubmit(e) {
    e.preventDefault();

    let fields = true;
    inputs.forEach(input => {
      if (input.value === "") {
        fields = false;
      }
    });

    if (!fields) {
      errorMessage.style.display = "block";
      return false;
    }

    if (!regexEmail.test(email.value)) {
      errorMessageEmail.style.display = "block";
      return false;
    }

    if (!regexPhone.test(phone.value)) {
      errorMessagePhone.style.display = "block";
      return false;
    }

    if (textarea.value.length <= 10) {
      errorMessageTextarea.style.display = "block";
      return false;
    }

    mainContainer.style.display = "none";
    successContainer.style.display = "block";
  }

  submitBtn.addEventListener("click", handleSubmit);

  function handleReturn(e) {
    e.preventDefault();
    mainContainer.style.display = "block";
    successContainer.style.display = "none";
    errorMessage.style.display = "none";
    errorMessageEmail.style.display = "none";
    errorMessageTextarea.style.display = "none";
    errorMessagePhone.style.display = "none";
    inputs.forEach(input => (input.value = ""));
    textarea.value = "";
  }

  returnBtn.addEventListener("click", handleReturn);
});
