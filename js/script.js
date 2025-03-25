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
