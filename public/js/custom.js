document.addEventListener("DOMContentLoaded", function() {
  const worksBtn = document.querySelector(".works-button");
  if (worksBtn) {
    worksBtn.addEventListener("click", () => {
      window.location.href = worksBtn.getAttribute("href");
    });
  }
});

