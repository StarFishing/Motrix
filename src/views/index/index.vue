<template>
  <div class="layout">
    <Header v-model="isOpen"></Header>
    <Nav :navs="navs"></Nav>
    <Container>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </Container>
  </div>
</template>

<script>
import Header from '@/compoents/Header/index.vue'
import Nav from '@/compoents/Nav/index.vue'
import Container from '@/compoents/Container/index.vue'
export default {
  name: 'HomePage',
  components: {
    Header,
    Nav,
    Container,
  },
  data() {
    return {
      isOpen: false,
      navs: [
        {
          name: '首页',
          link: '/index',
        },
        {
          name: '特性',
          link: '/',
        },
        {
          name: '支持',
          link: '/support',
        },
        {
          name: '更新',
          link: '/',
        },
        {
          name: '实验室',
          link: '/',
        },
        {
          name: '许可',
          link: '/',
        },
      ],
    }
  },
  watch: {
    isOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
  },
}
</script>

<style lang="stylus">
@import '~@/common/style/base.styl'
.layout
  min-height 100vh
  background #ebecf0
</style>
