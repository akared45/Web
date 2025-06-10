const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        observer.observe(element);
        const animationType = element.getAttribute('data-animate');
        if (animationType.includes('up')) {
            element.style.transform = 'translateY(50px)';
        } else if (animationType.includes('down')) {
            element.style.transform = 'translateY(-50px)';
        } else if (animationType.includes('left')) {
            element.style.transform = 'translateX(-50px)';
        } else if (animationType.includes('right')) {
            element.style.transform = 'translateX(50px)';
        } else {
            element.style.transform = 'translateY(0)';
        }
    });
};

const animateHeroText = () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroBtn = document.querySelector('.hero .btn');
    
    setTimeout(() => {
        heroTitle.classList.add('fade-in-up');
    }, 500);
    
    setTimeout(() => {
        heroSubtitle.classList.add('fade-in-up');
    }, 800);
    
    setTimeout(() => {
        heroBtn.classList.add('fade-in-up');
    }, 1100);
};

const animateSectionHeaders = () => {
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.section-title').classList.add('fade-in-down');
                    entry.target.querySelector('.section-subtitle').classList.add('fade-in-up', 'delay-1');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(header);
    });
};

const animateTourCards = () => {
    const tourCards = document.querySelectorAll('.tour-card');
    
    tourCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
};

const animateGalleryItems = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    animateHeroText();
    animateSectionHeaders();
    animateTourCards();
    animateGalleryItems();
});