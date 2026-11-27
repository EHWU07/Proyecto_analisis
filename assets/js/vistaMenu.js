export function crearVistaMenu(menu, boton, grupos) {
    const nav = menu.querySelector('nav');

    for (const grupo of grupos) {
        const bloque = document.createElement('div');
        bloque.className = nav.childElementCount ? 'nav-group' : '';
        const titulo = document.createElement('p');
        titulo.className = 'nav-group-title';
        titulo.textContent = grupo.titulo;
        bloque.append(titulo);
        for (const ruta of grupo.rutas) {
            const enlace = document.createElement('a');
            enlace.href = `#${ruta.id}`;
            enlace.dataset.route = ruta.id;
            enlace.textContent = ruta.nombre;
            bloque.append(enlace);
        }
        nav.append(bloque);
    }

    function establecerAbierto(abierto) {
        menu.classList.toggle('is-open', abierto);
        boton.setAttribute('aria-expanded', String(abierto));
        boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    }

    boton.addEventListener('click', () => {
        establecerAbierto(!menu.classList.contains('is-open'));
    });
    menu.addEventListener('click', evento => {
        if (evento.target.closest('[data-route]')) establecerAbierto(false);
    });

    return {
        seleccionar(id) {
            nav.querySelectorAll('[data-route]').forEach(enlace => {
                if (enlace.dataset.route === id) enlace.setAttribute('aria-current', 'page');
                else enlace.removeAttribute('aria-current');
            });
            establecerAbierto(false);
        }
    };
}
