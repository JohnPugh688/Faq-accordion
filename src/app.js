document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((details) => {
    details.addEventListener("toggle", () => {
      const summary = details.querySelector("summary");
      const plusIcon = summary.querySelector(".icon.plus");
      const minusIcon = summary.querySelector(".icon.minus");

      if (details.open) {
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
      } else {
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
      }
    });
  });
});
