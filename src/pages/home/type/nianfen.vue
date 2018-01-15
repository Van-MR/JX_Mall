<template>
    <div id="baijiu">
        <div class="top">  <!-- 顶部 -->
           <div>    <!-- 第一个div -->
                <div>
                    <router-link to="/home"><img src="../imgs/headBack.jpg" alt=""></router-link>
                </div>
                <div>老酒</div>
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

        <div class="jishi">
            还剩<span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒结束
        </div>
            <div v-for="item in img" :key="item.id">
                <div class="inner1"><img :src="item" alt=""></div>
        </div>
                    
        <div class="inner2"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/4.jpg" alt=""></div>
        <div class="inner3"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/5.jpg" alt=""></div>
        <div class="inner4" style="height:0.6rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/7.jpg" alt=""></div>
        <div class="inner4" style="height:2.23rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/6.jpg" alt=""></div>  
        <div class="inner4" style="height:1.58rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/8.jpg" alt=""></div>  
        <div class="inner4" style="height:2.37rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/9.jpg" alt=""></div>
        <div class="inner4" style="height:1.56rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/10.jpg" alt=""></div>  
        <div class="inner4" style="height:2.39rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/11.jpg" alt=""></div>  
        <div class="inner4" style="height:0.61rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/12.jpg" alt=""></div>
        <div class="inner4" style="height:1.57rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/13.jpg" alt=""></div> 
        <div class="inner4" style="height:1.56rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/14.jpg" alt=""></div>  
        <div class="inner4" style="height:2.37rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/15.jpg" alt=""></div>
        <div class="inner4" style="height:2.40rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/16.jpg" alt=""></div> 
        <div class="inner4" style="height:2.39rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/17.jpg" alt=""></div>  
        <div class="inner4" style="height:0.69rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/18.jpg" alt=""></div>
        <div class="inner4" style="height:1.60rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/19.jpg" alt=""></div> <div class="inner4" style="height:1.58rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/8.jpg" alt=""></div>  
        <div class="inner4" style="height:2.36rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/20.jpg" alt=""></div>
        <div class="inner4" style="height:2.39rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/21.jpg" alt=""></div> 
        <div class="inner4" style="height:0.65rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/22.jpg" alt=""></div>  
        <div class="inner4" style="height:1.59rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/23.jpg" alt=""></div>
        <div class="inner4" style="height:2.37rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/24.jpg" alt=""></div> 
        <div class="inner4" style="height:2.37rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/25.jpg" alt=""></div>  
        <div class="inner4" style="height:2.37rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/26.jpg" alt=""></div>
        <div class="inner4" style="height:2.36rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/27.jpg" alt=""></div> 
        <div class="inner4" style="height:2.36rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/28.jpg" alt=""></div>  
        <div class="inner4" style="height:2.36rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/29.jpg" alt=""></div>
        <div class="inner4" style="height:2.40rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/30.jpg" alt=""></div> 
        <div class="inner4" style="height:0.66rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/31.jpg" alt=""></div>  
        <div class="inner4" style="height:2.37rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/32.jpg" alt=""></div>
        <div class="inner4" style="height:2.39rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/33.jpg" alt=""></div> 
        <div class="inner4" style="height:2.37rem"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/34.jpg" alt=""></div>
        <div class="inner4" style="height:0.68rem;"><img src="https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/end.jpg" alt=""></div> 
        
</div>
</template>
    
<script>

export default {
  name: "baijiu",
  data () {
    return {
        flag:false,
        img:['https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/1.jpg',
             'https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/2.jpg',
             'https://m.jiuxian.com/mobile/POP/LJTH/imgJMJ02/3.jpg'
            ],
        img1:{head:'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/5.jpg',
            body:['https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/6.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/7.jpg']
        },
        img2:{head:'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/8.jpg',
            body:['https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/9.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/10.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/11.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/12.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/13.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/14.jpg',
             ]
        },
        img3:{head:'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/15.jpg',
            body:['https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/16.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/17.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/18.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/19.jpg'
             ]
        },
        img4:{head:'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/20.jpg',
            body:['https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/21.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/22.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/23.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/24.jpg'
             ]
        },
        img5:{head:'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/25.jpg',
            body:['https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/26.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/27.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/28.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/29.jpg'
             ]
        },
        img6:{head:'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/30.jpg',
            body:['https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/31.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/32.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/33.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/34.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/35.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/36.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/37.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/38.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/39.jpg'
             ]
        }  
    };
  },
  created(){
      this.$http.get(this.url).then(res =>{
          console.log(res,this);
          this.list = res.body.promoList;
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
    vertical-align: top;
}
/* 顶部大小 */
.top{
    width: 100%;
    height: 0.45rem;
    font-size: 0.16rem;
    position: fixed;
    top: 0rem;
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
    width: 1rem;
    height: 100%;
    line-height: 0.42rem;
    float: left;
    background: rgba(1,1,1, 0);
    margin: 0 0 0 25%;
    text-align: center;
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
    text-align: center;
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
    height: 0.96rem;
}
.inner1 img{
    width: 100%;
    height: 100%;
}
.inner2{
    width: 100%;
    height: 1.61rem;
}
.inner2 img{
    width: 100%;
    height: 100%;
}
.inner3{
    width: 100%;
    height: 2.80rem;
    float: left;
}
.inner3 img{
    width: 100%;
    height: 100%;
}
.inner4{
     width: 100%;
}
.inner4 img{
    width: 100%;
    height: 100%;
}

</style>