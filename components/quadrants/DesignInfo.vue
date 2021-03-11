<template lang="pug">
#design-info
    transition(name="fade" mode="out-in")
        .overview(v-if='design == "overview"' key=10)
            p.design-services Overview
            span.design-overview DESIGN
            img(src="../../assets/icons/design-icons.png" height="40px")
            p.design-copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                | sed diam nonummy nibh euismod tincidunt ut laoreet
                | dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                | veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                | nisl ut aliquip ex ea commodo consequat. Duis autem
        .branding(v-else-if='design == "branding"' key=11)
            p.design-services Branding
            span.design-overview DESIGN
            img(src="../../assets/icons/design-icons.png" height="40px")
            p.design-copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                | sed diam nonummy nibh euismod tincidunt ut laoreet
                | dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                | veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                | nisl ut aliquip ex ea commodo consequat. Duis autem
        .packaging(v-else-if='design == "packaging"' key=13)
            p.design-services Packaging
            span.design-overview DESIGN
            img(src="../../assets/icons/design-icons.png" height="40px")
            p.design-copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                | sed diam nonummy nibh euismod tincidunt ut laoreet
                | dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                | veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                | nisl ut aliquip ex ea commodo consequat. Duis autem
        .motion(v-else-if='design == "motion"' key=12)
            p.design-services Motion
            span.design-overview DESIGN
            img(src="../../assets/icons/design-icons.png" height="40px")
            p.design-copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                | sed diam nonummy nibh euismod tincidunt ut laoreet
                | dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                | veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                | nisl ut aliquip ex ea commodo consequat. Duis autem

</template>

<script>

export default {
  props: {
    design: { type: String, default: 'overview' }
  }
}
</script>

<style lang="stylus">

#design-info
    width 100%
    height 100%
    display: flex
    align-items: center
    overflow: hidden
    padding-left 12%
    padding-right 12%
    color white

#design-info img
    display inline
    padding-left 4%
    margin-top -12px

.design-services
    font-size 1.2em
    line-height .5

.design-overview
    font-size .7em
    line-height 1
    font-family: 'goopersemibold_italic'
    letter-spacing 5px

.design-copy
    font-size 22px

</style>
