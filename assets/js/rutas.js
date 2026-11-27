// Catálogo único de navegación del frontend.
export const gruposNavegacion = [
    {
        "titulo": "Panel principal",
        "rutas": [
            {
                "id": "inicio",
                "nombre": "Inicio",
                "vista": "views/pages/inicio.html"
            }
        ]
    },
    {
        "titulo": "Acceso y gestión",
        "rutas": [
            {
                "id": "inicio-sesion",
                "nombre": "Inicio de sesión",
                "vista": "views/modules/inicio-sesion/inicioSesion.html"
            },
            {
                "id": "personas",
                "nombre": "Personas institucionales",
                "vista": "views/modules/personas/personas.html"
            }
        ]
    },
    {
        "titulo": "Gestión académica",
        "rutas": [
            {
                "id": "asistencia",
                "nombre": "Asistencia",
                "vista": "views/modules/asistencia/asistencia.html"
            },
            {
                "id": "alerta-seguimiento",
                "nombre": "Alerta temprana y seguimiento estudiantil",
                "vista": "views/modules/alerta-seguimiento/alertaSeguimiento.html"
            },
            {
                "id": "grupos-horarios",
                "nombre": "Grupos y horarios",
                "vista": "views/modules/grupos-horarios/gruposHorarios.html"
            }
        ]
    },
    {
        "titulo": "Productos y ventas",
        "rutas": [
            {
                "id": "productos",
                "nombre": "Productos institucionales",
                "vista": "views/modules/productos/productos.html"
            },
            {
                "id": "inventario",
                "nombre": "Control de inventario",
                "vista": "views/modules/inventario/inventario.html"
            },
            {
                "id": "ventas",
                "nombre": "Ventas y transacciones",
                "vista": "views/modules/ventas/ventas.html"
            }
        ]
    },
    {
        "titulo": "Servicios institucionales",
        "rutas": [
            {
                "id": "tramites",
                "nombre": "Trámites institucionales",
                "vista": "views/modules/tramites/transmites.html"
            },
            {
                "id": "instalaciones",
                "nombre": "Instalaciones institucionales",
                "vista": "views/modules/instalaciones/instalaciones.html"
            },
            {
                "id": "mantenimiento",
                "nombre": "Mantenimiento",
                "vista": "views/modules/mantenimiento/mantenimiento.html"
            }
        ]
    },
    {
        "titulo": "Comunicación",
        "rutas": [
            {
                "id": "sitio-web",
                "nombre": "Sitio web institucional",
                "vista": "views/modules/sitio-web/sitioWeb.html"
            },
            {
                "id": "comunicados",
                "nombre": "Comunicados institucionales",
                "vista": "views/modules/comunicados/comunicados.html"
            },
            {
                "id": "comunicacion-encargados",
                "nombre": "Comunicación con padres y encargados",
                "vista": "views/modules/comunicacion-encargados/comunicacionEncargados.html"
            }
        ]
    },
    {
        "titulo": "Información y control",
        "rutas": [
            {
                "id": "informacion",
                "nombre": "Centralización de información",
                "vista": "views/modules/informacion/informacion.html"
            },
            {
                "id": "respaldos",
                "nombre": "Respaldo y recuperación",
                "vista": "views/modules/respaldos/respaldos.html"
            },
            {
                "id": "auditoria",
                "nombre": "Auditoría y registro de actividades",
                "vista": "views/modules/auditoria/auditoria.html"
            },
            {
                "id": "consultas",
                "nombre": "Consulta de información",
                "vista": "views/modules/consultas/consultas.html"
            },
            {
                "id": "analitica",
                "nombre": "Analítica y proyección institucional",
                "vista": "views/modules/analitica/analitica.html"
            }
        ]
    }
];

export const rutas = new Map(
    gruposNavegacion.flatMap(grupo => grupo.rutas.map(ruta => [ruta.id, ruta]))
);

export const rutaInicial = "inicio";
