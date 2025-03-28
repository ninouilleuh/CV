///project links
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {

        // Add click event to the entire card

        card.addEventListener('click', (e) => {

            // Check if the click was on a link to prevent double navigation
            if (e.target.closest('a')) return;
            const projectLink = card.getAttribute('data-link');
            
            if (projectLink) {
            
                window.open(projectLink, '_blank');

            }

        });
        // Prevent link propagation to avoid double navigation

        const links = card.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    });
});
//CSS check
window.addEventListener('load', () => {
    console.group('Style Debugging');
    
    // Check applied styles
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);
    
    console.log('Background:', computedStyle.backgroundColor);
    console.log('Font Family:', computedStyle.fontFamily);
    console.log('Color:', computedStyle.color);
    
    // Check loaded stylesheets
    const sheets = document.styleSheets;
    console.log('Total Stylesheets:', sheets.length);
    
    for (let sheet of sheets) {
        console.log('Stylesheet URL:', sheet.href);
        try {
            console.log('Stylesheet Rules:', sheet.cssRules.length);
        } catch (e) {
            console.error('Cannot access stylesheet rules');
        }
    }
    console.groupEnd();
});

// Add touch and mobile-specific interactions
document.addEventListener('DOMContentLoaded', () => {
    // Prevent default touch behaviors
    document.body.addEventListener('touchstart', function(e) {
        // Prevent pinch-zoom
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // Add swipe navigation (optional)
    let touchStartX = 0;
    let touchEndX = 0;

    document.body.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.body.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            console.log('Swiped left');
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            console.log('Swiped right');
        }
    }

    // Improve mobile menu interactions
    const mobileMenuTrigger = document.querySelector('.mobile-menu-trigger');
    if (mobileMenuTrigger) {
        mobileMenuTrigger.addEventListener('touchstart', (e) => {
            e.preventDefault();
            // Toggle mobile menu
        });
    }
});
//CTA 
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0)';
        });
    });
});
//mobile touch optimisation
document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(item => {
        const link = item.querySelector('a');
        
        // Add touch feedback
        item.addEventListener('touchstart', () => {
            item.style.transform = 'scale(0.98)';
        });

        item.addEventListener('touchend', () => {
            item.style.transform = 'scale(1)';
        });

        // Copy to clipboard functionality
        link.addEventListener('click', (e) => {
            const textToCopy = link.querySelector('span').textContent;
            
            // Create a temporary textarea to copy text
            const tempInput = document.createElement('textarea');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Optional: Show copied feedback
            const originalText = link.textContent;
            link.textContent = 'Copied!';
            setTimeout(() => {
                link.textContent = originalText;
            }, 1500);
        });
    });
});
