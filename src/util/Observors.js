/**
 * Fade in observor used by several components 
 */
const fadeInOptions = {
    threshold: .5,
};
 
const fadeInObservor = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            fadeInObservor.unobserve(entry.target);
        }
    });
}, fadeInOptions);

export const setupFadeInObservor = (target) => {
    fadeInObservor.observe(target);
}

/**
 * Observor used to fade header when viewing ImageViewerCarousel in
 * About Me section.
 */
const headerObserverOptions = {
    threshold: 1,
};

const headerObservor = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const header = document.getElementById("navbar");
        if (entry.isIntersecting) {
            header.classList.add("opacity-header");
        } else {
            header.classList.remove("opacity-header");
        }
    });
}, headerObserverOptions);

export const setupHeaderObserver = (target) => {
    headerObservor.observe(target.element);
}