document.addEventListener("DOMContentLoaded", () => {
  const btnShowMore = document.getElementById("btnShowMore");
  const text = document.getElementById("text");

  const inputField = document.getElementById("inputField");
  const btnSubmitInput = document.getElementById("btnSubmitInput");
  const newTask = document.getElementById("newTask");

  // SHOW MORE text
  const originalText = text.textContent;
  const truncatedText = truncate(text.textContent, 40);

  function truncate(str, maxLength) {
    if (str.length >= maxLength) {
      return str.slice(0, maxLength - 1) + "...";
    } else {
      return str;
    }
  }

  text.textContent = truncatedText;

  function handleShow() {
    if (text.textContent === truncatedText) {
      text.textContent = originalText;
      btnShowMore.innerHTML = "Show less";
    } else {
      text.textContent = truncatedText;
      btnShowMore.innerHTML = "Show more";
    }
  }

  btnShowMore.addEventListener("click", handleShow);

  // TODO LIST
  function handleNewTask() {
    const task = inputField.value;

    //trim to delete whitespace
    if (task.trim() !== "") {
      //NEW EL
      const listItem = document.createElement("li");
      listItem.textContent = task;
      //DELETE BTN
      const deleteTask = document.createElement("button");
      deleteTask.innerHTML = "X";

      deleteTask.addEventListener("click", function () {
        newTask.removeChild(listItem);
      });

      //appendChild to add dynamically an el to the web page
      listItem.appendChild(deleteTask);
      newTask.appendChild(listItem);

      inputField.value = "";
    }
  }

  btnSubmitInput.addEventListener("click", handleNewTask);
});
