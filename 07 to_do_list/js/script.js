document.addEventListener("DOMContentLoaded", () => {
  const btnShowMore = document.getElementById("btnShowMore");
  const text = document.getElementById("text");

  const inputField = document.getElementById("inputField");
  const btnSubmitInput = document.getElementById("btnSubmitInput");
  const newTask = document.getElementById("newTask");

  // SHOW MORE text
  const originalText = text.innerHTML;
  const truncatedText = truncate(text.innerHTML, 40);
  let tasks = [];

  function truncate(str, maxLength) {
    if (str.length >= maxLength) {
      return str.slice(0, maxLength - 1) + "...";
    } else {
      return str;
    }
  }

  text.innerHTML = truncatedText;

  function handleShow() {
    if (text.innerHTML === truncatedText) {
      text.innerHTML = originalText;
      btnShowMore.innerHTML = "Show less";
    } else {
      text.innerHTML = truncatedText;
      btnShowMore.innerHTML = "Show more";
    }
  }

  btnShowMore.addEventListener("click", handleShow);

  // TODO LIST

  //LOCALSTORAGE
  function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function getFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.forEach(task => {
      const listItem = createElement(task);
      newTask.appendChild(listItem);
    });
  }

  function createElement(task) {
    //NEW EL
    const listItem = document.createElement("li");
    if (task.priority) {
      listItem.classList.add(task.priority);
    }

    const containerDivCheckboxDelete = document.createElement("div");
    containerDivCheckboxDelete.classList.add("container__checkbox-delete");

    const arrowPriority = document.createElement("button");
    arrowPriority.innerHTML = "v";

    const containerArrowPriority = document.createElement("div");
    containerArrowPriority.classList.add("container__arrowPriority");

    //PRIORITY LEVEL CREATION EL
    const containerPriority = document.createElement("div");
    containerPriority.classList.add("container__priority");
    containerPriority.style.display = "none";

    const btnRed = document.createElement("button");
    btnRed.classList.add(
      "btn__priorityLevel--red--clicked",
      "btn__priorityLevel--red",
      "btn__priorityLevel"
    );
    const btnOrange = document.createElement("button");
    btnOrange.classList.add(
      "btn__priorityLevel--orange--clicked",
      "btn__priorityLevel--orange",
      "btn__priorityLevel"
    );
    const btnYellow = document.createElement("button");
    btnYellow.classList.add(
      "btn__priorityLevel--yellow--clicked",
      "btn__priorityLevel--yellow",
      "btn__priorityLevel"
    );
    const btnGreen = document.createElement("button");
    btnGreen.classList.add(
      "btn__priorityLevel--green--clicked",
      "btn__priorityLevel--green",
      "btn__priorityLevel"
    );

    containerPriority.appendChild(btnRed);
    containerPriority.appendChild(btnOrange);
    containerPriority.appendChild(btnYellow);
    containerPriority.appendChild(btnGreen);

    containerArrowPriority.appendChild(arrowPriority);
    containerArrowPriority.appendChild(containerPriority);

    //CHECKBOX
    const markDone = document.createElement("input");
    markDone.classList.add("checkbox__markDone");
    markDone.type = "checkbox";
    markDone.checked = task.completed;
    markDone.addEventListener("change", function () {
      task.completed = markDone.checked;
      saveToLocalStorage();
    });

    //DELETE TASK
    const removeTask = document.createElement("button");
    removeTask.innerHTML = "x";
    removeTask.addEventListener("click", function () {
      newTask.removeChild(listItem);
      tasks = tasks.filter(t => t.text != task.text);
      saveToLocalStorage();
    });

    //PRIORITY LEVEL
    function handleShowPriority() {
      if (arrowPriority.innerHTML === "v") {
        arrowPriority.innerHTML = ">";
        containerPriority.style.display = "block";
      } else {
        arrowPriority.innerHTML = "v";
        containerPriority.style.display = "none";
      }
    }
    arrowPriority.addEventListener("click", handleShowPriority);

    //ADD PRIORITY

    function updatePriority(button) {
      const priorityClass = button.classList[0];
      console.log("Updating priority to:", priorityClass);
      listItem.className = "";
      listItem.classList.add(priorityClass);
      task.priority = priorityClass;

      handleShowPriority();
      saveToLocalStorage();
    }

    // Event listeners for priority buttons
    btnRed.addEventListener("click", () => updatePriority(btnRed));
    btnOrange.addEventListener("click", () => updatePriority(btnOrange));
    btnYellow.addEventListener("click", () => updatePriority(btnYellow));
    btnGreen.addEventListener("click", () => updatePriority(btnGreen));

    //APPEND
    //appendChild to add dynamically an el to the web page
    listItem.textContent = task.text;

    containerDivCheckboxDelete.appendChild(markDone);
    containerDivCheckboxDelete.appendChild(removeTask);
    containerDivCheckboxDelete.appendChild(containerArrowPriority);

    //Append the container div
    listItem.appendChild(containerDivCheckboxDelete);

    return listItem;
  }

  function handleTask() {
    const taskText = inputField.value.trim();
    if (taskText !== "") {
      const task = { text: taskText, completed: false, priority: "" };
      const listItem = createElement(task);
      tasks.push(task);
      newTask.appendChild(listItem);
      saveToLocalStorage();
      inputField.value = "";
    }
  }

  getFromLocalStorage();
  btnSubmitInput.addEventListener("click", handleTask);

  //PRIORITY LEVEL
});
