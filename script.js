// Markerar den menylänk som hör till sektionen man senast klickat till.
// Sidan fungerar även utan det här skriptet.
const links = document.querySelectorAll(".site-nav__links a");

function markCurrent() {
  const hash = location.hash || "#hem";
  links.forEach((link) => {
    if (link.getAttribute("href") === hash) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

window.addEventListener("hashchange", markCurrent);
markCurrent();

// Menyn blir högre när länkarna radbryts på smala skärmar, så mät den i stället för att gissa.
const nav = document.querySelector(".site-nav");

new ResizeObserver(() => {
  document.documentElement.style.setProperty("--nav-height", `${nav.offsetHeight}px`);
}).observe(nav);
