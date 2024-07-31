document.addEventListener("DOMContentLoaded", () => {
  const btnShowMore = document.getElementById("btnShowMore");
  const text = document.getElementById("text");

  const inputField = document.getElementById("inputField");
  const btnSubmitInput = document.getElementById("btnSubmitInput");
  const newTask = document.getElementById("newTask");

  // SHOW MORE text
  const originalText = text.textContent;
  const truncatedText = truncate(text.textContent, 40);
  let tasks = [];

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

  function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function getFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.forEach(taskText => {
      const listItem = createElement(taskText);
      newTask.appendChild(listItem);
    });
  }

  function createElement(task) {
    //NEW EL
    const listItem = document.createElement("li");

    //CHECKBOX
    const markDone = document.createElement("input");
    markDone.type = "checkbox";
    markDone.checked = task.completed;
    markDone.addEventListener("change", function () {
      task.completed = markDone.checked;
      saveToLocalStorage();
    });

    //DELETE TASK
    const removeTask = document.createElement("button");
    removeTask.innerHTML = "X";
    removeTask.addEventListener("click", function () {
      newTask.removeChild(listItem);
      tasks = tasks.filter(t => t.text != task.text);
      saveToLocalStorage();
    });

    //APPEND
    //appendChild to add dynamically an el to the web page
    listItem.textContent = task.text;
    listItem.appendChild(markDone);
    listItem.appendChild(removeTask);

    return listItem;
  }

  function handleTask() {
    const taskText = inputField.value.trim();
    if (taskText !== "") {
      const task = { text: taskText, completed: false };
      const listItem = createElement(task);
      tasks.push(task);
      newTask.appendChild(listItem);
      saveToLocalStorage();
      inputField.value = "";
    }
  }

  getFromLocalStorage();
  btnSubmitInput.addEventListener("click", handleTask);
});
