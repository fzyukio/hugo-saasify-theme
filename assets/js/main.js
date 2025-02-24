document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();
  initializeDarkMode();
  initializeColorPicker();
});

// State variables
let currentTheme = localStorage.getItem("theme") || "theme-default";
let isDarkMode = localStorage.getItem("dark-mode") === "enabled";

// Theme colors mapping
const themeColors = {
  "theme-default": "#FF7F2A",
  "theme-green": "#00a76f",
  "theme-cyan": "#078DEE",
  "theme-purple": "#7635DC",
  "theme-blue": "#2065D1",
  "theme-orange": "#FDA92D",
  "theme-red": "#FF3030",
};

// Initializes theme on page load
function initializeTheme() {
  setTheme(currentTheme);
  applyColorAndMode();
}

// Initializes dark mode settings and toggle
function initializeDarkMode() {
  const darkModeToggle = document.querySelector(".switch > input");

  // Set initial state based on localStorage
  if (isDarkMode) {
    document.body.classList.add("dark");
    darkModeToggle.checked = true; // Ensure switch reflects dark mode
  } else {
    darkModeToggle.checked = false;
  }

  // Add event listener to toggle dark mode
  darkModeToggle.addEventListener("change", function () {
    isDarkMode = darkModeToggle.checked;
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
    applyColorAndMode();
  });
}


// Initializes color picker menu
function initializeColorPicker() {
  const colorPicker = document.getElementById("color-picker");
  const colorMenu = document.getElementById("color-menu");

  colorPicker.addEventListener("click", function () {
    colorMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (!colorPicker.contains(event.target) && !colorMenu.contains(event.target)) {
      colorMenu.classList.add("hidden");
    }
  });
}

// Sets the current theme
function setTheme(theme) {
  document.body.classList.forEach((cls) => {
    if (cls.startsWith("theme-")) document.body.classList.remove(cls);
  });

  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
  currentTheme = theme;

  // Update color picker UI
  const colorPicker = document.getElementById("color-picker");
  if (colorPicker) {
    colorPicker.style.backgroundColor = themeColors[theme];
  }

  applyColorAndMode();
}

// Updates all elements that are color and mode responsive
function applyColorAndMode() {
  // Get mode directly from localStorage instead of checking body class
  const mode = localStorage.getItem("dark-mode") === "enabled" ? "dark" : "bright";

  document.querySelectorAll(".color-and-mode-responsive").forEach((element) => {
    const dataStyleTemplate = element.getAttribute("data-style");
    if (dataStyleTemplate) {
      const updatedStyle = dataStyleTemplate
        .replace("{colorTheme}", currentTheme.replace("theme-", ""))
        .replace("{mode}", mode);
      element.setAttribute("style", updatedStyle);
    }
  });
}


// Expose `setTheme` function globally
window.setTheme = setTheme;
