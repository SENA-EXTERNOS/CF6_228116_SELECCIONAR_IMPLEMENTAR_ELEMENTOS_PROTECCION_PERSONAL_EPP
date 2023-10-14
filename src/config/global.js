export default {
  global: {
    componenteFormativo:
      'Seleccionar e implementar los elementos de protección personal - EPP',
    descripcionCurso:
      'El trabajo en alturas requiere estar certificado y ajustado de acuerdo con la normatividad vigente, así como el uso de elementos de dotación para la protección del trabajador para minimizar y actuar ante situaciones de riesgo que se presenten en un lugar de trabajo y, frente a demás factores que interfieren en el desarrollo de actividades laborales desde lugares altos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Implementar programa de protección contra caídas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Caídas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Permisos para trabajo en altura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Realizar procedimientos de rescate',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Primeros auxilios',
      referencia:
        'Capuñay, F. (8 de marzo de 2022). Introducción a los primeros auxilios. Archivo de video]. YouTube. Recuperado de: https://www.youtube.com/watch?v=c20G1dUDR20',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c20G1dUDR20',
    },
    {
      tema: 'Trabajo en alturas',
      referencia:
        '<i>Steelpro</i>, trabajo en alturas (8 de agosto de 2019). Tareas de alto riesgo. [Archivo de video]. YouTube. Recuperado de: https://www.youtube.com/watch?v=2jCDVywv32I',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2jCDVywv32I',
    },
    {
      tema: 'Trabajo en alturas',
      referencia:
        '<i>HAWK Fall Protection</i>. (9 junio de 2021). Aprende a identificar un punto de anclaje seguro. [Archivo de video]. YouTube. Recuperado de: https://www.youtube.com/watch?v=4R4rW1Lr5cs',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4R4rW1Lr5cs',
    },
    {
      tema: 'Trabajo en alturas',
      referencia:
        'Mutual de Seguridad CChC. (12 agosto de 2014). Trabajos en altura. [Archivo de video]. YouTube. Recuperado de: https://www.youtube.com/watch?v=AAZqtMmT1iA',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AAZqtMmT1iA',
    },
  ],
  glosario: [
    {
      termino: 'Brigadista de emergencias rescatista',
      significado:
        'trabajador que cuenta con entrenamiento especializado en técnicas de rescate y estabilización básica de pacientes poli traumatizados. Con el nivel de formación avanzada para autorizados, de acuerdo a la normatividad vigente de trabajos en alturas.',
    },
    {
      termino: 'Certificación',
      significado:
        'constancia que se entrega al final de un proceso, que acredita que un determinado elemento cumple con las exigencias de calidad de la norma que lo regula, o que una persona posee los conocimientos y habilidades necesarias para desempeñar ciertas actividades determinadas por el tipo de capacitación.',
    },
    {
      termino: 'EPCC',
      significado:
        'equipo de protección contra caídas. El equipo se compone de arnés, conectores, líneas de vida y puntos de anclaje.',
    },
    {
      termino: 'Eslinga',
      significado:
        'conector con una longitud máxima de 1.80 metros, fabricado en materiales como cuerda, reata, cable de acero o cadena. Las eslingas cuentan con ganchos para facilitar su conexión al arnés y a los puntos de anclaje; a algunas de ellas se les incorpora un absorbente de choque.',
    },
    {
      termino: 'Líneas de vida horizontales',
      significado:
        'sistemas de cables de acero, cuerdas o rieles, que debidamente ancladas a la estructura en la cual se realizará el trabajo en alturas, permitirán la conexión de los equipos personales de protección contra caídas y el desplazamiento horizontal del trabajador sobre una determinada superficie.',
    },
    {
      termino: 'Líneas de vida verticales',
      significado:
        'sistemas de cables de acero o cuerdas que debidamente ancladas en un punto superior a la zona de labor, protegen al trabajador en su desplazamiento vertical (ascenso / descenso).',
    },
    {
      termino: 'Mecanismo de anclaje',
      significado:
        'equipos de diferentes diseños y materiales que abrazan una determinada estructura o se instalan en un punto para crear un anclaje. Estos mecanismos cuentan con argollas, que permiten la conexión de los equipos personales de protección contra caídas.',
    },
    {
      termino: 'Mosquetón',
      significado:
        'equipo metálico en forma de argolla que permite realizar conexiones directas del arnés a los puntos de anclaje. Otro uso es servir de conexión entre equipos de protección contra caídas o rescate.',
    },
    {
      termino: 'Persona calificada',
      significado:
        'tiene un grado reconocido o certificado profesional, amplia experiencia y conocimientos en el tema, capaz de diseñar, analizar, evaluar y elaborar especificaciones en el trabajo, proyecto o producto del tema.',
    },
    {
      termino: 'Rescate en alturas',
      significado:
        'actividad que garantiza una respuesta organizada y segura, para acceder, estabilizar, descender y trasladar a un servicio médico, a un trabajador que haya sufrido una caída y esté suspendido de sus equipos personales de protección contra caídas, o haya sufrido una lesión o afección de salud en un sitio de alturas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gestión integral de los elementos de protección personal (epp) ministerio de salud y protección social bogotá, julio de 2021 proceso gestión el talento humano código gths02 documento soporte gestión integral de los elementos de protección personal (epp) versión 02. (n.d.). Gov.co',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia:
        'INFIBAGUE. (30 de noviembre de 2020). Programa de prevención y protección contra caídas en alturas. Ibagué, Tolima, Colombia',
      link:
        'https://www.infibague.gov.co/wp-content/uploads/2022/01/PROG-GH-004-PROGRAMA-DE-PREVENCION-Y-PROTECION-CONTRA-CAIDAS-INFIBAGUE-1.docx',
    },
    {
      referencia:
        'OIPS (s.f). ¿Qué es un sistema de protección contra caídas? OIPS. ',
      link: '',
    },
    {
      referencia:
        'Ruiz, B. A. (30 de julio de 2018). Caídas de altura, cómo mitigar este riesgo. SURA, 1.',
      link:
        'https://www.arlsura.com/index.php/173-noticias-riesgos-profesionales/noticias/3868-caidas-de-altura-como-mitigar-este-riesgo',
    },
    {
      referencia:
        'S.A.S., A. d. (10 de mayo de 2022). Protocolo de trabajo seguro en alturas. Agrocom. Villavicencio, Meta, Colombia.',
      link:
        'http://repository.unipiloto.edu.co/bitstream/handle/20.500.12277/11686/Programa%20de%20prevenci%C3%B3n%20y%20protecci%C3%B3n%20contra%20ca%C3%ADdas%20de%20alturas.pdf?sequence=3&isAllowed=y',
    },
    {
      referencia:
        'Seguros, C. (12 de mayo de 2021). Medidas activas y pasivas de protección contra caídas en altura. Colmena Seguros, 1. ',
      link:
        'http://prevencionar.com.pe/2021/05/12/conoces-las-medidas-activas-y-pasivas-de-proteccion-contra-caidas-en-alturas/',
    },
    {
      referencia:
        'República de Colombia. (23 de julio de 2012). Ministerio del trabajo.  Resolución 1409 de 2012. Diario Oficial No. 48517 de 2012. Bogotá, Cundinamarca, Colombia',
      link: 'https://www.arlsura.com/files/res1409_2012.pdf',
    },
    {
      referencia:
        'República de Colombia. (27 de diciembre de 2021). Ministerio del trabajo. Resolución Número 4272 de 2021. Reglamentación Alturas. Bogotá, Bogotá, Colombia. ',
      link:
        'https://www.cerlatam.com/wp-content/uploads/2022/01/Resolucion-4272-de-2021-Reglamenta-alturas-1.pdf',
    },
    {
      referencia:
        'Vanegas, D. (2014). Programa de prevención y protección contra caídas Universidad EAFIT. Medellín. ',
      link:
        'https://entrenos.eafit.edu.co/proyeccion-social/desarrollo-humano/centro-documental/vida-universitaria/talento-humano/seguridad-salud-trabajo-medicina/programa-trabajo-alturas/Documents/PROGRAMA%20DE%20PREVENCION%20Y%20PROTECCION%20CONTRA%20CAIDAS.pdf',
    },
    {
      referencia:
        '<em>Sehuanes Espitia, M., Vásquez Osorio, G., & Guarín Ocampo, C. M. (2022). Propuesta de diseño de guía para el trabajo seguro en alturas para disminuir la probabilidad de accidentalidad por caída en AGE Construcciones</em> ',
      link:
        'https://repositorio.ecci.edu.co/bitstream/handle/001/2927/Trabajo%20de%20grado.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
