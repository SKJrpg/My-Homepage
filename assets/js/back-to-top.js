// 回到顶部按钮
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "↑";
backToTopBtn.style.cssText =
  "position:fixed;bottom:60px;right:20px;display:none;z-index:1000;";

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
