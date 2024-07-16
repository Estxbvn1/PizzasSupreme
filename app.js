document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.menu-section');

    // Mostrar la sección "Todo" al cargar la página
    const showAll = () => {
        sections.forEach(section => {
            section.classList.add('active');
        });
    };

    showAll(); // Llamar a la función para mostrar todas las secciones

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            sections.forEach(section => {
                if (category === 'all') {
                    showAll();
                } else if (section.getAttribute('data-category') === category) {
                    section.classList.add('active');
                    section.classList.remove('inactive');
                } else {
                    section.classList.remove('active');
                    section.classList.add('inactive');
                }
            });
        });
    });
});
