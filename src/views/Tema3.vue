<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Permisos para trabajo en altura

    .row.justify-content-center.mt-3.mb-4
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/tema3-img-01.svg', alt='Texto que describa la imagen')(data-aos="flip-left")
      .col-lg-8
        p.mb-5 Es un mecanismo para establecer normas técnicas para trabajos seguros en altura con el objetivo de prevenir accidentes durante la ejecución de la misión mediante la verificación y el control de todos los aspectos relacionados con la solución. 
        .clr.crd-paleYellow
          p.p-2 De acuerdo con la Resolución de 2021 No. 4272, todo trabajo en altura debe realizarse de acuerdo con las actividades planificadas, organizadas y realizadas por empleados autorizados, lo que debe reflejarse en los controles administrativos, tales como permisos de trabajo en altura o sus anexos.
          p.p-2 ¿Qué se debe saber sobre los permisos para trabajos en altura? 

    p.mb-3 A continuación, se enumera cada aspecto a continuación:

    .row.justify-content-around.mt-3.mb-4
      .col-lg-8
        ol.lista-ol--cuadro.lista-ol--separador
          li
          li 
            .row.align-items-center
              .col-lg-1
                img(src='@/assets/curso/temas/tema3/tema3-img-03.svg', alt='Texto que describa la imagen')
              .col-lg-11
                p Siempre que los trabajadores ingresen a un área peligrosa, si tiene riesgo de caída, debe presentar un permiso de trabajo y una lista de verificación. Los empleadores o clientes deben establecer un procedimiento de aprobación del trabajo antes de comenzar cualquier trabajo de alto nivel.
          li 
            .row.align-items-center
              .col-lg-1
                img(src='@/assets/curso/temas/tema3/tema3-img-04.svg', alt='Texto que describa la imagen')
              .col-lg-11
                p Según la Resolución 1409 de 2012, el trabajo seguro en altura se define en Colombia como las actividades que se realizan a una altura de 1.50 metros o más en altitudes menores, dada la alta peligrosidad de este. El trabajo seguro en altura está destinado a prevenir accidentes al permitir la confirmación de la seguridad antes de comenzar el trabajo.
          li 
            .row.align-items-center
              .col-lg-1
                img(src='@/assets/curso/temas/tema3/tema3-img-05.svg', alt='Texto que describa la imagen')
              .col-lg-11
                p De acuerdo al artículo 17 de la citada resolución, con el fin de prevenir los accidentes laborales, un mecanismo es verificar y gestionar con anticipación los requisitos legales estipulados en las normas de seguridad en el trabajo en altura como actividad general.
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/tema3-img-02.svg', alt='Texto que describa la imagen')(data-aos="fade-left")                

    .row.justify-content-around.mt-3.mb-4
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/formato_permiso.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Formato permiso trabajo en alturas

    h5.mt-3.mb-4 Formato permiso trabajo en alturas
    p.mb-3 Antes de iniciar el trabajo en alturas se debe diligenciar un formato que contiene:
    
    .row.justify-content-around.mt-3.mb-4
      .col-lg-11
        .row.justify-content-around.mt-3.mb-4
          .col-lg-6
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 1
                | Nombre(s) del (los) trabajador(es ).
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 2
                | Tipo de trabajo.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 3
                | Altura aproximada a la cual se va a desarrollar la actividad .
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 4
                | Fecha y hora de inicio y de terminación de la tarea.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 5
                | Verificación de la afiliación vigente a la seguridad social.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 6
                | Requisitos del trabajador (requerimientos de aptitud).
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 7
                | Descripción y procedimiento de la tarea.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 8
                | Medidas de prevención contra caídas.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 9
                | Equipos, sistema de acceso para trabajo en alturas.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 10
                | Herramientas a utilizar.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 11
                | Elementos de protección personal seleccionados por el empleador teniendo en cuenta los riesgos y requerimientos propios de la tarea                       
          .col-lg-6
            img(src='@/assets/curso/temas/tema3/tema3-img-06.svg', alt='Texto que describa la imagen')(data-aos="fade-down-left")                

    .row.justify-content-around.mt-3.mb-4
      .col-lg-11
        .row.justify-content-around.mt-3.mb-4
          .col-lg-6
            img(src='@/assets/curso/temas/tema3/tema3-img-07.svg', alt='Texto que describa la imagen')(data-aos="fade-down-right")                
          .col-lg-6
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 12
                | Verificación de los puntos de anclaje por cada trabajador.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 13
                | Sistemas de restricción, posicionamiento o detención de caídas a utilizar
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 14
                | Constancia de capacitación o certificado de competencia laboral para prevención para caídas en trabajo en alturas.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 15
                | Observaciones.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 16
                | Nombres y apellidos, firmas, clase de documento y número de los documentos de identificación de los trabajadores.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 17
                | Nombre,apellido y firma de la persona que autoriza el trabajo.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 18
                | Nombre y firma de la persona responsable de activar el plan de emergencias.
              li 
                .lista-ol--cuadro__vineta.color-vineta
                  span 19
                | Nombre,apellido y firma del coordinador de trabajos en alturas (cuando es diferente de la persona que autoriza el trabajo).
                      
    p.mb-3 Con base en lo anterior, es importante tener en cuenta estas consideraciones al momento de completar el formato.
    
    .row.justify-content-around.mt-3(data-aos="zoom-in-up")                
      .col-lg-11
        .row.justify-content-around.mt-3
          .col-lg-8
            ul.lista-ul--color.color-check-verde
              li.mb-4
                i.fas.fa-check
                | Debe ser emitido para trabajos ocasionales. Y para ello es necesario que lo diligencie el empleador, requiere ser firmado por la persona que autoriza el trabajo y el coordinador de trabajo seguro en alturas; además, necesita ser revisado y verificado en el sitio de trabajo. 
              li.mb-4 
                i.fas.fa-check
                | Al realizar trabajos rutinarios a cambio de trabajos seguros en altura, es importante aplicar una lista de verificación que sea revisada y validada por el coordinador de trabajo actual.
              li.mb-4 
                i.fas.fa-check
                | Los permisos se emiten en el sitio y deben ser reemplazados por nuevas licencias cuando caducan (fecha y hora) o cuando cambian las primeras condiciones de seguridad previstas, esta licencia debe renovarse.
              li.mb-4
                i.fas.fa-check
                | Es importante comprender que las condiciones de riesgo son las mismas en las operaciones diarias, en este caso se puede utilizar una lista de verificación. Sin embargo, incluso si realiza el mismo trabajo o trabaja todos los días, el simple cambio de las condiciones de riesgo pierde el carácter de trabajo rutinario y requiere un permiso de trabajo. Esta es una autorización por escrito antes de realizar estas actividades, para comprobar y controlar las condiciones de trabajo, con el fin de evitar y prevenir accidentes derivados de caídas desde altura.                
            
          .col-lg-4
            img(src='@/assets/curso/temas/tema3/tema3-img-08.svg', alt='Texto que describa la imagen')

       





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
