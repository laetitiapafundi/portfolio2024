document.addEventListener('DOMContentLoaded', () => {
    const tadaFirst = document.querySelector('.tada-first');
    const tadaFirstRect = tadaFirst.getBoundingClientRect();
    const initialX = tadaFirstRect.left + tadaFirstRect.width / 2;
    const initialY = tadaFirstRect.top + tadaFirstRect.height / 2;
    const tadaSecond = document.querySelector('.tada-second');

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const offsetX = mouseX - initialX;
        const offsetY = mouseY - initialY;

        tadaFirst.style.transform = `translate(${offsetX / 10}px, ${offsetY / 10}px)`;
        // tadaSecond.style.transform = `translate(${-offsetX / 10}px, ${-offsetY / 10}px)`;
    });

    const sections = document.querySelectorAll('.full-page-container');
    let currentIndex = 0;
    let isScrolling = false;

    const scrollToSection = (index) => {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => { isScrolling = false; }, 1200);
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
            gsap.fromTo('.tada-second', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1 });        
        }});
    }, 900);

    const lottieArrow = document.getElementById('lottie-arrow');
    lottie.loadAnimation({
        container: lottieArrow,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './assets/lottie/laetitia-pafundi-animation.json'
    });
});
