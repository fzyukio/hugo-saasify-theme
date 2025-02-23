document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
  
    // Load saved theme and mode
    const savedTheme = localStorage.getItem("theme") || "theme-yellow";
    const savedMode = localStorage.getItem("mode") || "bright";
  
    body.classList.add(savedTheme);
    if (savedMode === "dark") body.classList.add("dark");
  
    window.setTheme = function (theme) {
      body.classList.remove("theme-red", "theme-yellow", "theme-green");
      body.classList.add(theme);
      localStorage.setItem("theme", theme);
    };
  
    document.getElementById("dark-mode-toggle").addEventListener("click", function () {
      body.classList.toggle("dark");
      localStorage.setItem("mode", body.classList.contains("dark") ? "dark" : "bright");
    });
  });