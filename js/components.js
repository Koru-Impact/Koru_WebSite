/**
 * Component Management
 * Handles loading of reusable components (header, footer)
 */

class ComponentManager {
    constructor() {
        this.components = {
            header: 'components/header.html',
            footer: 'components/footer.html'
        };
        
        this.init();
    }

    /**
     * Initialize component loading
     */
    init() {
        this.loadHeader();
        this.loadFooter();
    }

    /**
     * Load header component
     */
    async loadHeader() {
        try {
            const response = await fetch(this.components.header);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            const headerPlaceholder = document.getElementById('header-placeholder');
            
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                // Trigger navigation setup after header is loaded
                this.triggerNavigationSetup();
            }
        } catch (error) {
            console.error('Error loading header:', error);
        }
    }

    /**
     * Load footer component
     */
    async loadFooter() {
        try {
            const response = await fetch(this.components.footer);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            const footerPlaceholder = document.getElementById('footer-placeholder');
            
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }

    /**
     * Trigger navigation setup after header is loaded
     * This ensures navigation functionality works after component loads
     */
    triggerNavigationSetup() {
        // Dispatch custom event to notify navigation manager
        const event = new CustomEvent('headerLoaded');
        document.dispatchEvent(event);
        
        // Set active navigation after header is loaded
        this.setActiveNavigation();
    }

    /**
     * Set active navigation based on current page
     */
    setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = {
            'index.html': ['nav-home', 'mobile-nav-home'],
            'about.html': ['nav-about', 'mobile-nav-about'],
            'services.html': ['nav-services', 'mobile-nav-services'],
            'contact.html': ['nav-contact', 'mobile-nav-contact']
        };

        if (navLinks[currentPage]) {
            navLinks[currentPage].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('active');
                }
            });
        }
        
        // Also try after a short delay to ensure DOM is ready
        setTimeout(() => {
            if (navLinks[currentPage]) {
                navLinks[currentPage].forEach(id => {
                    const element = document.getElementById(id);
                    if (element && !element.classList.contains('active')) {
                        element.classList.add('active');
                    }
                });
            }
        }, 200);
    }

    /**
     * Reload a specific component
     * @param {string} componentName - Name of component to reload
     */
    async reloadComponent(componentName) {
        if (componentName === 'header') {
            await this.loadHeader();
        } else if (componentName === 'footer') {
            await this.loadFooter();
        }
    }
}

// Initialize component manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ComponentManager();
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentManager;
} 