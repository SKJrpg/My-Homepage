// 暗色模式切换
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙";
darkModeToggle.style.cssText =
  "position:fixed;bottom:20px;right:20px;z-index:1000;";

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode"),
  );
});

document.body.appendChild(darkModeToggle);

// 加载时检查用户偏好
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}
