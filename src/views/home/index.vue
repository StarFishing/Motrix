<template>
  <div>
    <div style="height:800px;background:red">hello</div>
    <div style="height:600px;background:blue">hello</div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped></style>
