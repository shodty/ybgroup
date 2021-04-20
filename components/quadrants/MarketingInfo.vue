<template lang="pug">
#marketing-info
    transition(name="fade" mode="out-in")
        .overview(v-if='market == "overview"' index0)
            p.marketing-services Overview
            span.marketing-overview MARKETING
            img.hide-on-ipad(src="../../assets/icons/marketing-icons.png" height="40px")
            p.marketing-copy Creating with purpose, intent and a cohesive strategy in mind is what we do best.
                |  Work with our creative team to not only develop an effective and compelling strategy but
                |  to also manage and execute the plan in a collaborative manner.
        .branding(v-else-if='market == "lifestyle"' index1)
            p.marketing-services Lifestyle Marketing
            span.marketing-overview MARKETING
            img.hide-on-ipad(src="../../assets/icons/marketing-icons.png" height="40px")
            p.marketing-copy Our strength is helping our clients tie it all together.
                |  Whether it’s a product or service you offer, we enjoy synthesizing all
                |  of your various marketing efforts into an effective and on-brand strategy.

        .packaging(v-else-if='market == "content"' index3)
            p.marketing-services Content Creation
            span.marketing-overview MARKETING
            img.hide-on-ipad(src="../../assets/icons/marketing-icons.png" height="40px")
            p.marketing-copy In today’s digital landscape the ability to tell your story through
                |  meaningful, impactful and contextual content is essential to compete in any industry.
                |  We specialize in and enjoy the process of creating custom content that is unique and on brand.
        .motion(v-else-if='market == "activation"' index2)
            p.marketing-services Brand Activation
            span.marketing-overview MARKETING
            img.hide-on-ipad(src="../../assets/icons/marketing-icons.png" height="40px")
            p.marketing-copy Every brand has a story to tell and what we’ve found is that the truest way
                |  of telling it is often in person, getting physical, and wrapping oneself into the experience
                |  of a brand rather than the consumption of it.

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
    font-size 3.5vw
    line-height: .35;

.marketing-overview
    font-size .7em
    line-height 1
    font-family: 'goopersemibold_italic'
    letter-spacing 5px

.marketing-copy
    font-size 1.1vw

</style>
