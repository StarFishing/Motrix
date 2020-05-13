<template>
  <div
    class="page-stack"
    :class="{ 'page-stack-open': !!setStyle }"
    @click="handleClick"
  >
    <div class="page page-one" :style="setStyle">
      <div class="page-inner"><slot></slot></div>
    </div>
    <div
      class="page page--inactive page-two "
      :style="{ transform: !!setStyle ? 'translate3d(0px, 60vh, -250px)' : '' }"
    ></div>
    <div
      class="page page--inactive page-three"
      :style="{ transform: !!setStyle ? 'translate3d(0px, 60vh, -300px)' : '' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class HomePage extends Vue {
  get setStyle() {
    let isOpen = (this.$parent as any).isOpen
    return isOpen
      ? 'transform: translate3d(0px, 60vh, -200px);cursor:pointer'
      : ''
  }
  handleClick() {
    let $parent = this.$parent as any
    if ($parent.isOpen) {
      $parent.isOpen = !$parent.isOpen
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-stack
  z-index 100
  pointer-events none
  perspective 1200px
  perspective-origin 50% -50%
  .page
    position relative
    overflow-x hidden
    width 100%
    min-height 100vh
    pointer-events auto
    background #fff
    box-shadow 0 -1px 10px rgba(0, 0, 0, 0.1)
    transition transform 0.4s, opacity 0.4s
    transition-timing-function cubic-bezier(0.6, 0, 0.4, 1)
    &.page-one
      z-index 130
      opacity 1
      transform translate3d(0px, 0px, 0px)
    &-inner
      padding 80px 8vw 60px
    &--inactive
      position absolute
      z-index 0
      top 0
      opacity 0
      display none
    &-two
      z-index 120
      opacity .9
      transform: translate3d(0px, 100%, 0px);
    &-three
      z-index 110
      opacity .8
      transform translate3d(0px, 100%, 0px)
  &-open
    .page--inactive
      display block
    .page
      height 100vh
      overflow hidden
</style>
