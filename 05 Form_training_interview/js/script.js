document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const returnBtn = document.getElementById("returnBtn");
  const mainContainer = document.getElementById("mainContainer");
  const successContainer = document.getElementById("successContainer");
  const input = document.getElementById("input");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.value == "") {
      alert("error");
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
  }
  returnBtn.addEventListener("click", handleReturn);
});
