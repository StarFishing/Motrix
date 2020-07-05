<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="left-content">
        <p class="desc">
          There is no cure for birth and death save to enjoy the interval
        </p>
      </div>
      <div class="right-content">
        <img
          src="https://i.loli.net/2020/07/05/AYfsNKe12mLpQJ6.jpg"
          class="preview-content"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.content
  overflow hidden
  display flex
  height 100%
  h2
    color rgba(38, 38, 48, 0.9)
.left-content
  flex 1
  margin-right 10px
.desc
  font-size 2.2rem
  line-height 40px
  background url("https://i.loli.net/2020/07/05/AYfsNKe12mLpQJ6.jpg")
  background-size contain
  background-clip text
  -webkit-background-clip text
  color transparent
  font-weight 900
  margin-top 10vh
  user-select none
  text-align center
.right-content
  flex 1
  img
    margin-top 4rem
    width 100%
    transition all 0.5s
    cursor pointer
    border-radius 5px
</style>
