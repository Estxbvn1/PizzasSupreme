document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo
            header.classList.add('hidden');
        } else {
            // Scroll hacia arriba
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    const buttons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    // Mostrar la sección "Todos" al cargar la página
    const showAll = () => {
        menuItems.forEach(item => {
            item.style.display = 'block';
        });
    };

    showAll(); // Llamar a la función para mostrar todas las secciones

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Elimina la clase 'selected' de todos los botones
            buttons.forEach(btn => btn.classList.remove('selected'));

            // Añade la clase 'selected' al botón que fue presionado
            button.classList.add('selected');

            const category = button.getAttribute('data-category');

            menuItems.forEach(item => {
                if (category === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    const floatingButtons = document.querySelectorAll('.floating-button');

    floatingButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const appUrl = button.getAttribute('href');
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            if (isMobile) {
                window.location.href = appUrl;
            } else {
                window.open(appUrl, '_blank');
            }

            event.preventDefault();
        });
    });

    const fileInput = document.getElementById('file-input');
    if (fileInput) {
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Hacer algo con la imagen cargada, por ejemplo, mostrarla en un lugar específico
                    const imageUrl = e.target.result;
                    console.log('Imagen cargada:', imageUrl);
                    // Aquí puedes añadir el código para mostrar la imagen en el sitio web
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
