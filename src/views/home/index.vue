<template>
  <div class="pege-one">
    <div class="content">
      <div class="left-content">
        <p class="desc">
          He can help you practice conversation and mark errors or not, of
          course, you can also choose to listen to the voice
        </p>
      </div>

      <img
        src="https://i.loli.net/2020/05/14/yWnU3QAYRucgk9G.png"
        class="right-img"
      />
    </div>

    <!-- <img src="https://i.loli.net/2020/05/14/ywHsuYnIGVtXNbx.png" /> -->
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
  .left-content
    overflow hidden
    float left
    width 40%
    h2
      color rgba(38, 38, 48, 0.9)
.desc
  font-size 2rem
  line-height 40px
  background linear-gradient(45deg, #ff36a5 25%, #0060ff 50%, #43008f 70%)
  background-clip text
  -webkit-background-clip text
  color transparent
  font-weight 900
  margin-top 10vh
  user-select none
.right-img
  max-height 80vh
  float right
  transition all 0.5s
  cursor pointer
  &:hover
    transform translate3d(-80px, 0, 0)
</style>
