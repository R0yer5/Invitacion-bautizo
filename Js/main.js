// --- Js/main.js ---

document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById('btn-abrir');
    const solapaSuperior = document.getElementById('solapa-superior');

    if (btnAbrir) {
        btnAbrir.addEventListener('click', function() {
            // 1. Ocultar el botón (lacre)
            this.style.opacity = '0';
            this.style.pointerEvents = 'none'; // Evita dobles clics
            
            // 2. Animar la apertura de la solapa (gira 180 grados hacia arriba)
            setTimeout(() => {
                solapaSuperior.style.transform = 'rotateX(180deg)';
                // Bajamos el z-index para que al girar se vaya hacia "atrás" visualmente
                setTimeout(() => {
                    solapaSuperior.style.zIndex = '0';
                }, 300);
            }, 200);

            // 3. Redirigir a la segunda página después de la animación
            setTimeout(() => {
                // Aquí es donde enlazaremos la segunda página
                window.location.href = 'detalles.html'; 
            }, 1200); // Espera 1.2 segundos para que el usuario disfrute la animación
        });
    }
});