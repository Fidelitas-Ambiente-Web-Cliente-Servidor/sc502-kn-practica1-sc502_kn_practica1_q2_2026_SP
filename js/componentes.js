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
