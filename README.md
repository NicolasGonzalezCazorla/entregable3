# Guardianes del Planeta
La aplicación representa un zoológico educativo y el trabajo se centra en el diseño 
y estilizado de los componentes visuales, siguiendo un prototipo previo realizado en Figma.

Este proyecto corresponde a la Entrega 3 – Desarrollo Fase 2.

## Descripción del proyecto
Guardianes del Planeta es una aplicación web orientada a la visualización de información sobre animales, actividades y zonas de un zoológico.

El objetivo principal del proyecto es aplicar estilos visuales a los componentes creados en React, utilizando frameworks CSS y manteniendo una estructura clara y organizada del proyecto.

No se ha implementado lógica de negocio ni conexión con bases de datos, ya que el enfoque es únicamente visual.

## Tecnologías utilizadas

- Next.js
- Tailwind CSS (framework principal de estilos)
- Bootstrap (uso puntual)
- CSS puro (solo en los casos en los que el framework no permitía reproducir el diseño)
## Componentes visuales desarrollados
- Header
- Footer
- Grid
- Card
- NavBar
- Filtro
- Página de animales
- Página de actividades
- Mapa del zoo
- Detalle de animal
- Perfil de usuario
- Favoritos
Todos los componentes están integrados dentro de la aplicación y mantienen una coherencia visual común.

== GESTIÓN DE USUARIOS Y PERFIL ==
Base de Datos: Tabla usuario con auth_id, nombre, username y foto_url. Políticas RLS activas
Backend: Endpoint /api/usuarios. Implementa GET para lectura de perfil y PUT para actualización
Frontend: Componente PerfilInfo.js con formulario reactivo y selector de avatares locales

== CATÁLOGO DE ANIMALES ==
Base de Datos: Tabla animal con campos de taxonomía, dieta, origen y URL de imagen
Backend: Endpoint /api/animales. Implementa GET para devolver el listado completo desde Supabase
Frontend: Página /animales. Mapeo dinámico de datos en cards

== SISTEMA DE FAVORITOS ==
Base de Datos: Tabla relacional animales_favoritos_usuarios para persistencia de datos
Backend: Endpoint /api/favoritos. Implementa GET para consulta , DELETE para eliminación de registros e INSERT para añadir 
Frontend: Sección de favoritos en perfil y actualización de estado sin recarga

== MAPA DEL ZOO ==
Base de Datos: Tabla mapa con información de imagen, títulos y descripción general
Backend: Endpoint /api/mapa. Implementa GET para servir los datos dinámicos del plano del parque
Frontend: Componente mapa.js con visualización de imagen y leyenda de zonas por categorías

== ACTIVIDADES ==
Base de Datos: Tabla actividades con horarios, ubicación y tipo de evento
Backend: Endpoint /api/actividades. Implementa GET para listar los eventos del día
Frontend: Sección de actividades 

== ARQUITECTURA DEL SISTEMA ==
Estructura: Cliente-Servidor mediante API Routes de Next.js
Seguridad: El Frontend nunca conecta directamente con Supabase, cumpliendo el requisito de la entrega
Validación: Manejo de códigos de estado HTTP (200, 201, 401, 500) en todas las comunicaciones