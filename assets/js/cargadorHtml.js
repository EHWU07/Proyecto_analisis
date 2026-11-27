// Solo carga archivos HTML locales definidos por la aplicación.
export async function cargarHtml(ruta, signal) {
    const respuesta = await fetch(ruta, { signal });
    if (!respuesta.ok) {
        throw new Error(`No se pudo cargar ${ruta} (${respuesta.status})`);
    }
    return respuesta.text();
}
