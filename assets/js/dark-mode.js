// 暗色模式切换 - 基于 https://segmentfault.com/a/1190000043923189 设计
(function () {
  // 创建切换按钮（单标签设计）
  const toggleBtn = document.createElement("div");
  toggleBtn.id = "day-night-toggle";
  toggleBtn.title = "切换日/夜模式";

  // 添加到页面（固定右下角，不改变位置）
  document.body.appendChild(toggleBtn);

  // 切换函数
  function toggleDarkMode() {
    document.body.classList.toggle("page-dark-mode");
    toggleBtn.classList.toggle("active");
    const isDark = document.body.classList.contains("page-dark-mode");
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  }

  // 绑定点击事件
  toggleBtn.addEventListener("click", toggleDarkMode);

  // 加载时检查用户偏好
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("page-dark-mode");
    toggleBtn.classList.add("active");
  }
})();
