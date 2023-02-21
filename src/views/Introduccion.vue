<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    img(src="@/assets/curso/intro/intro-img-decorativa-01.svg").intro-decorativa-01

    .row.intro-img.justify-content-around.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-5
        figure.p-4
          img(src='@/assets/curso/intro/intro-img-02.svg', alt='Texto que describa la imagen')
      .col-lg-7
        .clr.crd-paleWhite.p-3
          p Bienvenido estimado aprendiz, al desarrollo de este componente formativo, en el que se describirán los elementos necesarios para la protección personal durante trabajos en altura. Estos elementos están regulados por la normatividad vigente, en la cual también se pueden encontrar los protocolos de intervención ante accidentes como una caída. Además, se van a desarrollar conceptos teóricos como los sistemas y subsistemas de protección contra las caídas, los cuales se han consolidado a través de los años y cuentan con normas y protocolos de cumplimiento obligatorio.
          p Adicionalmente, se describirá la forma para realizar la inspección de los diversos equipos y elementos que se requieren en las actividades laborales. Por último, se explorará lo referente al rescate y auto rescate para brindarle los elementos teóricos necesarios para implementarlos en caso de ser necesario. Se mencionan acciones referidas a los primeros auxilios y los reportes de incidentes y/o accidentes de trabajo.

    p.mb-4 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


    .row
      figure.mb-5.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
