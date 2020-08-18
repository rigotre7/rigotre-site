/**
 * Experience Row
 */
const experienceRowOptions = {
    threshold: .5,
};

export const experienceRowObservor = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            experienceRowObservor.unobserve(entry.target);
        }
    });
}, experienceRowOptions);
