document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnShowMore");
  const text = document.getElementById("text");

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

  btn.addEventListener("click", handleShow);
});
