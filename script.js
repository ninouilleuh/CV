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