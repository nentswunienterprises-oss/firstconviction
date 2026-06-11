const navLinks = document.querySelectorAll(".site-nav a");
const currentPage = document.body.dataset.page;

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) {
    return;
  }

  if (
    (currentPage === "home" && href === "index.html") ||
    href === `${currentPage}.html`
  ) {
    link.setAttribute("aria-current", "page");
  }
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
