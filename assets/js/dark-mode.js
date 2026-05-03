// 暗色模式切换 - 导航栏炫酷按钮版
// 按钮样式直接响应 .page-dark-mode，无需 .active 类
// 初始状态由 head.html + nav.html 内联脚本处理
(function () {
  const toggleBtn = document.getElementById("change-skin");
  if (!toggleBtn) return;
  const root = document.documentElement;

  function toggleDarkMode() {
    root.classList.toggle("page-dark-mode");
    const isDark = root.classList.contains("page-dark-mode");
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  }

  toggleBtn.addEventListener("click", toggleDarkMode);
})();
