const links = document.querySelectorAll(".sb-link");
const headings = document.querySelectorAll("h2[id],h3[id]");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.remove("on"));
        const a = document.querySelector(`.sb-link[href="#${e.target.id}"]`);
        if (a) a.classList.add("on");
      }
    });
  },
  { rootMargin: "-10% 0px -75% 0px" },
);
headings.forEach((h) => obs.observe(h));
