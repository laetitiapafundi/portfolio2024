document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.full-page-container');
    let currentIndex = 0;
    let isScrolling = false;

    const scrollToSection = (index) => {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => { isScrolling = false; }, 1000);
    };

    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;
        if (event.deltaY > 0) {
            if (currentIndex < sections.length - 1) {
                currentIndex++;
                scrollToSection(currentIndex);
            }
        } else {
            if (currentIndex > 0) {
                currentIndex--;
                scrollToSection(currentIndex);
            }
        }
    });

    setTimeout(() => {
        gsap.to('.loader', { duration: 1, opacity: 0, onComplete: () => {
            document.getElementById("loader").style.display = "none";

            gsap.fromTo('.tada-first', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' });
            gsap.fromTo('.tada-second', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 });
        }});
    }, 1200);

    const lottieArrow = document.getElementById('lottie-arrow');
    lottie.loadAnimation({
        container: lottieArrow,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './assets/lottie/laetitia-pafundi-animation.json'
    });
});
