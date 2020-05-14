<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import { report } from './common/js/report'

@Component
export default class ClassName extends Vue {
  created() {
    report()
  }
}
</script>
