// No smooth scrolling needed for multi-page architecture
// Only keeping this function for potential future use within individual pages
function initSmoothScrolling() {
    // Disabled for multi-page navigation
    // Only handle anchor links that start with # if they exist on the current page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        
        // Only add smooth scrolling if the target exists on the current page
        if (target) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const offset = 100;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        }
        // If target doesn't exist, let the browser handle it naturally (for multi-page navigation)
    });
}

// Mobile navigation toggle
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link (but don't prevent navigation)
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                // Only close the mobile menu, don't prevent default navigation
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                // Allow the browser to handle the navigation naturally
            });
        });
    }
}

// Initialize the page - TEMPORARILY DISABLED FOR DEBUGGING
document.addEventListener('DOMContentLoaded', () => {
    // Temporarily disabling all JavaScript to test navigation
    console.log('JavaScript loaded but initialization disabled for debugging navigation');
    
    // Only enable mobile navigation for now
    initMobileNavigation();
    
    // Smooth scrolling disabled to prevent navigation interference
    // initSmoothScrolling();
});
