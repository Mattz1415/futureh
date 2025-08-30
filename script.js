// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Game Data
    const games = [
        {
            id: 1,
            title: "Dragon Quest",
            region: "Japan",
            category: "RPG",
            rating: 4.8,
            image: "https://picsum.photos/seed/dragonquest/300/200",
            description: "Epic RPG adventure from the Land of the Rising Sun"
        },
        {
            id: 2,
            title: "Assassin's Creed",
            region: "France",
            category: "Action",
            rating: 4.7,
            image: "https://picsum.photos/seed/assassin/300/200",
            description: "Stealth action game set in historical France"
        },
        {
            id: 3,
            title: "Witcher 3",
            region: "Poland",
            category: "RPG",
            rating: 4.9,
            image: "https://picsum.photos/seed/witcher/300/200",
            description: "Fantasy RPG masterpiece from Eastern Europe"
        },
        {
            id: 4,
            title: "GTA V",
            region: "USA",
            category: "Action",
            rating: 4.6,
            image: "https://picsum.photos/seed/gtav/300/200",
            description: "Open-world action from America"
        },
        {
            id: 5,
            title: "Minecraft",
            region: "Sweden",
            category: "Sandbox",
            rating: 4.9,
            image: "https://picsum.photos/seed/minecraft/300/200",
            description: "Creative sandbox game from Scandinavia"
        },
        {
            id: 6,
            title: "FIFA 23",
            region: "UK",
            category: "Sports",
            rating: 4.5,
            image: "https://picsum.photos/seed/fifa/300/200",
            description: "Football simulation from Great Britain"
        },
        {
            id: 7,
            title: "Cyberpunk 2077",
            region: "Poland",
            category: "RPG",
            rating: 4.4,
            image: "https://picsum.photos/seed/cyberpunk/300/200",
            description: "Cyberpunk RPG from Eastern Europe"
        },
        {
            id: 8,
            title: "Among Us",
            region: "USA",
            category: "Party",
            rating: 4.7,
            image: "https://picsum.photos/seed/amongus/300/200",
            description: "Social deduction game from America"
        }
    ];

    const regions = [
        { name: "North America", icon: "fas fa-flag-usa", games: 1250 },
        { name: "Europe", icon: "fas fa-landmark", games: 980 },
        { name: "Asia", icon: "fas fa-torii-gate", games: 2100 },
        { name: "South America", icon: "fas fa-mountain", games: 650 },
        { name: "Africa", icon: "fas fa-tree", games: 420 },
        { name: "Oceania", icon: "fas fa-water", games: 380 }
    ];

    const categories = [
        { name: "Action", icon: "fas fa-fist-raised", count: 850 },
        { name: "Adventure", icon: "fas fa-compass", count: 720 },
        { name: "RPG", icon: "fas fa-hat-wizard", count: 640 },
        { name: "Strategy", icon: "fas fa-chess", count: 580 },
        { name: "Sports", icon: "fas fa-football-ball", count: 490 },
        { name: "Racing", icon: "fas fa-car", count: 380 },
        { name: "Puzzle", icon: "fas fa-puzzle-piece", count: 520 },
        { name: "Simulation", icon: "fas fa-cogs", count: 340 }
    ];

    const newReleases = [
        { title: "Elden Ring", region: "Japan", date: "2023-11-15" },
        { title: "God of War Ragnarök", region: "USA", date: "2023-11-10" },
        { title: "Horizon Forbidden West", region: "Netherlands", date: "2023-11-05" },
        { title: "Pokémon Scarlet", region: "Japan", date: "2023-10-28" }
    ];

    // Initialize
    renderFeaturedGames();
    renderRegions();
    renderCategories();
    renderGames(games);
    renderTimeline();
    initCarousel();
    initThemeToggle();
    initSearch();
    initTabs();
    initModal();
    animateStats();
    initSmoothScroll();

    // Render Featured Games
    function renderFeaturedGames() {
        const carousel = document.getElementById('featuredCarousel');
        const featuredGames = games.slice(0, 4);
        
        carousel.innerHTML = featuredGames.map(game => `
            <div class="game-card" data-id="${game.id}">
                <img src="${game.image}" alt="${game.title}" class="game-image">
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <div class="game-region">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${game.region}</span>
                    </div>
                    <div class="game-meta">
                        <span class="game-category">${game.category}</span>
                        <div class="game-rating">
                            <i class="fas fa-star"></i>
                            <span>${game.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Regions
    function renderRegions() {
        const grid = document.getElementById('regionsGrid');
        
        grid.innerHTML = regions.map(region => `
            <div class="region-card">
                <div class="region-icon">
                    <i class="${region.icon}"></i>
                </div>
                <h3 class="region-name">${region.name}</h3>
                <p class="region-games">${region.games}+ Games</p>
            </div>
        `).join('');
    }

    // Render Categories
    function renderCategories() {
        const grid = document.getElementById('categoriesGrid');
        
        grid.innerHTML = categories.map(category => `
            <div class="category-card">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3 class="category-name">${category.name}</h3>
                <p class="category-count">${category.count} Games</p>
            </div>
        `).join('');
    }

    // Render Games
    function renderGames(gamesToRender) {
        const grid = document.getElementById('gamesGrid');
        
        grid.innerHTML = gamesToRender.map(game => `
            <div class="game-card" data-id="${game.id}">
                <img src="${game.image}" alt="${game.title}" class="game-image">
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <div class="game-region">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${game.region}</span>
                    </div>
                    <div class="game-meta">
                        <span class="game-category">${game.category}</span>
                        <div class="game-rating">
                            <i class="fas fa-star"></i>
                            <span>${game.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Timeline
    function renderTimeline() {
        const timeline = document.getElementById('timeline');
        
        timeline.innerHTML = newReleases.map((release, index) => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${formatDate(release.date)}</div>
                    <h3 class="timeline-title">${release.title}</h3>
                    <p class="timeline-region">
                        <i class="fas fa-globe"></i> ${release.region}
                    </p>
                </div>
            </div>
        `).join('');
    }

    // Carousel
    function initCarousel() {
        const carousel = document.getElementById('featuredCarousel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -320, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 320, behavior: 'smooth' });
        });
    }

    // Theme Toggle
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }

    // Search
    function initSearch() {
        const searchInput = document.getElementById('searchInput');
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredGames = games.filter(game => 
                game.title.toLowerCase().includes(searchTerm) ||
                game.region.toLowerCase().includes(searchTerm) ||
                game.category.toLowerCase().includes(searchTerm)
            );
            renderGames(filteredGames);
        });
    }

    // Tabs
    function initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all tabs
                tabBtns.forEach(tab => tab.classList.remove('active'));
                // Add active class to clicked tab
                btn.classList.add('active');
                
                // Filter games
                const filter = btn.dataset.filter;
                if (filter === 'all') {
                    renderGames(games);
                } else {
                    const filteredGames = games.filter(game => 
                        game.category.toLowerCase() === filter
                    );
                    renderGames(filteredGames);
                }
            });
        });
    }

    // Modal
    function initModal() {
        const modal = document.getElementById('gameModal');
        const closeBtn = document.querySelector('.close-modal');
        
        // Add click event to all game cards
        document.addEventListener('click', (e) => {
            const gameCard = e.target.closest('.game-card');
            if (gameCard) {
                const gameId = parseInt(gameCard.dataset.id);
                const game = games.find(g => g.id === gameId);
                if (game) {
                    showModal(game);
                }
            }
        });
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    function showModal(game) {
        const modal = document.getElementById('gameModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <img src="${game.image}" alt="${game.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">
            <h2 style="margin-bottom: 1rem;">${game.title}</h2>
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
                <span style="background: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 15px;">
                    <i class="fas fa-map-marker-alt"></i> ${game.region}
                </span>
                <span style="background: var(--secondary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 15px;">
                    ${game.category}
                </span>
                <span style="background: #fbbf24; color: white; padding: 0.25rem 0.75rem; border-radius: 15px;">
                    <i class="fas fa-star"></i> ${game.rating}
                </span>
            </div>
            <p style="color: var(--text-light); margin-bottom: 1.5rem;">${game.description}</p>
            <div style="display: flex; gap: 1rem;">
                <button class="btn btn-primary" style="flex: 1;">Play Now</button>
                <button class="btn btn-outline" style="flex: 1;">Add to Wishlist</button>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    // Animate Stats
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    const increment = target / 100;
                    let current = 0;
                    
                    const updateStat = () => {
                        current += increment;
                        if (current < target) {
                            entry.target.textContent = Math.ceil(current).toLocaleString();
                            requestAnimationFrame(updateStat);
                        } else {
                            entry.target.textContent = target.toLocaleString();
                        }
                    };
                    
                    updateStat();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        statNumbers.forEach(stat => observer.observe(stat));
    }

    // Smooth Scroll
    function initSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Load More
    document.getElementById('loadMoreBtn')?.addEventListener('click', () => {
        // Simulate loading more games
        const btn = document.getElementById('loadMoreBtn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        
        setTimeout(() => {
            btn.innerHTML = 'Load More Games';
            // Here you would typically fetch more games from an API
            alert('More games would be loaded here in a real application');
        }, 1500);
    });

    // Format Date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    // Add hover effects to game cards
    document.addEventListener('mouseover', (e) => {
        const gameCard = e.target.closest('.game-card');
        if (gameCard) {
            gameCard.style.transform = 'translateY(-5px)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        const gameCard = e.target.closest('.game-card');
        if (gameCard) {
            gameCard.style.transform = 'translateY(0)';
        }
    });
});