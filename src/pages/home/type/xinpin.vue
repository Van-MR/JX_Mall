<template>
    <div id="baijiu">
        <div class="top">  <!-- 顶部 -->
           <div>    <!-- 第一个div -->
                <div>
                    <router-link to="/home"><img src="../imgs/headBack.jpg" alt=""></router-link>
                </div>
                <div>新品发布汇</div>
                <div v-on:click="change"  >
                    <img src="../imgs/headIcon.png" alt="">
                </div> 
            </div>
            <div v-if="flag">
                <router-link to="/home">
                <div class="inner">
                    
                    <div>
                        <img src="../imgs/headIcon.png" alt="">
                    </div>
                    <div>首页</div>
                   
                </div>
                 </router-link>
                 <div class="inner">
                    <div>
                        <img src="../imgs/headIcon.png" alt="">
                    </div>
                    <div>搜索</div>
                </div>
                 <div class="inner">
                    <div>
                        <img src="../imgs/headIcon.png" alt="">
                    </div>
                    <div>购物车</div>
                </div>
                 <div class="inner">
                    <div>
                        <img src="../imgs/headIcon.png" alt="">
                    </div>
                    <div>我的酒仙</div>
                </div>  
           
            </div> <!-- 第二个隐藏div -->
        </div>  <!-- 顶部 -->

        <div style="height:1.65rem;marginTop:0.44rem" class="inner1">
                <img src='http://img07.jiuxian.com/bill/2017/0927/d1acd658cc5546d9affecf05c4660f4e.jpg' alt="">
        </div>

        <div style="height:1.64rem;" class="inner1">
                <img src='http://img07.jiuxian.com/bill/2017/0927/a7dbab4d27914ce7aa14e082234d6226.jpg' alt="">
        </div>

        <div style="height:1.64rem;" class="inner1">
                <img src='http://img08.jiuxian.com/bill/2017/0927/a30f53e4cb914aad97e3c7ef649ced3f.jpg' alt="">
        </div>

        <div style="height:4.20rem;" class="inner1">
                <img src='http://img09.jiuxian.com/bill/2017/0926/53ba93a647f7417bb305c27c8a248db9.jpg' alt="">
        </div>

        <div style="height:4.01rem;" class="inner1">
                <img src='http://img09.jiuxian.com/bill/2017/0927/72415f6cc64a423e9668412068e1a5f9.jpg' alt="">
        </div>
        <div style="height:3.94rem;" class="inner1">
                <img src='http://img08.jiuxian.com/bill/2017/0926/b3a2368d0c6d40d3b46508d07aa9fdca.jpg' alt="">
        </div>

        <div style="height:3.79rem;" class="inner1">
                <img src='http://img07.jiuxian.com/bill/2017/0926/632ee33559d54cda90515ea35f7b866c.jpg' alt="">
        </div>

        <div style="height:0.64rem;" class="inner1">
                <img src='http://img06.jiuxian.com/bill/2017/0926/321cbd302cef47c39d58ebebb9a105dd.jpg' alt="">
        </div>

        <div class="box">
            <div v-for="item in list" :key = item.id>
                <div> <img :src = " item.goods_thumb " alt=""></div>
                <div>{{item.goods_name}}</div>
                <div></div>
                <div><span>￥{{item.cur_price}}</span><span>￥{{item.shop_price}}</span><span>点击购买</span></div>
            </div>
        </div>
</div>
</template>
    
<script>

export default {
  name: "baijiu",
  data () {
    return {
        flag : false,
        img:['https://m.jiuxian.com/mobile/2016/CLUB/imgclubHC/1a.jpg',
             'https://m.jiuxian.com/mobile/2016/CLUB/imgclubHC/2a.jpg',
             'https://m.jiuxian.com/mobile/2016/CLUB/imgclubHC/3a.jpg',
             'https://m.jiuxian.com/mobile/2016/CLUB/imgclubHC/4a.jpg',
             'https://m.jiuxian.com/mobile/2016/CLUB/imgclubHC/5a.jpg',
             'https://m.jiuxian.com/mobile/2016/CLUB/imgclubHC/6a.jpg'
            ],
        list:[],
        url:"./static/xin1.json",
          
    };
  },
  created(){
      this.$http.get(this.url).then(res =>{
          console.log(res,this);
         
          this.list = res.body.goodsCate.list;
           console.log(this.list);
      }),err =>{
          console.log(err);
      }
  },
  methods:{
      change(){
          this.flag = ! this.flag;
      },
  }
}
</script>
    
<style lang="css" scoped>

a{
    text-decoration: none;
}
img{
    /* vertical-align: middle; */
}
/* 顶部大小 */
.top{
    width: 100%;
    height: 0.45rem;
    font-size: 0.16rem;
    position: fixed;
    top: 0rem;
    text-align: center;
}
/* 顶部的两个子div大小 */
.top>div{
    width: 100%;
    height: 100%;
}
/* 顶部第一个div */
.top>div:nth-of-type(1){
    background: #de4943;
    color: white;
} 
/* 后退按钮的div */
.top>div:nth-of-type(1)>div:nth-of-type(1){
    width: 0.3rem;
    height: 100%;
    float: left;
}
/* 白酒 */
.top>div:nth-of-type(1)>div:nth-of-type(2){
    width: 1.2rem;
    height: 100%;
    line-height: 0.42rem;
    float: left;
    background: rgba(1,1,1, 0);
    margin: 0 0 0 25%;
}
/* 分类按钮div */
.top>div:nth-of-type(1)>div:nth-of-type(3){
    width: 0.4rem;
    height: 100%;
    background: rgba(1,1,1, 0);
    float: right;
    overflow: hidden;
    position: relative;
}
/* 分类图片 */
.top>div:nth-of-type(1)>div:nth-of-type(3) img{
    position: absolute;
    width: 500%;
    height: 100%;
    left: -1.5rem;
    top: 0.04rem;
}
/* 后退按钮 */
.top>div:nth-of-type(1)>div:nth-of-type(1) img{
    height: 100%;
    margin: 0 0 0 0.05rem;
}
/* 分类二级菜单 */
.top>div:nth-of-type(2){
    background: #efefef;
    display: flex;
    justify-content: space-around;
    border-bottom:1px solid #e1e1e1; 
}
/* 二级按钮div */
.inner{
    /* background: black; */
    width: 0.48rem;
    height: 100%;
    overflow: hidden;
    position: relative;
    /* float: left; */
    /* border: none; */
}
.inner>div:nth-child(1){
    width: 100%;
    height: 0.25rem;
    margin: 0 auto;
}
/* 二级按钮图片 */
.inner>div:nth-child(1) img{
    position: absolute;
}
/* 第一个二级按钮图片相对定位 */
.top div:nth-of-type(2) div:nth-child(1) img{
    left: 0.1rem;
    top: 0;
}
    /* 第一个二级按钮图片相对定位 */
.top div:nth-of-type(2) div:nth-child(2) img{
    left: -0.25rem;
    top: 0;
}
    /* 第一个二级按钮图片相对定位 */
.top div:nth-of-type(2) div:nth-child(3) img{
    left: -0.61rem;
    top: 0;
}
    /* 第一个二级按钮图片相对定位 */
.top div:nth-of-type(2) div:nth-child(4) img{
    left: -1rem;
    top: 0;
}
.inner>div:nth-child(2){
        font-size: 0.12rem;
        text-align: center;
        width: 100%;
        color: #848d96;
        margin-top:0.01rem; 
}
/* 计时 */
.jishi{
    width: 100%;
    height: 0.33rem;
    background: #fbd640;
    margin: 0.44rem 0 0 0;
    color: #000078;
    font-size: 0.14rem;
    line-height: 0.33rem;
}
/* 时间方块 */
.jishi span{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    background: #060577;
    color: #fbd640;
    line-height: 0.2rem;
    margin: 0 0.04rem;
}
.inner1{
    width: 100%;
}
.inner1 img{
    width: 100%;
    height: 100%;
}
.box>div{
    width: 1.8rem;
    height: 2.4rem;
    background:white;
}
/* 弹性盒子 */
.box{
    margin: 0 0 0rem 0;
    display: flex;
    flex-wrap: wrap;
    background: #050430;
}
.box img{
    width: 100%;
    height: 100%;
}
/* 图片 */
.box>div div:nth-child(1){
    width: 100%;
    height: 1.46rem;
    background: green;
}
.box>div div:nth-child(2){
    width: 100%;
    height: 0.4rem;
    font-size: 0.12rem;
    /* background: white; */
    overflow: hidden;
}
.box>div div:nth-child(3){
    width: 100%;
    height: 0.2rem;
}
.box>div div:nth-child(4){
    width: 100%;
    height: 0.3rem;
    font-size: 0.12rem;
    text-align: left;
}
.box>div div:nth-child(4) span:nth-child(1){
    font-size: 0.14rem;
    line-height: 0.3rem;
    margin: 0 0 0 0.08rem;
    /* background: black; */
    color: red;
}
.box>div div:nth-child(4) span:nth-child(2){
    font-size: 0.14rem;
    line-height: 0.3rem;
    margin: 0 0 0 0.08rem;
    color: #8c8c8c;
    text-decoration: line-through;
}
.box>div div:nth-child(4) span:nth-child(3){
    display: inline-block;
    font-size: 0.12rem;
    line-height: 0.25rem;
    margin: 0 0 0 0.08rem;
    color: white;
    width: 0.65rem;
    height: 0.25rem;
    text-align: center;
    background: red;
    border-radius: 0.03rem;
}
</style>