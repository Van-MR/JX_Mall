<template>
    <div class="tabbar">
      <div class="bottom">
        <router-link to="/home"><img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png" alt=""></router-link>
        <router-link to="/sorts"><img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png" alt=""></router-link>
        <router-link to="/sesscions"><img src="http://img08.jiuxian.com/bill/2017/0913/e870924b77454f8a93cdde5ff1c4b3f8.png" alt=""></router-link>
        <router-link to="/market"><img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png" alt=""></router-link>
        <router-link to="/mine"><img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png" alt=""></router-link>
      </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {   
    };
  }
}
</script>
    
<style lang="css" scoped>
.tabbar{
  position: fixed;
  left:0;
  bottom:0;
  background:#f1f1f1;
  border-top:1px solid #cccccc;
  width:100%;
  height:42px;
  z-index:1000;
} 
.bottom{
  display:flex;
}
.tabbar a{
  text-decoration:none;
  width:42px;
  height: 42px;
  margin:0 auto;
}
.tabbar img{
  width:100%;
}
</style>