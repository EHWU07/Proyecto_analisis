// Controlador de interfaz: coordina rutas, carga y presentación.
// Sus dependencias se reciben desde app.js, no se crean aquí.
export function crearControladorNavegacion({ rutas, rutaInicial, cargarHtml, vistaContenido, vistaMenu }) {
    let solicitudActual;
    let ultimaRuta;

    async function navegar(enfocar = false) {
        let id = window.location.hash.slice(1) || rutaInicial;
        if (id === 'contenido' && ultimaRuta) {
            vistaContenido.enfocar();
            return;
        }
        if (!rutas.has(id)) {
            id = rutaInicial;
            window.history.replaceState(null, '', `#${id}`);
        }
        if (solicitudActual) solicitudActual.abort();
        const solicitud = new AbortController();
        solicitudActual = solicitud;
        vistaContenido.cargar();
        try {
            const html = await cargarHtml(rutas.get(id).vista, solicitud.signal);
            if (solicitud.signal.aborted) return;
            vistaContenido.mostrar(html, enfocar);
            vistaMenu.seleccionar(id);
            ultimaRuta = id;
        } catch (error) {
            if (solicitud.signal.aborted) return;
            console.error(error);
            vistaContenido.error('No se pudo cargar esta pantalla. Revise la conexión o seleccione otra opción.');
        }
    }

    return {
        iniciar() {
            window.addEventListener('hashchange', () => navegar(true));
            return navegar();
        }
    };
}
