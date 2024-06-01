document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.full-page-container');
    let currentIndex = 0;
    let isScrolling = false;

    const scrollToSection = (index) => {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });
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

    setTimeout(() => {
        gsap.to('.loader', { duration: 1, opacity: 0, onComplete: () => {
            document.getElementById("loader").style.display = "none";
        }});
    }, 2000);

    gsap.to('.loader', { duration: 2, opacity: 0, delay: 3 });
});
