const nav = document.getElementById("nav");
window.addEventListener("scroll", () =>
  nav.classList.toggle("stuck", scrollY > 40),
);
