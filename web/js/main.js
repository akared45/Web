const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = menuToggle.querySelector('i');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.querySelector('.back-to-top');
const preloader = document.querySelector('.preloader');
const heroScroll = document.querySelector('.hero-scroll');
const toursGrid = document.querySelector('.tours-grid');
const galleryGrid = document.querySelector('.gallery-grid');
const reviewsSlider = document.querySelector('.reviews-slider');
const prevReview = document.querySelector('.prev-review');
const nextReview = document.querySelector('.next-review');
const tourModal = document.getElementById('tourModal');
const closeModal = document.querySelector('.close-modal');
const modalTourImage = document.getElementById('modalTourImage');
const modalTourTitle = document.getElementById('modalTourTitle');
const modalTourDuration = document.getElementById('modalTourDuration');
const modalTourGroupSize = document.getElementById('modalTourGroupSize');
const modalTourPrice = document.getElementById('modalTourPrice');
const modalTourDescription = document.getElementById('modalTourDescription');
const tourTimeline = document.getElementById('tourTimeline');

const tours = [
    {
        id: 1,
        title: 'Châu Âu Sang Trọng',
        image: 'images/tour-1.webp',
        duration: '10 ngày',
        groupSize: '15 người',
        price: '50,000,000 VND',
        description: 'Khám phá những thành phố đẹp nhất châu Âu với dịch vụ cao cấp và tiện nghi sang trọng.',
          itinerary: [
            {
                day: 'Ngày 1',
                title: 'Hà Nội - Paris',
                description: 'Khởi hành từ Hà Nội, đáp chuyến bay thẳng tới Paris. Nhận phòng khách sạn 5 sao và nghỉ ngơi.'
            },
            {
                day: 'Ngày 2',
                title: 'Tham quan Paris',
                description: 'Tham quan tháp Eiffel, bảo tàng Louvre, đại lộ Champs-Élysées. Tối thưởng thức ẩm thực Pháp tại nhà hàng Michelin.'
            },
             {
                day: 'Ngày 3',
                title: 'Hà Nội - Paris',
                description: 'Khởi hành từ Hà Nội, đáp chuyến bay thẳng tới Paris. Nhận phòng khách sạn 5 sao và nghỉ ngơi.'
            },
            {
                day: 'Ngày 4',
                title: 'Tham quan Paris',
                description: 'Tham quan tháp Eiffel, bảo tàng Louvre, đại lộ Champs-Élysées. Tối thưởng thức ẩm thực Pháp tại nhà hàng Michelin.'
            },
        ]
    },
    {
        id: 2,
        title: 'Đông Nam Á Nhiệt Đới',
        image: 'images/tour-1.webp',
        duration: '7 ngày',
        groupSize: '12 người',
        price: '25,000,000 VND',
        description: 'Trải nghiệm vẻ đẹp nhiệt đới của các quốc gia Đông Nam Á với resort 5 sao.'
    },
    {
        id: 3,
        title: 'Bắc Mỹ Hiện Đại',
        image: 'images/tour-1.webp',
        duration: '12 ngày',
        groupSize: '10 người',
        price: '65,000,000 VND',
        description: 'Khám phá những thành phố hiện đại bậc nhất thế giới tại Bắc Mỹ.'
    },
    {
        id: 4,
        title: 'Nam Mỹ Hoang Dã',
        image: 'images/tour-1.webp',
        duration: '14 ngày',
        groupSize: '8 người',
        price: '70,000,000 VND',
        description: 'Hành trình khám phá thiên nhiên hoang dã và những kỳ quan tại Nam Mỹ.'
    }
];

const gallery = [
    'images/tour-1.webp',
    'images/tour-1.webp', ,
    'images/tour-1.webp',
    'images/tour-1.webp',
    'images/tour-1.webp',
    'images/tour-1.webp',
    'images/tour-1.webp',
    'images/tour-1.webp',
];

const reviews = [
    {
        id: 1,
        avatar: 'images/avatar-1.avif',
        text: 'Chuyến đi tuyệt vời nhất trong đời tôi! Dịch vụ 5 sao từ A đến Z. Cảm ơn LuxuryTravel đã mang đến trải nghiệm không thể nào quên.',
        author: 'Nguyễn Văn A',
        rating: '★★★★★'
    },
    {
        id: 2,
        avatar: 'images/avatar-1.avif',
        text: 'Tôi đã đi nhiều tour nhưng đây là lần đầu tiên tôi thực sự hài lòng. Hướng dẫn viên chuyên nghiệp, lịch trình hợp lý, khách sạn tuyệt vời.',
        author: 'Trần Thị B',
        rating: '★★★★★'
    },
    {
        id: 3,
        avatar: 'images/avatar-1.avif',
        text: 'Mọi thứ đều hoàn hảo từ khâu đặt tour cho đến khi kết thúc chuyến đi. Tôi sẽ giới thiệu LuxuryTravel cho bạn bè và người thân.',
        author: 'Lê Văn C',
        rating: '★★★★☆'
    }
];

let currentReview = 0;

function toggleMenu() {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
}

function closeMenuOnClick() {
    navbar.classList.remove('active');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
}

function handleScroll() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }

    const animateElements = document.querySelectorAll('[data-animate]');

    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

function loadTours() {
    toursGrid.innerHTML = tours.map(tour => `
        <div class="tour-card" data-animate>
            <div class="tour-image">
                <img src="${tour.image}" alt="${tour.title}">
            </div>
            <div class="tour-content">
                <h3 class="tour-title">${tour.title}</h3>
                <div class="tour-meta">
                    <span><i class="fas fa-calendar-alt"></i> ${tour.duration}</span>
                    <span><i class="fas fa-users"></i> ${tour.groupSize}</span>
                </div>
                <span class="tour-price">${tour.price}</span>
                <p class="tour-description">${tour.description}</p>
                <button class="btn btn-primary tour-detail-btn" data-tour-id="${tour.id}">Chi tiết tour</button>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.tour-detail-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tourId = parseInt(btn.getAttribute('data-tour-id'));
            openTourModal(tourId);
        });
    });
}
closeModal.addEventListener('click', closeTourModal);
tourModal.addEventListener('click', (e) => {
    if (e.target === tourModal) {
        closeTourModal();
    }
});
function openTourModal(tourId) {
    const tour = tours.find(t => t.id === tourId);
    
    if (tour) {
        modalTourImage.src = tour.image;
        modalTourImage.alt = tour.title;
        modalTourTitle.textContent = tour.title;
        modalTourDuration.textContent = tour.duration;
        modalTourGroupSize.textContent = tour.groupSize;
        modalTourPrice.textContent = tour.price;
        modalTourDescription.textContent = tour.description;
        tourTimeline.innerHTML = '';
        if (tour.itinerary) {
            tour.itinerary.forEach((item, index) => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';
                timelineItem.style.animationDelay = `${index * 0.1}s`;
                timelineItem.innerHTML = `
                    <div class="timeline-day">${item.day}</div>
                    <div class="timeline-content">
                        <h4 class="timeline-title">${item.title}</h4>
                        <p class="timeline-description">${item.description}</p>
                    </div>
                `;
                tourTimeline.appendChild(timelineItem);
                setTimeout(() => {
                    timelineItem.classList.add('animate');
                }, 50);
            });
        }
        tourModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}
function closeTourModal() {
    tourModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}
function loadGallery() {
    galleryGrid.innerHTML = gallery.map(image => `
            <div class="gallery-item" data-animate>
                <img src="${image}" alt="Gallery image">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        `).join('');
}

function loadReviews() {
    reviewsSlider.innerHTML = `
            <div class="review-card" data-animate>
                <div class="review-avatar">
                    <img src="${reviews[currentReview].avatar}" alt="${reviews[currentReview].author}">
                </div>
                <p class="review-text">"${reviews[currentReview].text}"</p>
                <h4 class="review-author">${reviews[currentReview].author}</h4>
                <div class="review-rating">${reviews[currentReview].rating}</div>
            </div>
        `;
}

function showNextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    loadReviews();
}

function showPrevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    loadReviews();
}

window.addEventListener('load', () => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);

    loadTours();
    loadGallery();
    loadReviews();
});

window.addEventListener('scroll', handleScroll);

menuToggle.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', closeMenuOnClick);
});

heroScroll.addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#about').offsetTop,
        behavior: 'smooth'
    });
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

prevReview.addEventListener('click', showPrevReview);
nextReview.addEventListener('click', showNextReview);

handleScroll(); 