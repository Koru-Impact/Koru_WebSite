/**
 * Navigation Management
 * Handles active page detection and mobile menu functionality
 */

class NavigationManager {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.navLinks = {
            'index.html': ['nav-home', 'mobile-nav-home'],
            'about.html': ['nav-about', 'mobile-nav-about'],
            'services.html': ['nav-services', 'mobile-nav-services'],
            'journal.html': ['nav-journal', 'mobile-nav-journal'],
            'article.html': ['nav-journal', 'mobile-nav-journal'],
            'contact.html': ['nav-contact', 'mobile-nav-contact']
        };
        
        this.init();
    }

    /**
     * Get current page filename
     * @returns {string} Current page filename
     */
    getCurrentPage() {
        return window.location.pathname.split('/').pop() || 'index.html';
    }

    /**
     * Initialize navigation functionality
     */
    init() {
        this.setupMobileMenu();
        this.setActiveNavigation();
        this.setupHoverEffects();
    }

    /**
     * Setup mobile menu functionality
     */
    setupMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            // Mobile menu toggle
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('show');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (event) => {
                if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                    mobileMenu.classList.remove('show');
                }
            });

            // Close menu when window is resized to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    mobileMenu.classList.remove('show');
                }
            });
        }
    }

    /**
     * Set active navigation based on current page
     */
    setActiveNavigation() {
        if (this.navLinks[this.currentPage]) {
            this.navLinks[this.currentPage].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('active');
                }
            });
        }
        
        // Also try after a short delay to ensure DOM is ready
        setTimeout(() => {
            if (this.navLinks[this.currentPage]) {
                this.navLinks[this.currentPage].forEach(id => {
                    const element = document.getElementById(id);
                    if (element && !element.classList.contains('active')) {
                        element.classList.add('active');
                    }
                });
            }
        }, 100);
    }

    /**
     * Setup hover effects for navigation links
     */
    setupHoverEffects() {
        document.querySelectorAll('.navbar-nav a, .mobile-menu a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.backgroundColor = 'var(--gray-50)';
                }
            });
            
            link.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.backgroundColor = '';
                }
            });
        });
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});

// Also initialize when header is loaded (for component-based loading)
document.addEventListener('headerLoaded', () => {
    new NavigationManager();
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationManager;
} 