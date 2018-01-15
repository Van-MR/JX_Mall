<template>
    <div id="zhuti">
       <div></div>
       <div></div>
       <div class="inner"><img src="../imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="../imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="../imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="../imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="../imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="../imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="../imgs/banner_1.jpg" alt=""></div>   
   </div>
</template>
    
<script>
export default {
  name: "zhuti",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    #zhuti{
        width: 100%;
        height: 20rem;
        background: red;
    }
    #zhuti div:nth-child(1){
        width: 100%;
        height: 0.65rem;
        background: skyblue;
    }
    #zhuti div:nth-child(2){
        width: 100%;
        height: 1.6rem;
        background: black;
    }
    .inner{
        width: 100%;
        height: 0.8rem;
        background: white;
    }
    .inner img{
        width: 100%;
        height: 100%;
        vertical-align:top;
    }
</style>