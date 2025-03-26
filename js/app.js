document.addEventListener('DOMContentLoaded', () => {

    const toggleBtn = document.querySelector('.content__toggle-button')
    const arowIcon = document.querySelector('.content__arrow-icon')
    toggleBtn.addEventListener('click', function() {
        const content = document.querySelector('.content__wrapper');
        content.classList.toggle('expanded');

        content.classList.contains('expanded') ? arowIcon.classList.add('open') : arowIcon.classList.remove('open');
    });

})

