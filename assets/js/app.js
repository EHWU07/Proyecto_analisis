import { gruposNavegacion, rutas, rutaInicial } from './rutas.js';
import { cargarHtml } from './cargadorHtml.js';
import { crearVistaMenu } from './vistaMenu.js';
import { crearVistaContenido } from './vistaContenido.js';
import { crearControladorNavegacion } from './navegacion.js';

async function iniciarAplicacion() {
    const vistaContenido = crearVistaContenido(document.getElementById('contenido'));
    try {
        const [header, sidebar, footer] = await Promise.all([
            cargarHtml('views/layout/header.html'),
            cargarHtml('views/layout/sidebar.html'),
            cargarHtml('views/layout/footer.html')
        ]);
        document.getElementById('encabezado').innerHTML = header;
        document.getElementById('barra-lateral').innerHTML = sidebar;
        document.getElementById('pie-pagina').innerHTML = footer;
        const vistaMenu = crearVistaMenu(
            document.getElementById('menu'),
            document.querySelector('.menu-toggle'),
            gruposNavegacion
        );
        const controlador = crearControladorNavegacion({
            rutas, rutaInicial, cargarHtml, vistaContenido, vistaMenu
        });
        await controlador.iniciar();
    } catch (error) {
        console.error(error);
        vistaContenido.error('No se pudo iniciar el prototipo. Abra index.html mediante Live Server.');
    }
}

iniciarAplicacion();
