window.onload = function () {
  console.log("loaded");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const darkBtn = document.getElementById("theme-toggle-dark-icon");
  const lightBtn = document.getElementById("theme-toggle-light-icon");

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    lightBtn.classList.remove("hidden");
  } else {
    darkBtn.classList.remove("hidden");
  }

  themeToggleBtn.addEventListener("click", () => {
    darkBtn.classList.toggle("hidden");
    lightBtn.classList.toggle("hidden");

    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
};
