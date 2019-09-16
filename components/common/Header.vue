<template lang="pug">
  header.bg-light
    b-container
      b-row
        b-col(md="7")
          router-link.center-align(:to="'/'" target="_self")
            img(src="@/static/media/images/logo_is.jpg" alt='logo interseguro')
        b-col(md="5")
          b-row
            b-col.d-flex
              img(src="@/static/media/images/logo_is.jpg" alt="icono")
              h5 Alexander Cerna
              span Agente
            b-col
              h4 Option to save
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
