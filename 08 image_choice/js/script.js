document.addEventListener("DOMContentLoaded", () => {
  const btnRefresh = document.getElementById("btnRefresh");
  const btnLike = document.getElementById("btnLike");
  const btnDislike = document.getElementById("btnDislike");
  const total = document.getElementById("total");
  const totalLike = document.getElementById("totalLike");
  const totalDislike = document.getElementById("totalDislike");

  const containerImageLike = document.getElementById("containerImageLike");
  const btnCloseModalLike = document.getElementById("btnCloseModalLike");
  const containerLikeDislike = document.getElementById("containerLikeDislike");
  const containerCategory = document.getElementById("containerCategory");

  const categoryOptions = document.getElementsByName("category")[0];

  let category = categoryOptions.value;
  const API_KEY = "h393mcOzOkKkWXqLeULfyA==H0CmchWfJ9xCfOHG";

  // LOCALSTORAGE
  let sum = 0;
  let likes = 0;
  let dislikes = 0;

  function saveToLocalStorage() {
    localStorage.setItem("sum", sum);
    localStorage.setItem("likes", likes);
    localStorage.setItem("dislikes", dislikes);
    localStorage.setItem("category", category);
  }

  function getFromLocalStorage() {
    sum = parseInt(localStorage.getItem("sum")) || 0;
    likes = parseInt(localStorage.getItem("likes")) || 0;
    dislikes = parseInt(localStorage.getItem("dislikes")) || 0;
    const storedCategory = localStorage.getItem("category");

    if (storedCategory) {
      categoryOptions.value = storedCategory;
      category = storedCategory;
    }

    total.textContent = "TOTAL: " + sum;
    totalLike.textContent = "Total likes: " + likes;
    totalDislike.textContent = "Total dislikes: " + dislikes;
  }

  // SELECT CATEGORY
  categoryOptions.addEventListener("change", () => {
    category = categoryOptions.value;
    handleClickReloadPage();
  });

  // BUTTON RELOAD FOR NEW IMAGE
  function handleClickReloadPage() {
    saveToLocalStorage();
    // window.location.reload();
    fetchData();
  }
  btnRefresh.addEventListener("click", handleClickReloadPage);

  // FETCH RANDOM IMAGE
  let defaultImgEl;

  async function fetchData() {
    try {
      const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
      if (!defaultImgEl) {
        defaultImgEl = document.createElement("img");
        defaultImgEl.classList.add("image__blob");
        defaultImgEl.id = "imageBlob";
        document.body.appendChild(defaultImgEl);
      }
      defaultImgEl.src = "img/waiting.gif";

      const res = await fetch(url, {
        method: "GET",
        headers: { "X-Api-Key": API_KEY, Accept: "image/jpg" },
      });

      if (!res.ok) {
        throw new error("Something went wrong! Try again later.");
      }
      const blob = await res.blob();
      const imgURL = URL.createObjectURL(blob);

      defaultImgEl.src = imgURL;

      // imageBlob.appendChild(defaultImgEl);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();

  // LIKE DISLIKE
  function handleCalculLikeDislike(x, choice) {
    sum += x;
    total.textContent = "TOTAL: " + sum;
    if (choice === "like") {
      likes++;
      totalLike.textContent = "Total likes: " + likes;
      if (likes === 6) {
        modalLike();
        return;
      }
    } else if (choice === "dislike") {
      dislikes++;
      totalDislike.textContent = "Total dislikes: " + dislikes;
    }
    // handleClickReloadPage();
    fetchData();
    saveToLocalStorage();
  }

  btnLike.addEventListener("click", () => handleCalculLikeDislike(1, "like"));
  btnDislike.addEventListener("click", () =>
    handleCalculLikeDislike(-1, "dislike")
  );

  // LIKE GIF
  function modalLike() {
    if (defaultImgEl) {
      defaultImgEl.style.display = "none";
      containerLikeDislike.style.display = "none";
      btnRefresh.style.display = "none";
      containerCategory.style.display = "none";
      total.style.display = "none";
      totalLike.style.display = "none";
      totalDislike.style.display = "none";
    }
    containerImageLike.style.display = "block";
  }

  // CLOSE MODAL LIKE
  function closeModalLike() {
    containerImageLike.style.display = "none";
    defaultImgEl.style.display = "block";
    containerLikeDislike.style.display = "flex";
    btnRefresh.style.display = "block";
    containerCategory.style.display = "flex";
    total.style.display = "block";
    totalLike.style.display = "block";
    totalDislike.style.display = "block";
  }

  btnCloseModalLike.addEventListener("click", closeModalLike);

  getFromLocalStorage();
});
