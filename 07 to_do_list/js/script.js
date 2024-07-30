document.addEventListener("DOMContentLoaded", () => {
  const btnShowMore = document.getElementById("btnShowMore");
  const text = document.getElementById("text");

  const btnSubmit = document.getElementById("btnSubmit");
  const inputField = document.getElementById("inputField");
  const newEl = document.getElementById("newEl");

  // Show more text
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
      btn.innerHTML = "Show less";
    } else {
      text.textContent = truncatedText;
      btn.innerHTML = "Show more";
    }
  }

  btnShowMore.addEventListener("click", handleShow);
  // End show more text

  // Todo list

  function handleTask() {
    const task = inputField.value;
    //i used trim to remove whitespace in the input
    if (task.trim() !== "") {
      //NEW EL
      const listItem = document.createElement("li");
      listItem.textContent = task;

      //BUTTON DELETE
      const btnDelete = document.createElement("button");
      btnDelete.innerHTML = "X";
      btnDelete.addEventListener("click", function () {
        newEl.removeChild(listItem);
      });

      //I used appenChild to add an element dynamically to the webpage
      listItem.appendChild(btnDelete);

      newEl.appendChild(listItem);

      //field empty after every input
      inputField.value = "";
    }
  }

  btnSubmit.addEventListener("click", handleTask);
});
