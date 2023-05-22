window.addEventListener('DOMContentLoaded', () => {

    const aboutItem = document.querySelector('.nav_item-about'),
        aboutSection = document.querySelector('.about'),
        expItem = document.querySelector('.nav_item-exp'),
        expSection = document.querySelector('.exp'),
        portfolioItem = document.querySelector('.nav_item-portfolio'),
        portfolioSection = document.querySelector('.portfolio');

    // This function shows the section that is clicked on the navigation bar
    function showSection() {
        aboutItem.addEventListener('click', () => {
            aboutSection.classList.add('show');
            aboutSection.classList.remove('hide');
        });

        expItem.addEventListener('click', () => {
            expSection.classList.add('show');
            expSection.classList.remove('hide');
        });

        portfolioItem.addEventListener('click', () => {
            portfolioSection.classList.add('show');
            portfolioSection.classList.remove('hide');
        });
    }

    showSection();

    // This function hides the section that is not clicked on the navigation bar
    function hideSection() {
        aboutItem.addEventListener('click', () => {
            if (expSection.classList.contains('show') || portfolioSection.classList.contains('show')) {
                expSection.classList.remove('show');
                portfolioSection.classList.remove('show');
            }
        });

        expItem.addEventListener('click', () => {
            if (aboutSection.classList.contains('show') || portfolioSection.classList.contains('show')) {
                aboutSection.classList.remove('show');
                portfolioSection.classList.remove('show');
            }
        });

        portfolioItem.addEventListener('click', () => {
            if (aboutSection.classList.contains('show') || expSection.classList.contains('show')) {
                aboutSection.classList.remove('show');
                expSection.classList.remove('show');
            }
        });
    }

    hideSection();

});