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
            还剩<span>00</span>天<span class="js1">{{js1}}</span>时<span class="js2">{{js2}}</span>分<span class="js3">{{js3}}</span>秒结束
        </div>
            <div v-for="item in img" :key="item.id">
                <div class="inner1"><img :src="item" alt=""></div>
            </div>


            <div class="inner1"><img :src="img1.head" alt=""></div>
            <div v-for="item in img1.body" :key="item.id">
                <div class="inner2">
                    <img :src="item" alt="">
                </div>
            </div>

           
            <div class="inner1"><img :src="img2.head" alt=""></div>
            <div v-for="item in img2.body" :key="item.id">
                <div class="inner3">
                    <img :src="item" alt="">
                </div>
            </div>

            <div class="inner1"><img :src="img3.head" alt=""></div>
            <div v-for="item in img3.body" :key="item.id">
                <div class="inner3">
                    <img :src="item" alt="">
                </div>
            </div>

            <div class="inner1"><img :src="img4.head" alt=""></div>
            <div v-for="item in img4.body" :key="item.id">
                <div class="inner3">
                    <img :src="item" alt="">
                </div>
            </div>

            <div class="inner1"><img :src="img5.head" alt=""></div>
            <div v-for="item in img5.body" :key="item.id">
                <div class="inner3">
                    <img :src="item" alt="">
                </div>
            </div>

            <div class="inner1"><img :src="img5.head" alt=""></div>
            <div v-for="item in img5.body" :key="item.id">
                <div class="inner3">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="inner4"><img src="https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/39.jpg" alt=""></div>
            <div class="inner5"><img src="https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/40.jpg" alt=""></div>
                        <div class="inner1"><img src="https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/end.jpg" alt=""></div>
    <footer></footer> 
   </div>
</template>
    
<script>

export default {
  name: "baijiu",
  data () {
    return {
        flag:false,
        js1:"01",
        js2:"00",
        js3:"00",
        endtime:560,
        url:"./static/yangjiu.json",
        list:[],
        fromList1:['白兰地','威士忌','伏特加','龙舌兰'],
        fromList2:['朗姆酒','预调酒','韩国烧酒','查看全部'],
        img:['https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/1.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/2.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/3.jpg',
             'https://m.jiuxian.com/mobile/2016/LJTM/imgLJTM/4.jpg'
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
      };
       let alls = this.endtime * 60;
        setInterval(() => {
            alls--;
            this.js1 = ('00' + parseInt(alls / 3600)).slice(-2);
            this.js2 = ('00' + parseInt((alls - 3600 * this.js1) / 60)).slice(-2);
            this.js3 = ('00' + parseInt(alls - 3600 * this.js1 - 60 * this.js2)).slice(-2);
    }, 1000)
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
    height: 0.6rem;
}
.inner1 img{
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
}
.inner2{
    width: 100%;
    height: 2.33rem;
}
.inner2 img{
    width: 100%;
    height: 100%;
}
.inner3{
    width: 100%;
    height: 1.83rem;
}
.inner3 img{
    width: 100%;
    height: 100%;
}
.inner4{
     width: 100%;
    height: 1.43rem; 
}
.inner4 img{
    width: 100%;
    height: 100%;
}
.inner5{
     width: 100%;
    height: 1.12rem; 
}
.inner5 img{
    width: 100%;
    height: 100%;
}
</style>