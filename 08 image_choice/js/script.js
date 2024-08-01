document.addEventListener("DOMContentLoaded", () => {
  const category = "nature";
  const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
  const API_KEY = "h393mcOzOkKkWXqLeULfyA==H0CmchWfJ9xCfOHG";

  const btnRefresh = document.getElementById("btnRefresh");

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
});
