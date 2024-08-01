document.addEventListener("DOMContentLoaded", () => {
  const category = "nature";
  const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
  const API_KEY = "h393mcOzOkKkWXqLeULfyA==H0CmchWfJ9xCfOHG";

  const btnRefresh = document.getElementById("btnRefresh");
  const btnLike = document.getElementById("btnLike");
  const btnDislike = document.getElementById("btnDislike");
  const total = document.getElementById("total");
  const totalLike = document.getElementById("totalLike");
  const totalDislike = document.getElementById("totalDislike");

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
  let sum = 0;

  function handleCalculLikeDislike(x) {
    sum += x;
    total.textContent = "Total: " + sum;
  }
  btnLike.addEventListener("click", () => handleCalculLikeDislike(1));
  btnDislike.addEventListener("click", () => handleCalculLikeDislike(-1));

  //LIKE
  let like = 0;
  btnLike.addEventListener("click", () => {
    like++;
    totalLike.textContent = "Total like: " + like;
  });

  //DISLIKE
  let dislike = 0;
  btnDislike.addEventListener("click", () => {
    dislike--;
    totalDislike.textContent = "Total dislike: " + dislike;
  });
});
