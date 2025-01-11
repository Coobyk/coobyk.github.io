// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.querySelector(".themetoggle");
  const themeToggleIcon = themeToggleButton.querySelector("i");
  const themeToggleText = themeToggleButton.querySelector("b");

  // Load and apply the saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Update button text and icon based on the current theme
  updateButton(savedTheme);

  themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Apply the new theme
    document.documentElement.setAttribute("data-theme", newTheme);

    // Save the new theme in localStorage
    localStorage.setItem("theme", newTheme);

    // Update button text and icon
    updateButton(newTheme);
  });

  function updateButton(theme) {
    if (theme === "dark") {
      themeToggleIcon.textContent = "dark_mode";
      themeToggleText.textContent = "Dark Mode";
    } else {
      themeToggleIcon.textContent = "light_mode";
      themeToggleText.textContent = "Light Mode";
    }
  }
});
