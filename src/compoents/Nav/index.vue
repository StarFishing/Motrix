<template>
  <nav class="pages-nav" :class="setClass">
    <div class="pages-nav--item" v-for="(item, index) in navs" :key="index">
      <em>
        <a @click="handleClick(item.link)" class="link link-page">
          {{ item.name }}
        </a>
      </em>
    </div>
    <div class="pages-nav--item pages-nav--item--social">
      <a href="https://github.com/StarFishing" class="link link-social">
        <i class="mogit iconfont icon"></i>
      </a>
      <a href="https://github.com/StarFishing" class="link link-social">
        <i class="motwitter-fill iconfont icon"></i>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
type NAV = {
  name: string
  link: string
}

@Component({
  components: {},
})
export default class Nav extends Vue {
  @Prop({ type: Array, default: () => [] })
  navs!: Array<NAV>

  get setClass() {
    let isOpen = (this.$parent as any).isOpen
    return isOpen ? 'pages-nav--open' : ''
  }

  handleClick(link: string) {
    if (link === window.location.pathname) return
    let $parent = this.$parent as any
    $parent.isOpen = false
    this.$router.push({ path: link })
  }
}
</script>

<style lang="stylus" scoped>
@import 'http://at.alicdn.com/t/font_1817736_cvu4no2lug6.css'
@media screen and (min-width: 768px)
  .pages-nav--item
    width 50%
    padding 0 10%
@media screen and (min-width: 1200px)
  .pages-nav--item
    width 33.3%
.pages-nav
  display flex
  flex-wrap wrap
  justify-content flex-start
  align-items center
  box-sizing border-box
  position absolute
  top 80px
  left 0
  width 100%
  height 25vh
  text-align left
  padding 0 20px
  pointer-events none
  opacity 0
  background transparent
  transition transform 1.2s, opacity 1.2s
  transition-timing-function cubic-bezier(0.2, 1, 0.3, 1)
  transform translate3d(0, 150px, 0)
  &--item
    padding 8px 0
    text-align center
    box-sizing border-box
    em
      font-style normal
      display inline-block
    &--social
      width 100%
      opacity 0
      font-size 1rem
      transition transform 1.2s, opacity 1.2s
      transition-timing-function cubic-bezier(0.2, 1, 0.3, 1)
      transform translate3d(0, 20px, 0)
      .link-social
        font-size 1.25rem
        text-align center
        margin 0 2rem
        display inline-block
        color #969799
        .icon
          font-size 20px
        &:hover
          color #5c5edc
  &--open
    opacity 1
    transform translate3d(0px, 0vh, -350px)
    pointer-events auto
    .pages-nav--item--social
      opacity 1
      transition-delay 0.35s
      transform translateZ(0)
.link
  text-decoration none
  outline none
  font-size 0.875rem
  font-weight 700
  position relative
  letter-spacing 1px
  text-transform uppercase
  transition color 0.25s linear
  cursor pointer
  &-page
    display block
    color #646466
    &:hover
      color #4b4b4d
  &:not(.link-social):before
    content ''
    position absolute
    top 100%
    left 50%
    width 100%
    height 2px
    margin 5px 0 0 -50%
    background #fff
    transition transform 0.3s
    transform scaleX(0)
  &-page:hover:before
    transform scaleX(1)
</style>
