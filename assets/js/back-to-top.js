// 回到顶部按钮
const backToTopBtn = document.createElement("button");
backToTopBtn.className = "back-to-top-btn";
backToTopBtn.setAttribute("aria-label", "回到顶部");
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});
