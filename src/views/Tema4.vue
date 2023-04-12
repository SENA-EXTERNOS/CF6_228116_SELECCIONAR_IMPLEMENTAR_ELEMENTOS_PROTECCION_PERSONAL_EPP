<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Realizar procedimientos de rescate

    p.mb-4 Para realizar un procedimiento de rescate adecuado, se deben tener en cuenta los siguientes conceptos:


    .row.justify-content-around.mt-3.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/tema4/tema4-img-01.png', alt='Texto que describa la imagen')(data-aos="fade-left")
      .col-lg-7
        .lista-ol2
          ol.lista-ol--cuadro
            li.li-azul.align-items-center
              .lista-ol--cuadro__vineta
                span 1
              | Mecanismos de ayuda de rescate: procedimiento preestablecido para recuperar con seguridad a una persona que ha caído por medios mecánicos.
            li.li-azul.align-items-center
              .lista-ol--cuadro__vineta
                span 2
              | Requerimiento de claridad o espacio libre de caída:  la distancia vertical requerida para evitar golpear el suelo u obstáculos en caso de que un trabajador se vuelque. Los requisitos de transparencia dependen principalmente de la configuración del sistema de protección contra caídas utilizado.
            li.li-azul.align-items-center
              .lista-ol--cuadro__vineta
                span 3
              | Plan de rescate:  estrategia o procedimiento previamente planificado, para la recuperación segura de una persona que se ha dejado caer de una superficie de trabajo y ha quedado suspendida en un arnés de cuerpo completo. Incluyendo auto rescate, asistencia de rescate o métodos mecánicos.
            li.li-azul.align-items-center
              .lista-ol--cuadro__vineta
                span 4
              | Trabajo en altura:  se denomina así, a toda labor o desplazamiento que se realice a 1.50 metros o más sobre un nivel inferior.


    h3(data-aos="fade-right").mb-5
      i.fas.fa-square.cac.me-3
      |Primeros auxilios

    .row.justify-content-center.mt-3.mb-4
      .col-lg-8
        .cajon.color-secundario.p-3
          p Los primeros auxilios son un conjunto de acciones y técnicas para dar atención inmediata a la persona afectada para que la lesión no empeore, hasta que se disponga de asistencia médica especializada. La progresión de las heridas depende de estas acciones.

    p.mb-4 A continuación, se listan algunos consejos generales que se deben seguir al administrar los primeros auxilios:

    .row.justify-content-center.mt-3.mb-4
      .col-lg-6
        ol.lista-ol--separador.color-check-verde
          li
            i.fas.fa-check
            |            Mantener vivo al accidentado.
          li
            i.fas.fa-check
            |            Evitar nuevas lesiones o complicaciones.
          li
            i.fas.fa-check
            |           Poner al accidentado lo antes posible en manos de servicios médicos.
          li
            i.fas.fa-check
            |           Aliviar el dolor.
          li
            i.fas.fa-check
            |           Evitar infecciones o lesiones secundarias.
          li
            i.fas.fa-check
            |            Actuar con rapidez, pero conservando la calma.
          li
            i.fas.fa-check
            |            Evitar aglomeraciones.
          li
            i.fas.fa-check
            |            Saber imponerse.
      .col-lg-6
        ol.lista-ol--separador.color-check-verde
          li
            i.fas.fa-check
            |            No mover a la persona herida, salvo que sea imprescindible.
          li
            i.fas.fa-check
            |            Traslado adecuado.
          li
            i.fas.fa-check
            |            No dar al herido de beber, comer o medicar.
          li
            i.fas.fa-check
            |            Tranquilizar al herido.
          li
            i.fas.fa-check
            |            Mantener al herido caliente.
          li
            i.fas.fa-check
            |            Hacer solo lo imprescindible.
          li
            i.fas.fa-check
            |            Si no se sabe, abstenerse.



    h3(data-aos="fade-right").my-5
      i.fas.fa-square.cac.me-3
      |Reporte de incidentes y accidentes laborales


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El reporte de accidente laboral es un Informe o documento que recopila información de primera mano sobre un evento que resultó en una lesión o muerte en el trabajo. El objetivo es identificar, prevenir y mitigar los riesgos, evitando así nuevos accidentes o incidentes similares. Este tipo de registros no siempre se muestran con la inmediatez requerida y esperada. Esto se debe en gran parte a la falta de comprensión de lo que es un reporte de accidente. El formato único de reporte de accidentes de trabajo - FURAT es un documento que debe ser diligenciado por el empleador o contratante, o sus respectivos representantes o delegados, de conformidad con la Resolución 156 de 2015.


    img(src='@/assets/curso/temas/tema4/tema4-img-decorativa-01.svg', alt='Texto que describa la imagen').tema4-img-decorativa-01


    h3(data-aos="fade-right").my-5
      i.fas.fa-square.cac.me-3
      |Rescate y auto rescate

    .row.mt-5.mb-4
      .col-lg-7
        p.mb-1 El rescate es la capacidad de sacar a una persona de un espacio confinado o de una altura. Siempre debe ser uno de los componentes a considerar en un plan de protección contra caídas. Sus principios básicos son:
        ul.margin-left-ul-li.lista-ul--color.color-check-verde
          li
            i.fas.fa-check
            | Garantizar la seguridad del herido.
          li
            i.fas.fa-check
            | No agravar las lesiones.
          li
            i.fas.fa-check
            | Ahorrar tiempo y esfuerzo.
          li
            i.fas.fa-check
            | Rentabilizar esfuerzos.
      .col-lg-3
        img(src='@/assets/curso/temas/tema4/tema4-img-03.svg', alt='Texto que describa la imagen')
      .col-lg-2
        img(src='@/assets/curso/temas/tema4/tema4-img-04.svg', alt='Texto que describa la imagen')

    p.mb-4 El auto rescate es una acción o evento en el cual un trabajador usa equipo de protección contra caídas para salvarse a sí mismo o a otros.


    h3(data-aos="fade-right").my-5
      i.fas.fa-square.cac.me-3
      |Plan de rescate

    .position-relative.d-none.d-lg-block(style="margin-bottom: 148px")
      .d-flex.background-1.mb-5
        .crd.clr-yellow
          p.p-3 Un plan de rescate es cualquier actividad planificada, registrada, comunicada y ejecutada a los trabajadores que han caído desde una altura. Debe corresponder a acciones que garanticen una respuesta regular y segura de acuerdo con las fases realizadas. Están diseñados para los riesgos de las operaciones realizadas en altura y requieren la asignación de equipos, brigadistas o personal capacitado para tal fin.<br><br> El plan de rescate podrá ser propio o contratado y estar relacionado con cualquier accidente o incidente que pueda ocurrir en el lugar de trabajo y su ejecución.

    .d-block.d-lg-none

      .cajon.color-acento-botones.p-3
        p Un plan de rescate es cualquier actividad planificada, registrada, comunicada y ejecutada a los trabajadores que han caído desde una altura. Debe corresponder a acciones que garanticen una respuesta regular y segura de acuerdo con las fases realizadas. Están diseñados para los riesgos de las operaciones realizadas en altura y requieren la asignación de equipos, brigadistas o personal capacitado para tal fin.<br><br> El plan de rescate podrá ser propio o contratado y estar relacionado con cualquier accidente o incidente que pueda ocurrir en el lugar de trabajo y su ejecución.



    img(src='@/assets/curso/temas/tema4/tema4-img-decorativa-02.svg', alt='Texto que describa la imagen').tema4-img-decorativa-02
    img(src='@/assets/curso/temas/tema4/tema4-img-decorativa-03.svg', alt='Texto que describa la imagen').tema4-img-decorativa-03

    h3(data-aos="fade-right").my-5
      i.fas.fa-square.cac.me-3
      |Recomendaciones de seguridad y mantenimiento en situación de auto rescate


    p.mb-4 El trabajador que se encuentre en las alturas y sufra una caída, deberá utilizar su propio equipo de rescate, como se indica a continuación:

    .row.justify-content-center.mt-3.mb-5
      .col-lg-11
        .row.mb-0
          .col-lg-6
            .avatar-01
              .tarjeta-avatar.tarjeta-t4-1
                .tarjeta.color--secundario.p-4
                  .row.align-items-center
                    .col-lg-3
                      img(src='@/assets/curso/temas/tema4/tema4-img-06.svg' alt='AvatarTop').numeros-listado
                    .col-lg-9
                      p El trabajador intentará subir nuevamente al nivel del cual cayó (a unos cuantos centímetros a 0.60 o 0.90 metros).
          .col-lg-6
            .avatar-01
              .tarjeta-avatar
                .tarjeta.color--secundario.p-4
                  .row.align-items-center
                    .col-lg-3
                      img(src='@/assets/curso/temas/tema4/tema4-img-07.svg' alt='AvatarTop').numeros-listado
                    .col-lg-9
                      p El trabajador con equipo suspendido y que no pueda regresar a la estructura en la que estaba trabajando, deberá tomar una cuerda de seguridad, asegurarla al lazo lateral del arnés y colocar los pies sobre ella para evitar lesiones por la suspensión; de esta forma el trauma de suspensión se reduce o elimina mientras es rescatado por las personas encargadas de dicha labor.

        .row
          .col-lg-6
            .avatar-01
              .tarjeta-avatar
                .tarjeta.color--secundario.p-4
                  .row.align-items-center
                    .col-lg-3
                      img(src='@/assets/curso/temas/tema4/tema4-img-08.svg' alt='AvatarTop').numeros-listado
                    .col-lg-9
                      p.p-3 El trabajador que esté suspendido del equipo, pero no cuenta con los elementos de protección indicados, deberá, para evitar lesiones por ahorcamiento, levantar las piernas hasta el pecho y sujetarlas con brazos y manos durante 10 segundos antes de bajarlas y repetir continuamente dicha acción mientras sus compañeros rescatistas lo salvan.
          .col-lg-6
            .avatar-01
              .tarjeta-avatar.tarjeta-t4-4
                .tarjeta.color--secundario.p-4
                  .row.align-items-center
                    .col-lg-3
                      img(src='@/assets/curso/temas/tema4/tema4-img-09.svg' alt='AvatarTop').numeros-listado
                    .col-lg-9
                      p.p-3 El trabajador guardará las piezas, las rotulará con el nombre, la fecha, la actividad en el momento del lanzamiento y las entregará al responsable.

    .row.justify-content-center.mt-5
      .col-lg-9
        .cajon.color-acento-botones.p-3
          p Estimado Aprendiz, ha llegado al final del componente formativo. Se espera que siga disfrutando de este camino hacia el aprendizaje. No olvide explorar los recursos disponibles. Acceda al menú principal para obtener una descripción general de los temas abordados en este momento; encontrará actividades didácticas, recursos adicionales, entre otros.



</template>

<script>
export default {
  name: 'Tema4',
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
