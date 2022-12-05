const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () => {
    const visibility = mainNav.getAttribute("data-visible");
    
    if (visibility === "false") {
        mainNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", "true");
    }
    else if (visibility === "true") {
        mainNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", false);
    }
});