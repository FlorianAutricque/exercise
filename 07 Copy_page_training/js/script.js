document.addEventListener("DOMContentLoaded", () => {
  const btnShowMore = document.getElementById("btnShowMore");
  const text = document.getElementById("text");

  const originalText = text.textContent;
  const truncatedText = truncate(originalText, 40);

  function truncate(str, maxLength) {
    if (str.length >= maxLength) {
      return str.slice(0, maxLength - 1) + "...";
    } else {
      return str;
    }
  }

  text.textContent = truncatedText;

  function handleShowMoreText() {
    if (text.textContent === truncatedText) {
      text.textContent = originalText;
      btnShowMore.textContent = "Show less";
    } else {
      text.textContent = truncatedText;
      btnShowMore.textContent = "Show more";
    }
  }

  btnShowMore.addEventListener("click", handleShowMoreText);
});
