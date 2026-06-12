document.addEventListener("DOMContentLoaded", function () {
    // Cargar Navbar
    fetch('shared/navbar.html')
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar navbar');
            return response.text();
        })
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;

                // para que se marque en que columna esta uno en el navbar
                let currentLocation = window.location.pathname.split('/').pop() || 'index.html';
                const navLinks = navbarPlaceholder.querySelectorAll('.nav-link');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === currentLocation) {
                        link.classList.add('active');
                    }
                });
            }
        })
        .catch(error => console.error(error));

    // Cargar Footer
    fetch('shared/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar footer');
            return response.text();
        })
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        })
        .catch(error => console.error(error));
});
