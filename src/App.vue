<template>
  <div id="app">
      <!-- <hello></hello> -->
      <tab-bar v-show="isShowTabBarFn"></tab-bar>
      <!-- 使用router-view组件 标签 进行组件显示 -->  
      <router-view></router-view>
  </div>
</template>
<script>
import TabBar from './pages/TabBar' 
export default {
  name: 'app',
  components: {
    TabBar
  },
  methods:{
  },
  computed:{
     isShowTabBarFn(){
      //  console.log(this.$route.path)
       return this.$route.path == '/' || this.$route.path == '/home'
     }
  }
}
</script>
<style>
@import '../static/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
