export function formatDate(date) {
  const utcDate = new Date(date);

  const formattedDate = utcDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}

export function htmlToPlainText(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || "";
}
