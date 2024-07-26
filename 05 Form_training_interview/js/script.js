document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const text = document.getElementById("test");

  const handleClick = () => {
    // text.style.color = "blue";
    text.classList.toggle("test");
  };

  const x = () => {
    btn.addEventListener("click", handleClick);
  };

  x();
});
