const menuToggle = document.getElementById("menu-toggle");
const mainNavigation = document.getElementById("main-navigation");
const navigationLinks = mainNavigation.querySelectorAll("a");

function setMenuState(isOpen) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    mainNavigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenuState(false);
        menuToggle.focus();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 720) setMenuState(false);
});
