<template>
  <div class="ifram-content">
    <iframe
      ref="ifram"
      src=""
      frameborder="0"
      width="100%"
      srcdoc=""
      class="frame-wrapper"
    ></iframe>
    <div class="options">
      <div class="prev btn" @click="preDoc">前一步</div>
      <div class="next btn" @click="nextDoc">后一步</div>
    </div>

    <div class="footer">
      <p>
        本页面作为演示页面，不在用户操作上报范围内，退出本页面则继续跟踪演示
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import { getBehaviors } from '@/api/record'
import { removeReport } from '@/common/js/report'
@Component({
  components: {},
})
export default class Feature extends Vue {
  behaviors: Array<any> = []
  index = -1
  created() {
    removeReport()
    getBehaviors().then(res => {
      this.behaviors = res.data.data
      this.nextDoc()
    })
  }

  nextDoc() {
    if (this.index === this.behaviors.length - 1) return
    let ifram = this.$refs.ifram as any
    ++this.index
    ifram.srcdoc = `${this.behaviors[this.index].content}`
  }
  preDoc() {
    if (this.index <= 0) return
    let ifram = this.$refs.ifram as any
    --this.index
    ifram.srcdoc = `${this.behaviors[this.index].content}`
  }
}
</script>

<style lang="stylus" scoped>
.frame-wrapper
  box-shadow 4px 2px 20px 0px rgba(0, 0, 0, 0.15)
  height 70vh
.options
  color #fff
  text-align center
  margin-top 40px
.btn
  user-select none
  cursor pointer
  display inline-block
  width 180px
  height 40px
  text-align center
  vertical-align middle
  background-color #2b2b2b
  font-size 16px
  font-weight 700
  line-height 40px
  border-radius 20px
  border none
  transition all 0.5s cubic-bezier(0.08, 0.82, 0.17, 1)
  margin-right 20px
.footer
  position fixed
  bottom 0
  text-align center
  left 0
  right 0
  color rgba(38, 38, 48, 0.7)
</style>
