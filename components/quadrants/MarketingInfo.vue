<template lang="pug">
#marketing-info
    transition(name="fade" mode="out-in")
        .overview(v-if='market == "overview"' key=10)
            p.marketing-services Overview
            span.marketing-overview MARKETING
            img(src="../../assets/icons/marketing-icons.png" height="40px")
            p.marketing-copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                | sed diam nonummy nibh euismod tincidunt ut laoreet
                | dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                | veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                | nisl ut aliquip ex ea commodo consequat. Duis autem
        .branding(v-else-if='market == "lifestyle"' key=11)
            p.marketing-services Lifestyle Marketing
            span.marketing-overview MARKETING
            img(src="../../assets/icons/marketing-icons.png" height="40px")
            p.marketing-copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                | sed diam nonummy nibh euismod tincidunt ut laoreet
                | dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                | veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                | nisl ut aliquip ex ea commodo consequat. Duis autem
        .packaging(v-else-if='market == "content"' key=13)
            p.marketing-services Content Creation
            span.marketing-overview MARKETING
            img(src="../../assets/icons/marketing-icons.png" height="40px")
            p.marketing-copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                | sed diam nonummy nibh euismod tincidunt ut laoreet
                | dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                | veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                | nisl ut aliquip ex ea commodo consequat. Duis autem
        .motion(v-else-if='market == "activation"' key=12)
            p.marketing-services Brand Activation
            span.marketing-overview MARKETING
            img(src="../../assets/icons/marketing-icons.png" height="40px")
            p.marketing-copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                | sed diam nonummy nibh euismod tincidunt ut laoreet
                | dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                | veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                | nisl ut aliquip ex ea commodo consequat. Duis autem

</template>

<script>

export default {
  props: {
    market: { type: String, default: 'overview' }
  }
}
</script>

<style lang="stylus">
@import '../../assets/styles/quadrants.css';

#marketing-info
    width 100%
    height 100%
    display: flex
    align-items: center
    overflow: hidden
    padding-left 12%
    padding-right 12%
    color black

#marketing-info img
    display inline
    padding-left 4%
    margin-top -12px

.marketing-services
    font-size 1.2em
    line-height .5

.marketing-overview
    font-size .7em
    line-height 1
    font-family: 'goopersemibold_italic'
    letter-spacing 5px

.marketing-copy
    font-size 22px

</style>
