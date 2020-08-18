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