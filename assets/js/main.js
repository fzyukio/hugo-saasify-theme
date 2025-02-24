document.addEventListener("DOMContentLoaded", function () {
  const colorPicker = document.getElementById("color-picker");
  const colorMenu = document.getElementById("color-menu");

  // Default theme
  let currentTheme = localStorage.getItem("theme") || "theme-default";
  setTheme(currentTheme);

  function setTheme(theme) {
    document.body.classList.forEach((cls) => {
      if (cls.startsWith("theme-")) document.body.classList.remove(cls);
    });
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);

    const themeColors = {
      "theme-default": "#FF7F2A",
      "theme-green": "#00a76f",
      "theme-cyan": "#078DEE",
      "theme-purple": "#7635DC",
      "theme-blue": "#2065D1",
      "theme-orange": "#FDA92D",
      "theme-red": "#FF3030",
    };
    
    colorPicker.style.backgroundColor = themeColors[theme];
  }

  window.setTheme = setTheme

  // Toggle color menu
  colorPicker.addEventListener("click", function () {
    colorMenu.classList.toggle("hidden");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!colorPicker.contains(event.target) && !colorMenu.contains(event.target)) {
      colorMenu.classList.add("hidden");
    }
  });

  document.querySelector(".switch > input").addEventListener("click",
    function (event) {
      document.body.classList.toggle("dark");
      localStorage.setItem("dark-mode", document.body.classList.contains("dark") ? "enabled" : "disabled");
    }
  );
  // Load dark mode preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark");
  }
});

