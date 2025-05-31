document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.textContent = "🌓";
  toggle.classList.add("toggle-dark-mode");
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
