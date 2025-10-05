document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optionally, unobserve the element after it has been animated
                // observer.unobserve(entry.target);
            } else {
                // Optionally, remove the class when it scrolls out of view
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Observe all elements with the 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Parallax effect for cards
    const parallaxCards = document.querySelectorAll('.parallax-card');
    const cardParallaxSpeed = 0.2; // Adjust for desired parallax strength

    window.addEventListener('scroll', () => {
        parallaxCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate how much the card is in the viewport
            // A value between -1 (top of viewport) and 1 (bottom of viewport)
            const scrollRatio = (viewportHeight - rect.top) / (viewportHeight + rect.height);

            // Apply transform based on scroll ratio
            if (scrollRatio > 0 && scrollRatio < 1) {
                const translateY = (scrollRatio - 0.5) * cardParallaxSpeed * 200; // Adjust multiplier for effect strength
                card.style.transform = `translateY(${translateY}px)`;
            }
        });
    });
});
