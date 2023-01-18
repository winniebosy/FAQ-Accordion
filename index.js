//widget elements
const headings = document.querySelectorAll('h3');

headings.forEach((heading) => {
    const button = heading.querySelector('button');
    const accordionContent = heading.nextElementSibling;
    button.addEventListener('click', (e) => {
        const iconCollapsed = button.querySelector('.icon-collapsed ');
        const iconExpanded = button.querySelector('.icon-expanded');
        //setting collapsed and expanded states
        if (button.getAttribute('aria-expanded') === 'false') {
            button.setAttribute('aria-expanded', 'true');
            accordionContent.setAttribute('data-state', 'expanded')
            iconExpanded.style.display = 'inline-block';
            iconCollapsed.style.display = 'none'
        } else {
            button.setAttribute('aria-expanded', 'false');
            accordionContent.setAttribute('data-state', 'collapsed')
            iconExpanded.style.display = 'none';
            iconCollapsed.style.display = 'inline-block'
        }
        // button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        // accordionContent.setAttribute('data-state', accordionContent.getAttribute('data-state') === 'collapsed' ? 'expanded' : 'collapsed')



    })


})