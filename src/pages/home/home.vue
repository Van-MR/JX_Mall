<template>
    <div id="home">
        <!-- 回到顶部 -->
        <a class="back" href="#">
            <img src="./imgs/jx-sprite.png" alt="">
        </a>
        <!-- 顶部 -->
       <nav>
           <div><img src="./imgs/jx-sprite.png" alt=""></div>
           <div><input type="text"><div><img src="./imgs/jx-sprite.png" alt=""></div></div> 
           <div>搜索</div>
       </nav>
       <!-- 轮播图 -->
       <div class="lunbo">
           <!-- <div><img src="./imgs/1.jpg" alt=""></div> -->
           <lunbo></lunbo>
       </div>
       <!-- 酒类 -->
        <div class="type">
           <div><router-link to="/baijiu"><img src="./imgs/nav1_1.jpg" alt=""></router-link></div>
           <div><router-link to="/putaojiu"><img src="./imgs/nav1_2.jpg" alt=""></router-link></div>
           <div><router-link to="/yangjiu"><img src="./imgs/nav1_3.jpg" alt=""></router-link></div>
           <div><router-link to="/nianfen"><img src="./imgs/nav1_4.jpg" alt=""></router-link></div>
           <div><router-link to="/laojiu"><img src="./imgs/nav1_5.jpg" alt=""></router-link></div>
        </div>
        <div class="type">
           <div><router-link to="/club"><img src="./imgs/nav2_1.jpg" alt=""></router-link></div>
           <div><router-link to="/jinxuan"><img src="./imgs/nav2_2.jpg" alt=""></router-link></div>
           <div><img src="./imgs/nav2_3.jpg" alt=""></div>
           <div><router-link to="/qincang"><img src="./imgs/nav2_4.jpg" alt=""></router-link></div>
           <div><router-link to="/xinpin"><img src="./imgs/nav2_5.jpg" alt=""></router-link></div>
       </div>
       <!-- banner -->
       <div class="banner">
           <img src="./imgs/nav_1.jpg" alt="">
       </div>
       <!-- 秒拍 -->
       <div class="miaopai">
           <h3>
              <span>掌上秒拍</span>
              <span>距结束
                    <span>{{timejs1}}</span>:<span>{{timejs2}}</span>:<span>{{timejs3}}</span>
              </span>
              <span>更多商品等你来抢！</span>
              <div><img src="./imgs/jx-sprite.png" alt=""></div>
            </h3>   
            <div class="box">
            <div class="div1">
                <!-- 商品 -->
                <div class="shop" v-for="item2 in list2"
                                    :key="item2.id" >
                    <!-- 商品图片 -->
                    <div><img :src="item2.proImg" alt=""></div>
                    <!-- 价格 -->
                    <div>
                        <span class="span_1">{{ item2.proName }}</span><br>
                        <span class="span_2">￥{{ item2.proPrice }}</span><br>
                        <span class="span_3">￥{{ item2.jxPrice }}</span>
                    </div>
                </div>
            </div>
            </div>
       </div>
       <!-- 图片div -->
        <div class="pic">
                <img src="http://img10.jiuxian.com/bill/2017/0925/ac0c9e58fbf2461d9cbf57deae674e6c.jpg" alt="">
        </div>
        <div class="pic">
                <img src="http://img08.jiuxian.com/bill/2017/0913/0f901fc73cec4fc1b323ce511bb9d78c.jpg" alt="">
        </div>
        <div class="pic">
                <img src="http://img09.jiuxian.com/bill/2017/0913/39996ca174024b7d84f1d8aea10c84d3.jpg" alt="">
        </div>
        <div class="pic">
                <img src="http://img09.jiuxian.com/bill/2017/0915/8c4dda3272bd46c5a37e9dc82882c8e5.jpg" alt="">
        </div>
         <div class="pic">
                <img src=" http://img09.jiuxian.com/bill/2017/0921/1ac605015cc74028b1bbdacfc42a82ff.jpg" alt="">
        </div>

    <!-- 手机专享 -->
        <div class="sjzx">
            <div><img src="./imgs/sjzx_1.jpg" alt=""></div>
            <div>
                <div><img src="./imgs/sjzx_2.jpg" alt=""></div>
                <div><img src="./imgs/sjzx_3.jpg" alt=""></div>
            </div>
        </div>
    <!-- 今日推荐 滑动 -->
    <div class="div2">
        <div class="jrtj">
            <div><img src="http://img06.jiuxian.com/bill/2017/0928/5e5053fabec943cd871b197e1505ba86.jpg" alt=""></div>
            <div><img src="http://img08.jiuxian.com/bill/2017/0928/1dfd21d861ea48e69d96a8c71fbb6c0e.jpg" alt=""></div>
            <div><img src="http://img10.jiuxian.com/bill/2017/0927/f2b2b903ed2d49c889d9867479753eda.jpg" alt=""></div>
            <div><img src="http://img07.jiuxian.com/bill/2017/0928/54c4d923f3a94366b0b0a77e46f34efa.jpg" alt=""></div>
            <div><img src="http://img07.jiuxian.com/bill/2017/0928/794b7e8fd80e4fb398351a53f34e9602.jpg" alt=""></div>
            <div><img src="http://img07.jiuxian.com/bill/2017/0927/3e57259d24144d26a5d4ec500cfb14fd.jpg" alt=""></div>
            <div><img src="http://img08.jiuxian.com/bill/2017/0926/b87ca934f97f47a0bd36c169e831af5f.jpg" alt=""></div>
            <div><img src="http://img09.jiuxian.com/bill/2017/0923/f95f336df9814680b3adb2798303bad3.jpg" alt=""></div>
            <div><img src="http://img07.jiuxian.com/bill/2017/0927/ed7a6e0189e3496daf6e13e4a7ef723d.jpg" alt=""></div>
            <div><img src="http://img07.jiuxian.com/bill/2017/0927/d8218d8c3c5d4fc2a1696daeb1684099.jpg" alt=""></div>
        </div>
    </div>
        <div class="pic">
                <img src="http://img09.jiuxian.com/bill/2017/0927/82081c37798b4c1ba65890b55ff3be96.jpg" alt="">
        </div>
                <div class="pic">
                <img src="http://img08.jiuxian.com/bill/2017/0922/bf964e8a0f554583b855b5a08b87a05c.jpg" alt="">
        </div>
                        <div class="pic">
                <img src="http://img10.jiuxian.com/bill/2017/0927/e2d9eeaf623d43b5945d1b129fb25065.jpg" alt="">
        </div>
        
        <!-- 精选频道 -->
        <div class="jxpd">
            <!-- 标题 -->
            <div><img src="./imgs/jxpd_1.jpg" alt=""></div>
            <div>
                <div><img src="./imgs/jxpd_2.jpg" alt=""></div>
                <div><img src="./imgs/jxpd_3.png" alt=""></div>
            </div>
            <div>
                <div><img src="./imgs/jxpd_4.jpg" alt=""></div>
                <div><img src="./imgs/jxpd_5.jpg" alt=""></div>
                <div><img src="./imgs/jxpd_6.jpg" alt=""></div>
            </div>
        </div>
        <!-- 中国白酒馆 -->
        <div class="zgbjg">
            <!-- 标题 -->
            <div><img src="./imgs/zgbjg_1.jpg" alt=""></div>

            <div>
                <div><img src="./imgs/zgbjg_2.jpg" alt=""></div>

                <div>
                    <div><img src="./imgs/zgbjg_3.jpg" alt=""></div>

                    <div>
                        <div><img src="./imgs/zgbjg_4.jpg" alt=""></div>
                        <div><img src="./imgs/zgbjg_5.jpg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 酒类商标logo -->
        <div class="jl_logo">
            <div><img src="./imgs/jl_logo_1.jpg" alt=""></div>
            <div><img src="./imgs/jl_logo_2.jpg" alt=""></div>
            <div><img src="./imgs/jl_logo_3.jpg" alt=""></div>
            <div><img src="./imgs/jl_logo_4.jpg" alt=""></div>
            <div><img src="./imgs/jl_logo_5.jpg" alt=""></div>
        </div>
    <!-- 主题街 -->
        <div class="ztj">
            <div><img src="./imgs/ztj_1.jpg" alt=""></div>

            <div>
                <div>
                    <img src="./imgs/ztj_2.jpg" alt="">
                </div>
                <div>
                    <img src="./imgs/ztj_3.jpg" alt="">
                </div>
                <div>
                    <img src="./imgs/ztj_4.jpg" alt="">
                </div>
                <div>
                    <img src="./imgs/ztj_5.jpg" alt="">
                </div>
                <div>
                    <img src="./imgs/ztj_6.jpg" alt="">
                </div>
                <div>
                    <img src="./imgs/ztj_7.jpg" alt="">
                </div>
                <div>
                    <img src="./imgs/ztj_8.jpg" alt="">
                </div>
                <div>
                    <img src="./imgs/ztj_9.jpg" alt="">
                </div>

            </div>
        </div>

        <!-- 爆款推荐 -->
        <div class="baokuan">爆款推荐</div>

        <div class="tuijian">
            <div v-for="item in list" 
                    :key="item.id">
                <div><img :src="item.commonProductInfo.imgPath " alt=""></div>
                <div>
                    <span class="span_1">{{ item.commonProductInfo.pname }}</span>

                    <p>
                        <span class="span_2">￥{{ item.commonProductInfo.actPrice }}</span>
                        <span class="span_3">￥{{ item.commonProductInfo.jxPrice }}</span>
                    </p>
                </div>
            </div>
            
        </div>
        <footer>
            <p>
                北京酒仙网络科技有限公司版权所有<br>
                北京市北京经济开发区经海五路58号院8栋4层<br>
                400-617-9999 <br>
                <a>关于我们</a>
            </p>
        </footer>
   </div>
</template>
  
<script>

//轮播
import Lunbo from './lunbo.vue'
export default {
  name: "home",
  data () {
    return {
        url:"./static/baokuan.json",
        url2:"./static/miaopai.json",
        list:[],
        list2:[],

    };
  },
  components:{
      Lunbo
  },
   computed: {
        timejs1() {   
            return this.$store.getters.js1;
        },
        timejs2() {   
            return this.$store.getters.js2;
        },
        timejs3() {   
            return this.$store.getters.js3;
        }
    },
    created(){
        this.$http.get(this.url).then(res =>{this.list = res.body.promoList;}),err =>{console.log(err);}
        this.$http.get(this.url2).then(res =>{this.list2 = res.body.killProList ;}),err =>{console.log(err);}
        var time = new Date().toString().split(":");
        time[0] = time[0].slice(-2);
        time[2] = time[2].slice(0,2);
        for(var i = 0;i<time.length;i++){
            time[i] = Number(time[i])
        }
        // setInterval(() => {
            this.$store.commit('CHANGETIME',time);
    // }, 1000)
    }
};

window.addEventListener('scroll',function(){
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
if(scrollTop>135){
//判断当滚到高度大于135时候 
//这里写要触发的事件
    document.getElementsByTagName('nav')[0].style.background = "rgba(231, 75, 72, 1)";
}
if(scrollTop<135){
//判断当滚到高度小于135时候
// console.log('300');
//这里写要触发的事件
    document.getElementsByTagName('nav')[0].style.background = "rgba(231, 75, 72, 0)";
}
},true);
</script>
    
<style lang="css" scoped>
/* 滚动条高度 */
::-webkit-scrollbar{
    height: 1px;
}
#home{
    /* height: 30rem; */
    position: relative;
}
.back{
    display: block;
    position: fixed;
    width: 0.5rem;
    height: 0.5rem;
    right: 0.1rem;
    top: 5rem;
    border-radius: 0.25rem;
    overflow: hidden;
    z-index: 10;
}
.back img{
    width: 450%;
    height: 150%;
    margin: -0.14rem 0 0 -1.52rem;
}
/* 顶部 */
nav{
    width: 100%;
    height: 0.4rem;
    background: rgba(231, 75, 72, 0);
    position: fixed;
    top: 0;
    z-index:10 ;
    transition: background 2s;
}
/*顶部logo  */
nav>div:nth-child(1){
    width: 0.7rem;
    height: 0.27rem;
    /* background: red; */
    float: left;
    margin: 0.06rem 0 0 0.1rem;
    overflow: hidden;
}
nav>div:nth-child(1) img{
    width: 350%;
    height:320%;
}
/* 搜索框 */
nav>div:nth-child(2){
    width: 2rem;
    height: 0.27rem;
    background: white;
    margin: 0.06rem 0 0 0.1rem;
    float: left;
    position: relative;
}
/* text */
nav>div:nth-child(2) [type = text]{
    width: 2rem;
    height: 0.27rem;
    outline: none;
    border: none;
    text-indent: 0.26rem;
    float: left;
    margin: 0.01rem 0 0 0;
    font-size: 0.12rem;
}
/* 搜索logo 父div */
nav>div:nth-child(2)>div{
    width: 0.23rem;
    height: 0.23rem;
    position: absolute;
    left: 0.02rem;
    overflow: hidden;
}
/* 搜索logo */
nav>div:nth-child(2) img{
    margin: 0.07rem 0 0 -0.63rem;
    width: 900%;
    height:300%;
}
/* 搜索按钮 */
nav>div:nth-child(3){
    font-size: 0.14rem;
    width: 0.5rem;
    height: 0.27rem;
    line-height: 0.28rem;
    color: white;
    margin: 0.06rem 0.1rem 0 0;
    float: right;
    /* background: black; */
    text-align: center;
}
/* 轮播图父div */
.lunbo{
    width: 100%;
    height: 1.75rem;
    overflow: hidden;
}
.lunbo>div{
    width: 100%;
    height: 100%;
}
.lunbo>div img{
    width: 100%;
    height: 100%;
}
/* 弹性盒子 种类 */
.type{
    width: 100%;
    height:  0.7rem;
    display: flex;
    justify-content: space-around;
}
/* 弹性盒子 子div */
.type> div{
    width: 100%;
    height: 100%;
}
.type> div img{
    width: 100%;
    height: 100%;
}
/* banner */
.banner{
    width: 100%;
    height: 2rem;
}
.banner img{
    width: 100%;
    height: 100%;
}
/* 秒拍 */
.miaopai{
    width: 100%;
    height: 2.2rem;
}
/* 秒拍div 标题 */
.miaopai h3{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-weight: normal;
    text-align: left;
    position: relative;
}
/* h3字体设置 掌上秒拍 */
h3>span:nth-child(1){
   font-weight: bold;
   font-size: 0.14rem;
   margin: 0 0 0 0.1rem;
   color: black;
}
/* h3字体设置 距结束 */
h3>span:nth-child(2){
   font-size: 0.12rem;
   margin: 0 0 0 0.01rem;
   color: #666;
}
/* h3字体设置 倒计时 */
h3>span:nth-child(2) span{
    width:  0.2rem;
    height: 0.2rem;
    background: #666;
   font-size: 0.12rem;
   margin: 0 0 0 0.01rem;
   color: white;
   padding: 0.03rem;
   border-radius: 0.04rem;
}
/* h3字体设置 更多商品等你来抢 */
h3>span:nth-child(3){
    font-size: 0.12rem;
    margin: 0 0 0 0.3rem;
}
/* → 箭头 div*/
h3 div{
    position: absolute;
    right: 0.1rem;
    top: 0.11rem;
    width: 0.2rem;
    height: 0.2rem;
    overflow: hidden;
}
/* → 箭头 img*/
h3 div img{
   margin: 0.03rem 0 0 -0.83rem;
     width:990%;
    height:330%;
}
.box{
    width: 100%;
    height: 1.75rem;
    overflow: hidden;
    overflow-x:scroll;
    overflow-y: hidden;
}
/* 商品 */
.div1{
    width: 10rem;
    height: 1.75rem;
}
.shop{
    width: 1rem;
    height: 1.75rem;
    float: left;
}
/* 图片 */
.shop div:nth-child(1){
     height: 1rem;
     /* background: red; */
    }
.shop div:nth-child(1) img{
    width: 100%;
    height: 100%;
}
/* 商品描述 */
.shop div:nth-child(2){
    height: 0.75rem;
    text-indent: 0;
    text-align: left;
    line-height: 0.12rem;
}
/*商品描述字体1 */
.span_1{
    width: 100%;
    height: 0.36rem;
    overflow: hidden;
     display: inline-block;
     line-height: 0.18rem;
    font-size: 0.13rem;
    color: #252525;
}
/*商品描述字体2 */
.span_2{
    display: inline-block;
    font-size: 0.14rem;
    color: #e74b48;
    margin: 0.03rem 0 0 0;
}
/*商品描述字体3 */
.span_3{
    display: inline-block;
    font-size: 0.10rem;
    color: #666;
    text-decoration:line-through; 
    margin: 0.03rem 0 0 0;
}
/* 图片 */
.pic{
    width: 100%;
    height: 1rem;
}
.pic img{
    width: 100%;
    height: 100%;
}
/* 手机专享 */
.sjzx{
    width: 100%;
    height: 2.2rem;
    display: flex;
}
/* 一级div */
.sjzx>div{
    width: 50%;
    height: 100%;
}
/* 二级div */
.sjzx>div:nth-child(2) div{
    width: 100%;
    height: 50%;
}
.sjzx img{
    width: 100%;
    height: 100%;
}
.div2{
    width: 100%;
    height: 0.9rem;
    overflow: hidden;
    overflow-x:scroll;
    overflow-y: hidden;
        /* background: red; */
}
/* 今日推荐 */
.jrtj{
    width: 13rem;
    height: 0.9rem;
    /* background: red; */
}
.jrtj>div{
    width: 1.3rem;
    height: 100%;
    float: left;
}
.jrtj>div img{
    width: 100%;
    height: 100%;
}
/* 精选频道 */
.jxpd{
    width: 100%;
    height: 2.7rem;
}
/* 标题 */
.jxpd>div:nth-child(1){
    width: 100%;
    height: 0.4rem;
}
.jxpd>div:nth-child(2){
    width: 100%;
    height: 1.1rem;
    display: flex;
}
.jxpd>div:nth-child(2) div{
    width: 100%;
    height: 100%;
   
}
.jxpd>div:nth-child(3){
    width: 100%;
    height: 1.2rem;
    display: flex;
}
.jxpd>div:nth-child(3) div{
    width: 100%;
    height: 100%;
   /* border: 1px solid black; */
}
.jxpd img{
    width: 100%;
    height: 100%;
}
/* 中国白酒馆 */
.zgbjg{
    width: 100%;
     height: 2.3rem;
}
.zgbjg img{
    width: 100%;
    height: 100%;
}
.zgbjg>div:nth-child(1){
        width: 100%;
       height: 0.4rem;
}
.zgbjg>div:nth-child(2){
        width: 100%;
       height: 1.9rem;
}
.zgbjg>div:nth-child(2)>div:nth-child(1){
   
        width: 33.33%;
       height: 100%;
       float: left;
}
.zgbjg>div:nth-child(2)>div:nth-child(2){
        width: 66.66%;
       height: 100%;
       float: left;
}
.zgbjg>div:nth-child(2)>div:nth-child(2)>div:nth-child(1){

        width: 100%;
       height: 50%;
}
.zgbjg>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)
{
        width: 100%;
       height: 50%;  
       display: flex;
}
.zgbjg>div:nth-child(2)>div:nth-child(2)>div:nth-child(2) div{
    width: 100%;
    height: 100%;
}
/* 酒类logo */
.jl_logo{
    width: 100%;
    height: 0.41rem;
    display: flex;
    justify-content: space-around;
}
.jl_logo div{
    width: 0.4rem;
    height: 100%;
}
.jl_logo div img{
    width: 100%;
    height: 100%;
}
/* 主题街 */
.ztj{
    width: 100%;
    height: 3.6rem; 
    margin: 5px 0 0 0;
}
.ztj img{
    width: 100%;
    height: 100%;
}
.ztj>div:nth-child(1){
    width: 100%;
    height: 0.4rem;
}
.ztj>div:nth-child(2){
    width: 100%;
    height: 3.2rem;
}
.ztj>div:nth-child(2) div{
    width: 50%;
    height: 0.8rem;
    float: left;
}

/* 爆款推荐 */
.baokuan{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #666;
    border-top:0.04rem solid #f3f5f6; 
    border-bottom:0.01rem solid #f3f5f6; 
}
.tuijian{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.tuijian>div{
    width: 1.78rem;
    height: 2.5rem;
    margin: 0 1px;
    overflow: hidden;
}
.tuijian>div div:nth-child(1){
    width: 1.78rem;
    height:1.78rem;
}
.tuijian>div div:nth-child(1) img{
    width: 100%;
    height: 100%;
}
.tuijian>div div:nth-child(2){
    width: 1.78rem;
    height:0.72rem;
}
.tuijian>div div:nth-child(2) p{
    /* display: block; */
    text-align: left;
}
.tuijian>div div:nth-child(2) span{
    line-height: normal;
    margin: 0;
}
/* .tuijian>div div:nth-child(2) span:nth-child(1){
    flex-wrap: wrap;.
} */
footer{
    width: 100%;
    height: 1.4rem;
    font-size: 0.12rem;
    background: #f3f5f6;
    color: #999;
    margin: 0.1rem 0 0 0 ;
    text-align: center;
}
footer p{
    line-height: 0.2rem;
}
footer a{
    color: #08f;
}
</style>