document.addEventListener("DOMContentLoaded", () => {
  //FORM
  const btn_submit = document.getElementById("btn");
  const btn_reset = document.getElementById("btn_reset");
  const input_name = document.getElementById("input_name");
  const input_surname = document.getElementById("input_surname");
  const input_email = document.getElementById("input_email");

  //DATA
  const data_container = document.getElementById("container_data");
  const data_name = document.getElementById("data_name");
  const data_surname = document.getElementById("data_surname");
  const data_email = document.getElementById("data_email");

  // SUBMISSION FORM
  const handleClick = e => {
    e.preventDefault();
    if (input_name.value.length < 6) {
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error");
      errorMessage.textContent = "Please add a name longer than 6 characters";

      document.body.insertBefore(errorMessage, data_container);
      return;
    }

    data_container.style.display = "block";
    data_name.textContent = "Name:" + " " + input_name.value;
    data_surname.textContent = "Surname:" + " " + input_surname.value;
    data_email.textContent = "Email:" + " " + input_email.value;
  };

  btn_submit.addEventListener("click", handleClick);

  // RESET FORM
  const handleReset = e => {
    e.preventDefault();

    input_name.value = "";
    input_surname.value = "";
    input_email.value = "";

    data_name.textContent = "Name:";
    data_surname.textContent = "Surname:";
    data_email.textContent = "Email:";

    data_container.style.display = "none";
  };

  btn_reset.addEventListener("click", handleReset);
});
