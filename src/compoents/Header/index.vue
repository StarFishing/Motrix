<template>
  <div class="header" :style="{ background: isOpen ? '#ebecf0' : '' }">
    <h1 class="logo">S.R</h1>
    <button
      :class="{ 'menu-button': true, 'menu-button--open': isOpen }"
      @click="handleMenuClick"
    >
      <span :style="{ opacity: isOpen ? 0 : 1 }">Menu</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  model: {
    prop: 'isOpen', //这个字段，是指父组件设置 v-model 时，将变量值传给子组件的 msg
    event: 'menuClick', //这个字段，是指父组件监听 parent-event 事件，也可以是自己定义的名字
  },
  props: {
    isOpen: Boolean, //此处必须定义和model的prop相同的props，因为v-model会传值给子组件
  },

  methods: {
    handleMenuClick() {
      window.scrollTo(0, 0)
      this.$emit('menuClick', !this.isOpen)
    },
  },
}
</script>

<style lang="stylus" scoped>
.header
  top 0
  left 0
  width 100vw
  position fixed
  height 80px
  z-index 1000
  background-color hsla(0, 0%, 100%, 0.75)
  .logo
    position absolute
    left 28px
    color rgba(38,38,48,.9)
  .menu-button
    position absolute
    width 30px
    height 24px
    padding 0
    cursor pointer
    border none
    outline none
    background transparent
    top 28px
    right 48px
    &:before
      content ''
      position absolute
      top 50%
      left 0
      width 100%
      height 2px
      border-radius 2px
      pointer-events none
      transition transform 0.25s
      transform-origin 50% 50%
      transform translate3d(0, -10px, 0) scaleX(0.8)
    &--open:before
      transform rotate(45deg)
    &:after
      content ''
      position absolute
      top 50%
      left 0
      width 100%
      height 2px
      border-radius 2px
      pointer-events none
      transition transform 0.25s
      transform-origin 50% 50%
      transform translate3d(0, 10px, 0) scaleX(0.8)
    &--open:after
      transform rotate(-45deg)
    span
      position absolute
      left 0
      overflow hidden
      width 100%
      height 2px
      text-indent 200%
      transition opacity 0.25s
    &:before, &:after, span
      background #5f656f
</style>
