<template>
    <div id="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="http://img07.jiuxian.com/bill/2017/0930/a4227a3cd67a4c4ea84f8e6af63e24bf.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="http://img08.jiuxian.com/bill/2017/0930/67fab8e37e164f8e82474c959930b04d.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="http://img07.jiuxian.com/bill/2017/0930/e9da738e14ea4436890b34ec5fe78932.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="http://img08.jiuxian.com/bill/2017/0930/ce9e4deac06a4a70b3bb8e05ca5fb11c.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="http://img09.jiuxian.com/bill/2017/0930/1b4cb612ed6e4c398bad04348b952dde.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="http://img10.jiuxian.com/bill/2017/0930/4efea781bd1745e48d8c60b5a7721bb7.jpg">
            </div>      
        </div>
        <div class="swiper-pagination"></div>
   </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: "component_name",
  data () {
    return { 
    };
  },
    mounted(){
      Vue.nextTick(function(){
            var myswiper = new Swiper ('.swiper-container', {
            pagination : '.swiper-pagination',
            loop: true,
            speed: 1000,
            autoplay: 2000,
            observer: true
            })
            // console.log(myswiper)
      })
    }
}

</script>
    
<style lang="css" scoped>
 @import url("/static/css/swiper.min.css");
    .swiper-slide img{
        width:100%;
        /* height:.9rem; */
    }
</style>