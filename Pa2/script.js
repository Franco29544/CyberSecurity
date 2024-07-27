document.addEventListener('DOMContentLoaded', function() {
    // Añadir desplazamiento suave para los enlaces de la barra de navegación
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 10, // Ajuste para el espacio del encabezado
                    behavior: 'smooth'
                });
            }
        });
    });

    // Añadir desplazamiento suave para el botón "Empezar"
    const btnEmpezar = document.querySelector('.btn-empezar');
    btnEmpezar.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.getElementById('contenido');

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 10, // Ajuste para el espacio del encabezado
                behavior: 'smooth'
            });
        }
    });
});