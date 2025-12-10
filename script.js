// DOM yuklangandan so'ng
document.addEventListener('DOMContentLoaded', function() {
    // Back to Top tugmasi
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Ko'nikmalarni yuklash
    loadSkills();
    
    // Blog postlarni yuklash
    loadBlogPosts();
    
    // Smooth scroll navigation uchun
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Mobile menyuni yopish
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Active navigation linkni o'zgartirish
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Ko'nikmalarni yuklash funksiyasi
function loadSkills() {
    const skillsData = [
        {
            title: "Iymon Sakrashi",
            type: "Passiv",
            icon: "fas fa-fist-raised",
            description: "Har bir asosiy hujum Freya quvvatini to'ldiradi. To'liq quvvatda, Freya keyingi asosiy hujumiga qo'shimcha kuchli zarar beradi.",
            details: {
                quvvat: "100 birlik",
                zarar: "+150% fizik hujum"
            }
        },
        {
            title: "Iymon Sakrashi",
            type: "1-Ko'nikma",
            icon: "fas fa-arrow-up",
            description: "Freya ma'lut yo'nalishga sakrab, erga urilganda atrofdagi dushmanlarga zarar yetkazadi.",
            details: {
                zarar: "250-500",
                sovutish: "9 soniya"
            }
        },
        {
            title: "Favqulodda Himoya",
            type: "2-Ko'nikma",
            icon: "fas fa-shield-alt",
            description: "Freya qisqa muddatga himoya oladi va keyingi asosiy hujumlarini kuchaytiradi.",
            details: {
                himoya: "200-400",
                sovutish: "8 soniya"
            }
        },
        {
            title: "Valkiriya Tushishi",
            type: "Ultimate",
            icon: "fas fa-crown",
            description: "Freya gigantik kuch oladi, uning hujum va himoyasi oshadi, hujumlar dushmanlarni sekinlashtiradi.",
            details: {
                kuch: "+100% hujum",
                davomiylik: "8 soniya",
                sovutish: "40 soniya"
            }
        }
    ];
    
    const skillsContainer = document.getElementById('skills-container');
    
    skillsData.forEach(skill => {
        const skillHTML = `
            <div class="col-md-6 col-lg-3">
                <div class="skill-card">
                    <div class="skill-header d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <div class="skill-icon me-3">
                                <i class="${skill.icon}"></i>
                            </div>
                            <h3 class="skill-title">${skill.title}</h3>
                        </div>
                        <span class="skill-type">${skill.type}</span>
                    </div>
                    <div class="skill-content">
                        <p class="skill-description">${skill.description}</p>
                        <div class="skill-details">
                            ${Object.entries(skill.details).map(([key, value]) => `
                                <div class="d-flex justify-content-between mb-2">
                                    <span class="text-warning">${key}:</span>
                                    <span>${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        skillsContainer.innerHTML += skillHTML;
    });
}

// Blog postlarni yuklash funksiyasi
function loadBlogPosts() {
    const blogData = [
        {
            id: 1,
            title: "Freya bilan Mythic Rankka qanday chiqish kerak?",
            excerpt: "Freya bilan yuqori ranklarga chiqishning eng samarali strategiyalari va taktikalar.",
            date: "15 Oktyabr, 2023",
            readTime: "5 daqiqa",
            image: "blog1.jpg"
        },
        {
            id: 2,
            title: "Freya uchun eng yaxshi qurilmalar 2023",
            excerpt: "Joriy meta uchun Freya qurilmalari va ularning afzalliklari haqida to'liq qo'llanma.",
            date: "10 Oktyabr, 2023",
            readTime: "7 daqiqa",
            image: "blog2.jpg"
        },
        {
            id: 3,
            title: "Freya counter picklari va ularga qarshi kurashish",
            excerpt: "Qaysi qahramonlar Freyani qiyin ahvolga soladi va ularga qanday javob berish kerak?",
            date: "5 Oktyabr, 2023",
            readTime: "6 daqiqa",
            image: "blog3.jpg"
        },
        {
            id: 4,
            title: "Freya combo'larini mukammal bajarish",
            excerpt: "Freya ko'nikmalarini optimal ketma-ketlikda ishlatish va maksimal zarar yetkazish.",
            date: "1 Oktyabr, 2023",
            readTime: "4 daqiqa",
            image: "blog4.jpg"
        }
    ];
    
    const blogContainer = document.getElementById('blog-container');
    
    blogData.forEach(post => {
        const blogHTML = `
            <div class="col-md-6 col-lg-3">
                <div class="blog-card">
                    <img src="assets/${post.image || 'blog-default.jpg'}" alt="${post.title}" class="blog-image">
                    <div class="blog-content">
                        <div class="blog-meta d-flex justify-content-between mb-2">
                            <span><i class="far fa-calendar me-1"></i> ${post.date}</span>
                            <span><i class="far fa-clock me-1"></i> ${post.readTime}</span>
                        </div>
                        <h4 class="blog-title">${post.title}</h4>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <a href="#" class="btn btn-sm btn-warning">O'qish <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        `;
        
        blogContainer.innerHTML += blogHTML;
    });
}

// O'yin statistikasini ko'rsatish (demo)
function showGameStats() {
    const stats = {
        games: 1250,
        winRate: 68.5,
        kills: 8.2,
        deaths: 3.1,
        assists: 6.5,
        mvp: 325
    };
    
    alert(`Freya statistikasi:\n\nO'yinlar: ${stats.games}\nG'alaba foizi: ${stats.winRate}%\nO'rtacha o'ldirish: ${stats.kills}\nO'rtacha o'lim: ${stats.deaths}\nO'rtacha assist: ${stats.assists}\nMVP: ${stats.mvp}`);
}