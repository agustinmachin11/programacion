let contadorVisitas = document.getElementById('contadorVisitas');
let visitas = localStorage.getItem('visitas');
visitas = visitas ? parseInt(visitas) + 1 : 1;
contadorVisitas.textContent = visitas;
localStorage.setItem('visitas', visitas);

const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');

// Abre o cierra el menú cuando se hace clic en el botón
menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    // Verifica si el clic fue fuera del menú y el botón del menú
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});
