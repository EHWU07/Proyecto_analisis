export function crearVistaContenido(contenedor) {
    function mostrarMensaje(mensaje, rol) {
        const texto = document.createElement('p');
        texto.setAttribute('role', rol);
        texto.textContent = mensaje;
        contenedor.replaceChildren(texto);
    }

    return {
        cargar() {
            contenedor.setAttribute('aria-busy', 'true');
        },
        mostrar(html, enfocar) {
            // HTML estático del repositorio, nunca datos ingresados por usuarios.
            contenedor.innerHTML = html;
            contenedor.setAttribute('aria-busy', 'false');
            const titulo = contenedor.querySelector('h1');
            if (titulo) {
                document.title = `${titulo.textContent} | Liceo Magallanes`;
                if (enfocar) titulo.focus({ preventScroll: true });
            }
            contenedor.scrollTop = 0;
            window.scrollTo(0, 0);
        },
        error(mensaje) {
            mostrarMensaje(mensaje, 'alert');
            contenedor.setAttribute('aria-busy', 'false');
        },
        enfocar() { contenedor.focus(); }
    };
}
