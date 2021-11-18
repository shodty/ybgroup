<template lang="pug">
#icon-strip.hide-on-mobile
    nuxt-link(to="/blacksupper")
        img(src="../assets/icons/blacksupper.png")
    a(href="https://instagram.com/yellowbrickgroup")
        img.pad-more(src="../assets/icons/ig.png")
    nuxt-link(to="/ruta23")
        img(src="../assets/icons/ruta.png")
    nuxt-link(to="/mailservice")
        img(src="../assets/icons/mail.png")
</template>
<script>
export default {
  name: 'IconHeader'

}
</script>
<style lang="stylus">
#icon-strip
    height: 3vh
    overflow: hidden
    position absolute
    right .5vh
    top 1vh
    z-index: 100000
#icon-strip img
    float left
    height: 2.5vh
    display block
    padding-right 12px
    object-fit cover
    @media (max-width: 767px) {
        padding-right 3%
    }

.pad-more
    padding-right 15px !important
    @media (max-width: 767px) {
        padding-right 4% !important
    }
</style>
