// ==================== FILTRO DE MEMBROS ====================
function filterMembros(unidade) {
    const cards = document.querySelectorAll('.membro-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Atualizar botões ativos
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filtrar cards com animação
    cards.forEach(card => {
        if (unidade === 'todos') {
            card.classList.remove('hidden');
            card.style.display = 'block';
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.6s ease forwards';
            }, 0);
        } else if (card.dataset.unidade === unidade) {
            card.classList.remove('hidden');
            card.style.display = 'block';
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.6s ease forwards';
            }, 0);
        } else {
            card.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                card.style.display = 'none';
                card.classList.add('hidden');
            }, 300);
        }
    });
}

// ==================== ANIMAÇÃO AO SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .membro-card, .album-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Inicializar tooltips para skills
    const skillTags = document.querySelectorAll('.skill');
    skillTags.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) translateY(-3px)';
        });
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Inicializar efeitos de cards
    const membroCards = document.querySelectorAll('.membro-card');
    membroCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    console.log('🎵 Bem-vindo ao Blog de Stray Kids!');
    console.log('✨ Prepare-se para descobrir a história e os membros do grupo!');
});

// ==================== EFEITO NAVBAR SCROLLING ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Efeito de sombra ao scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== INDICADOR DE SEÇÃO ATIVA ====================
window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Atualizar links da navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ==================== SMOOTH SCROLL PARA NAVEGAÇÃO ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== EFEITO PARALLAX HERO ====================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ==================== DETECÇÃO DE TEMA ESCURO ====================
function checkSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

checkSystemTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// ==================== EASTER EGG ====================
let currentKeySequence = [];
const secretKeys = ['s', 't', 'a', 'y'];

document.addEventListener('keydown', function(e) {
    currentKeySequence.push(e.key.toLowerCase());
    
    if (currentKeySequence.length > secretKeys.length) {
        currentKeySequence.shift();
    }
    
    if (JSON.stringify(currentKeySequence) === JSON.stringify(secretKeys)) {
        activateEasterEgg();
        currentKeySequence = [];
    }
});

function activateEasterEgg() {
    const elements = document.querySelectorAll('section');
    elements.forEach((el, index) => {
        setTimeout(() => {
            const hue = Math.random() * 360;
            el.style.borderTop = `4px solid hsl(${hue}, 100%, 50%)`;
        }, index * 100);
    });
    
    // Criar efeito de confete simulado
    createConfetti();
    console.log('🌈 Easter Egg Ativado! Você encontrou o segredo! 🎉');
}

function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f5576c', '#43e97b', '#fa709a'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${2 + Math.random()}s linear`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 2500);
    }
}

// Adicionar animação de queda ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== CARREGAMENTO PROGRESSIVO ====================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ==================== REDIMENSIONAMENTO RESPONSIVO ====================
window.addEventListener('resize', function() {
    const membrosGrid = document.querySelector('.membros-grid');
    if (membrosGrid && window.innerWidth < 480) {
        membrosGrid.style.gridTemplateColumns = '1fr';
    }
});

// ==================== INTERATIVIDADE DOS CARDS ====================
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.membro-card:not(.hidden)');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
    });
});

// ==================== PRELOAD DE IMAGENS ====================
function preloadImages() {
    const imageElements = document.querySelectorAll('.membro-image img, .album-cover');
    imageElements.forEach(img => {
        const src = img.src || img.style.backgroundImage;
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
        }
    });
}

// Preload após o carregamento da página
window.addEventListener('load', preloadImages);

// ==================== RIPPLE EFFECT NOS BOTÕES ====================
function addRippleEffect() {
    const buttons = document.querySelectorAll('.filter-btn, .btn-cta');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(1)';
            ripple.style.animation = 'rippleEffect 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Adicionar keyframe de ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            from {
                width: 0;
                height: 0;
                opacity: 1;
            }
            to {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

document.addEventListener('DOMContentLoaded', addRippleEffect);

// ==================== HOVER EFFECT NOS ALBUMS ====================
document.addEventListener('DOMContentLoaded', function() {
    const albumCards = document.querySelectorAll('.album-card');
    
    albumCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(1deg)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
});

// ==================== SCROLL REVEAL PARA SEÇÕES ====================
const revealElements = document.querySelectorAll('section');

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Chamar uma vez ao carregar a página

console.log('%c🎵 Stray Kids Blog Carregado! 🎵', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cDica: Digite "STAY" para ativar o easter egg! 🌈', 'color: #764ba2; font-size: 14px;');
