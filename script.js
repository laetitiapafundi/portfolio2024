document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.full-page-container');
    let currentIndex = 0;
    let isScrolling = false;

    const scrollToSection = (index) => {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => { isScrolling = false; }, 1000); // Delay to prevent excessive scrolling
    };

    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;
        if (event.deltaY > 0) {
            // Scrolling down
            if (currentIndex < sections.length - 1) {
                currentIndex++;
                scrollToSection(currentIndex);
            }
        } else {
            // Scrolling up
            if (currentIndex > 0) {
                currentIndex--;
                scrollToSection(currentIndex);
            }
        }
    });

    // Dissolution de l'opacité du loader
    setTimeout(() => {
        gsap.to('.loader', { duration: 1, opacity: 0, onComplete: () => {
            document.getElementById("loader").style.display = "none"; // hide loader after fading out
        }});
    }, 3000); // 3000 milliseconds = 3 seconds

    // Initialiser l'animation Lottie
    const lottieArrow = document.getElementById('lottie-arrow');
    lottie.loadAnimation({
        container: lottieArrow,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './assets/lottie/laetitia-pafundi-animation.json'
    });
});
