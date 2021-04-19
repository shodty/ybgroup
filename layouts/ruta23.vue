<template lang='pug'>
div
  IconButtons(:darkmode='false')
  nuxt
  MobileMenu
</template>

<script>
import MobileMenu from '~/components/MobileMenu.vue'
import IconButtons from '~/components/IconButtons.vue'

export default {
  components: {
    MobileMenu,
    IconButtons
  }
}
</script>

<style lang="stylus">

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@font-face {
    font-family: 'cardinal_grotesque_condenseBd';
    src: url('../assets/fonts/cardinalgrotesquecondensed-bold-webfont.woff2') format('woff2'),
         url('../assets/fonts/cardinalgrotesquecondensed-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'cardinal_grotesque_wideSBd';
    src: url('../assets/fonts/cardinalgrotesquewide-semibold-webfont.woff2') format('woff2'),
         url('../assets/fonts/cardinalgrotesquewide-semibold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'goopersemibold_italic';
    src: url('../assets/fonts/gooper-semibolditalic-webfont.woff2') format('woff2'),
         url('../assets/fonts/gooper-semibolditalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'ruta_23regular';
    src: url('../assets/fonts/ruta-regular_v1-webfont.woff2') format('woff2'),
         url('../assets/fonts/ruta-regular_v1-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

.hide-on-mobile {
  @media(max-width: 767px) {
    display: none !important
  }
}

.hide-on-desktop {
  @media(min-width: 768px) {
    display: none !important;
  }
}

.show-on-ipad {
  @media(min-width: 1140px) {
    display: none !important;
  }
}

.hide-on-ipad {
  @media(max-width: 1139px) {
    display: none !important;
  }
}

.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}

.button
  background-color: #2752ff;
  color: white;
  border: none;
  font-size: 1.2rem;
  padding: 10px 17px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition background-color .2s ease

.button:hover, .button:focus
    background-color: #f26760;

.button:disabled
    background: #bfbfbf;
    cursor: not-allowed;

</style>
