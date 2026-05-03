// 暗色模式切换 - 导航栏炫酷按钮版
(function () {
  const toggleBtn = document.getElementById("change-skin");
  if (!toggleBtn) return;

  function toggleDarkMode() {
    document.body.classList.toggle("page-dark-mode");
    toggleBtn.classList.toggle("active");
    const isDark = document.body.classList.contains("page-dark-mode");
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  }

  toggleBtn.addEventListener("click", toggleDarkMode);

  // 加载时检查用户偏好
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("page-dark-mode");
    toggleBtn.classList.add("active");
  }
})();
