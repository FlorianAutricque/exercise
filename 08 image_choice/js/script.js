document.addEventListener("DOMContentLoaded", () => {
  const btnRefresh = document.getElementById("btnRefresh");
  const btnLike = document.getElementById("btnLike");
  const btnDislike = document.getElementById("btnDislike");
  const total = document.getElementById("total");
  const totalLike = document.getElementById("totalLike");
  const totalDislike = document.getElementById("totalDislike");

  const categoryOptions = document.getElementsByName("category")[0];

  const category = categoryOptions.value;
  const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
  const API_KEY = "h393mcOzOkKkWXqLeULfyA==H0CmchWfJ9xCfOHG";

  console.log(category);

  //LOCALSTORAGE
  let sum = 0;
  let likes = 0;
  let dislikes = 0;

  function saveToLocalStorage() {
    localStorage.setItem("sum", sum);
    localStorage.setItem("likes", likes);
    localStorage.setItem("dislikes", dislikes);
  }

  function getFromLocalStorage() {
    sum = parseInt(localStorage.getItem("sum")) || 0;
    likes = parseInt(localStorage.getItem("likes")) || 0;
    dislikes = parseInt(localStorage.getItem("dislikes")) || 0;

    total.textContent = "Total: " + sum;
    totalLike.textContent = "Total likes: " + likes;
    totalDislike.textContent = "Total dislikes: " + dislikes;
  }

  //SELECT CATEGORY
  categoryOptions.addEventListener("change", () => {
    handleClickReloadPage();
  });

  //BUTTON RELOAD TO NEW IMAGE
  function handleClickReloadPage() {
    window.location.reload();
  }
  btnRefresh.addEventListener("click", handleClickReloadPage);

  // FETCH RANDOM IMAGE
  async function fetchData() {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { "X-Api-Key": API_KEY, Accept: "image/jpg" },
      });

      if (!res.ok) {
        throw new error("Something went wrong! Try again later.");
      }
      const blob = await res.blob();
      const imgURL = URL.createObjectURL(blob);
      const imgEl = document.createElement("img");
      imgEl.src = imgURL;

      document.body.appendChild(imgEl);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();

  //LIKE DISLIKE
  //TOTAL

  function handleCalculLikeDislike(x) {
    sum += x;
    total.textContent = "Total: " + sum;
    handleClickReloadPage();
    saveToLocalStorage();
  }

  btnLike.addEventListener("click", () => handleCalculLikeDislike(1));
  btnDislike.addEventListener("click", () => handleCalculLikeDislike(-1));

  //LIKE

  btnLike.addEventListener("click", () => {
    likes++;
    totalLike.textContent = "Total likes: " + likes;
    handleClickReloadPage();
    saveToLocalStorage();
  });

  //DISLIKE

  btnDislike.addEventListener("click", () => {
    dislikes++;
    totalDislike.textContent = "Total dislikes: " + dislikes;
    handleClickReloadPage();
  });

  getFromLocalStorage();
});
