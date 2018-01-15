    

<template>
    <div id="baijiu">
        <div class="top">  <!-- 顶部 -->
           <div>    <!-- 第一个div -->
                <div>
                    <router-link to="/home"><img src="../imgs/headBack.jpg" alt=""></router-link>
                </div>
                <div>白酒</div>
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
      <!--广告  -->
        <div class="guanggao">
            <div><img src="../imgs/jiuxian_banner_1.jpg" alt=""></div>
            <div>
                <div><img src="../imgs/jiuxian_banner_2.jpg" alt=""></div>
                <div><img src="../imgs/jiuxian_banner_3.jpg" alt=""></div>
            </div>
        </div>
        <!-- 分类 -->
        <div class="bj_type">
            <div>
                <div>茅台</div>
                <div>五粮液</div>
                <div>汾酒</div>
                <div>泸州老窖</div>
            </div>
            <div>
                <div>酱香</div>
                <div>浓香</div>
                <div>清香</div>
                <div>查看全部</div>
            </div>
        </div>
        <!-- 精品推荐 -->
        <div class="jptj">
            <div></div>
            <div>精品推荐</div>
            <div></div>
        </div>

        <div v-for="item in list"
                :key="item.id">
            <div class="shop">
            <div><img :src="item.commonProductInfo.imgPath" alt=""></div>
            <div>
                <p>{{ item.commonProductInfo.pname }}</p>
                <p>￥{{ item.commonProductInfo.actPrice }}</p>
            </div>
        </div>
        </div>




    <!-- <footer></footer>  -->
   </div>
</template>
    
<script>

export default {
  name: "baijiu",
  data () {
    return {
        flag:false,
        url:"./static/baijiu.json",
        list:[]
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
     /* 广告 */
    .guanggao{
         width: 94%;
         height: 1.8rem;
         /* margin: 0.8rem 0 0 0; */
         margin:  0.8rem auto 0;
    }
    .guanggao>div{
         float: left;
    }
    .guanggao>div:nth-child(1){
         width: 58%;
         height: 100%;
    }
    .guanggao>div:nth-child(2){
        width: 42%;
        height: 100%;
    }
    .guanggao>div:nth-child(2) div{
         width: 100%;
         height: 50%;
    }
    .guanggao img{
          width: 100%;
          height: 100%;
    } 
    .bj_type{
        width: 100%;
        height: 1rem;
        /* background: red; */
        padding: 0.2rem 0 0 0;
    }
    .bj_type>div{
        /* background: black; */
        width: 94%;
        height: 30%;
        margin:  auto;
        display: flex;
        justify-content: space-between;
    }
    .bj_type>div:nth-child(2){
        margin: 0.1rem auto 0;
    }
    .bj_type>div>div{
        width: 23%;
        height: 100%;
        /* background: white; */
        border: 1px solid #e1e1e1;
        font-size: 0.14rem; 
        text-align: center;
        line-height: 0.23rem;
    }
    .bj_type>div:nth-child(2)>div:nth-child(4){
        color: #de4943;
    }
    /* 精品推荐分割线 */
    .jptj{
        width: 96%;
        height: 0.3rem;
        font-size: 0.16rem; 
        display: flex;
        margin: 0 auto 0.1rem;
    }
    .jptj>div:nth-child(1), .jptj>div:nth-child(3){
        width: 35.2%;
        height: 0.01rem;
        /* border:  */
        background: gray;
        margin: 0.13rem 0 0 0;
    }
    .jptj>div:nth-child(2){
        line-height: 0.3rem;
        width: 1rem;
        text-align: center;
    }
    /* 商品 */
    .shop{
        width: 3.1rem;
        height: 1.1rem;
        /* background: red;     */
        border-bottom: 2px solid #e7e7e7;
        margin: 0 auto;
        /* padding: 0.15rem ; */
    }
    /* 商品图片div */
    .shop>div:nth-child(1){
        width: 1rem;
        height:1rem ;
        /* background: black; */
        float: left;

    }
    .shop img{
        width: 100%;
        height: 100%;
    }
    /*商品信息*/
    .shop>div:nth-child(2){
        width: 1.8rem;
        height:1rem ;
        /* background: black; */
        float: left;
        margin-left:0.2rem; 
    }
    /* 商品资料 */
     .shop>div:nth-child(2) p:nth-child(1){
         width: 100%;
         height: 0.74rem;
         /* background: red; */
         font-size: 0.12rem;
         color: black;
         text-align: left;
     }
     /* 价格 */
    .shop>div:nth-child(2) p:nth-child(2){
         font-size: 0.18rem;
         color: #df4a44;
         text-align: left;
     }
     /* 底部填充层 */
     footer{
         width: 100%;
         height: 0.46rem;
     }
</style>