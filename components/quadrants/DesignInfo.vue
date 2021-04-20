<template lang="pug">
#design-info
    transition(name="fade" mode="out-in")
        .overview(v-if='design == "overview"' index0)
            p.design-services Overview
            span.design-overview(v-if='toggleHeaders') DESIGN
            img.hide-on-ipad(v-if='toggleHeaders' src="../../assets/icons/design-icons.png" height="40px")
            p.design-copy We work to effectively communicate the story of your brand, product, or project to your audience. Whether that story is told through the packaging your product comes in, your website, or the logo that serves as the face of your brand, our team strategizes from the ground-up to craft the most effective solution and follow it through from conception to execution. Building you a strong foundation and developing systems for continued excellence is our bread & butter.
        .branding(v-else-if='design == "branding"' index1)
            p.design-services Branding
            span.design-overview(v-if='toggleHeaders') DESIGN
            img.hide-on-ipad(v-if='toggleHeaders' src="../../assets/icons/design-icons.png" height="40px")
            p.design-copy A brand is more than a logo. It is every touchpoint a person has with your company; from the way you communicate to the aesthetic of each digital or physical piece of collateral. We can help you develop those touchpoints to successfully tell the story of your brand. Whether you need to re-work your current brand or build one from the ground up, we are equipped to help you discover your authentic brand identity.
        .packaging(v-else-if='design == "packaging"' index3)
            p.design-services Packaging
            span.design-overview(v-if='toggleHeaders') DESIGN
            img.hide-on-ipad(v-if='toggleHeaders' src="../../assets/icons/design-icons.png" height="40px")
            p.design-copy Designing packaging that not only looks beautiful but clears all the compliance and regulatory hurdles to get your product on the shelf is no small feat. Our team is well-versed in the entire packaging production pipeline, allowing us to help you R&D the packaging for your next product line, find vendors, prototype, create dielines, design, print prep, and execute production at scale.
        .motion(v-else-if='design == "motion"' index2)
            p.design-services Motion
            span.design-overview(v-if='toggleHeaders') DESIGN
            img.hide-on-ipad(v-if='toggleHeaders' src="../../assets/icons/design-icons.png" height="40px")
            p.design-copy Motion breathes a fourth dimension into traditional graphic design touchpoints by allowing your brand elements to dance, morph, interact, and communicate over time. In today's digital world of byte-sized attention spans, we love conceptualizing and executing motion pieces that quickly catch the eye of your audience and communicate to them with style and respect for their time.

</template>

<script>

export default {
  props: {
    design: { type: String, default: 'overview' },
    toggleHeaders: { type: Boolean, default: true }
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
    font-size 3.5vw
    line-height: .35

.design-overview
    font-size 2vw
    line-height 1
    font-family: 'goopersemibold_italic'
    letter-spacing 5px

.design-copy
    font-size 1vw

</style>
