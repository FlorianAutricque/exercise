function FormatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateStr));
}

export default FormatDay;
