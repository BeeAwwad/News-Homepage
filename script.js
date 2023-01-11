const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
// const body = document.querySelector('body');
const mainNews = document.querySelector('.main-story');
const moreNews = document.querySelector('.more-news');
const topOne = document.querySelector('.top-1');
const topTwo = document.querySelector('.top-2');
const topThree = document.querySelector('.top-3');
const logo = document.querySelector('.logo');

navToggle.addEventListener("click", () => {
    const visibility = mainNav.getAttribute("data-visible");
    
    if (visibility === "false") {
        mainNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", "true");
        mainNews.classList.add('blur');
        moreNews.classList.add('blur');
        topOne.classList.add('blur');
        topTwo.classList.add('blur');
        topThree.classList.add('blur');
        logo.classList.add('blur');
    }
    else if (visibility === "true") {
        mainNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", false);
        mainNews.classList.remove('blur');
        moreNews.classList.remove('blur');
        topOne.classList.remove('blur');
        topTwo.classList.remove('blur');
        topThree.classList.remove('blur');
        logo.classList.remove('blur');
    }
});