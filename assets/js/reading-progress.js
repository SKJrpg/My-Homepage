// 阅读进度指示器
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.createElement("div");
  progressBar.style.cssText =
    "position:fixed;top:0;left:0;height:3px;background:#0085A1;z-index:9999;width:0%;";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", function () {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / (docHeight - winHeight)) * 100;
    progressBar.style.width = progress + "%";
  });
});
