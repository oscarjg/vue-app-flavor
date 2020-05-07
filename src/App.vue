<template>
  <div class="page-wrapper">
    <div id="root" class="root">
        <div class="content-wrapper">
            <component :is="headerComponent"></component>
            <div class="content-wrapper__central-layout">
              <router-view></router-view>
            </div>
            <Footer />
        </div>
    </div>
</div>
</template>

<style lang="scss">
    html {
      height: 100%;
    }
    body {
        min-height: 100%;
        height: inherit;
    }
    .page-wrapper {
        min-height: 100%;
        height: inherit;
        background: #FFFF;
    }
    @media (min-width: 600px) {
        .page-wrapper {
            padding-top: 50px;
            padding-bottom: 50px;
        }
        .root {
            width: 465px;
            margin: auto;
        }
    }
    .root {
        text-align: left;
        flex-grow: 0;
        min-height: 100%;
        overflow: auto;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
        
        &::-webkit-scrollbar{
            display: none;
        }
    }
    .root, .content-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        background: #fff;
        overflow: auto;
    }
    .content-wrapper__central-layout {
        flex-grow: 1;
        overflow: auto;
        background: rgb(233, 226, 226);
        &::-webkit-scrollbar{
            display: none;
        }
    }
</style>

<script>

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  computed: {
      headerComponent() {
          return this.$route.meta.headerComponent || 'header-common'
      }
  }
}
</script>
