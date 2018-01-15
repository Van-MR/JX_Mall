<template>
    <div id="main">
       <!-- <h1>{{ pageName }}</h1> -->
       <!-- 头部部分 -->
       <div class="publicHead" id="head">
            <div class="head clearBoth">
                <router-link to="/home"><a href="javascript:void(0)" class="back" ></a></router-link>
                <h2 class="headTitle">主会场</h2>
                <a class="navBar" href="javascript:void(0)" @click="btnFn"></a>
            </div>
            <!-- 头部部分右边点击导航 -->
            <ul class="nav" v-show="flag">
                <router-link to="/home"><li class="home">
                    <i></i>
                    <span>首页</span>
                    <a id="daohang_home" href="https://m.jiuxian.com/?from=topNav"></a>
                </li>
                </router-link>
                <router-link to="/sorts"><li class="topsearch"><i></i><span>搜索</span><a id="daohang_search" href="https://m.jiuxian.com/m_v1/search?from=topNav"></a></li></router-link>
                <router-link to="/market"><li class="cart"><i></i><span>购物车</span><a id="daohang_gouwuche" href="https://mcart.jiuxian.com/cart/info?from=topNav"></a></li></router-link>
                 <router-link to="/mine"><li class="commuser"><i></i><span>我的酒仙</span><a id="daohang_wodejiuxian" href="https://mmember.jiuxian.com/user?from=topNav"></a></li></router-link>
            </ul>
       </div> 
       <!-- 大背景颜色 start -->
       <div class="eleven" style="background-color:#061536" id="gotop">
            <!-- 下载App部分 -->
            <div class="app-download" id="appdownload" v-show="flag1">
                <a href="javascript:;" class="close" @click="close">
                    <i class="close"></i>
                </a>
                <span class="add-logo"></span>
                <h3>
                    <p>下载app，首单满100送100！</p>
                    <p class="red">买真酒，就上酒仙网</p>
                </h3>
                <a class="down-btn" id="openApp" onclick="jxMlink()">立即下载</a>
            </div>
            <!-- 下载部分end -->
            <!-- 大背景颜色 end -->
            <!-- 头图 start -->
            <div class="topBanner">
                <a class="topLink" name="gotop"></a>
                <a href="javascript:;">
                   <img src="http://img07.jiuxian.com/bill/2017/0912/bb3b272fe11b4d9eb444a2f166c2ec53.jpg" original="http://img07.jiuxian.com/bill/2017/0912/bb3b272fe11b4d9eb444a2f166c2ec53.jpg">
                </a>
            </div>
            <!-- 头图 end -->
            <!-- 中图 start -->
            <div class="topicList">
                <a href="javascript:;" class="jump" name="topic"></a>
                <ul class="clearBoth">
                    <li>
                        <a href="javascript:;">
                            <img name="ad_img" src="http://img08.jiuxian.com/bill/2017/0912/d03c735e05494d798bfec2ed58fb7a04.jpg" original="http://img08.jiuxian.com/bill/2017/0912/d03c735e05494d798bfec2ed58fb7a04.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img name="ad_img" src="http://img06.jiuxian.com/bill/2017/0912/812c6379ba2344908e7bf0bdd6eaf564.jpg" original="http://img06.jiuxian.com/bill/2017/0912/812c6379ba2344908e7bf0bdd6eaf564.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="https://mmember.jiuxian.com/get_bonus/index/21316">
                            <img name="ad_img" src="http://img09.jiuxian.com/bill/2017/0912/0638a63db08341029a75c406c0193513.jpg" original="http://img09.jiuxian.com/bill/2017/0912/0638a63db08341029a75c406c0193513.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="https://mmember.jiuxian.com/get_bonus/index/21316">
                            <img name="ad_img" src="http://img10.jiuxian.com/bill/2017/0912/522a3e45f27c46728b93700256a88851.jpg" original="http://img10.jiuxian.com/bill/2017/0912/522a3e45f27c46728b93700256a88851.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img name="ad_img" src="http://img10.jiuxian.com/bill/2017/0912/f0278453024143a28e58050efca23027.jpg" original="http://img10.jiuxian.com/bill/2017/0912/f0278453024143a28e58050efca23027.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img name="ad_img" src="http://img07.jiuxian.com/bill/2017/0912/2ac73b1580544df1b812d4f08340cc53.jpg" original="http://img07.jiuxian.com/bill/2017/0912/2ac73b1580544df1b812d4f08340cc53.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="https://m.jiuxian.com/m_v1/goods/view/40383">
                            <img name="ad_img" src="http://img07.jiuxian.com/bill/2017/0918/ae962bbc2e224edfb31e39779332c192.jpg" original="http://img07.jiuxian.com/bill/2017/0918/ae962bbc2e224edfb31e39779332c192.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="https://m.jiuxian.com/m_v1/goods/view/42712">
                            <img name="ad_img" src="http://img09.jiuxian.com/bill/2017/0912/ce331c601c484ab79a089fdb54f9a4ec.jpg" original="http://img09.jiuxian.com/bill/2017/0912/ce331c601c484ab79a089fdb54f9a4ec.jpg" style="display: inline;">
                        </a>
                    </li>
                    <li>
                        <a href="https://m.jiuxian.com/m_v1/goods/view/21956">
                            <img name="ad_img" src="http://img07.jiuxian.com/bill/2017/0913/46ccd8df4999435bbe53499447fc7053.jpg" original="http://img07.jiuxian.com/bill/2017/0913/46ccd8df4999435bbe53499447fc7053.jpg" style="display: inline;">
                        </a>
                    </li>
                    <li>
                        <a href="https://m.jiuxian.com/m_v1/goods/view/50659">
                            <img name="ad_img" src="http://img06.jiuxian.com/bill/2017/0925/e4310630838547b69e45037d5d6556cb.jpg" original="http://img06.jiuxian.com/bill/2017/0925/e4310630838547b69e45037d5d6556cb.jpg" style="display: inline;">
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 中图 end -->
            <div id="appendValue">
                <!-- 标题 -->
                <div class="banner">
                    <a name="分栏1" class="link" href="###">
                        <img src="http://img09.jiuxian.com/bill/2017/0912/ac3d834377c940baab4e053248189d61.jpg" original="http://img09.jiuxian.com/bill/2017/0912/ac3d834377c940baab4e053248189d61.jpg" style="display: inline;">
                    </a>
                    <a name="分栏1" class="link" href="https://m.jiuxian.com/m_v1/goods/view/22414">
					 <img src="http://img09.jiuxian.com/bill/2017/0915/97611228fac64841be39c2e1137b85c9.jpg" original="http://img09.jiuxian.com/bill/2017/0915/97611228fac64841be39c2e1137b85c9.jpg" style="display: inline;">
                    </a>
                </div>
                <!-- 标题end -->
                <!-- 单品banner样式1 -->
                <ul class="clearBoth twoList2">
                    <li v-for="(item, index) in list1" :key=" item.id ">
                        <!-- 链接详情地址 -->
                        <router-link to="/details"><a href="javascript:void(0)" class="link"></a></router-link>
                        <div class="pic">
                            <img :src="item.goods_thumb">
                        </div>
                        <p class="name">{{ item.goods_name }}</p>
                        <p class="adText"></p>
                        <div class="orice">
                            <p>
                                <span :goodid= " item.goods_id ">￥{{ item.cur_price }}</span>
                                <del :goodid=" item.goods_id ">￥{{ item.shop_price }}</del>
                            </p>
                            <a href="https://m.jiuxian.com/m_v1/goods/view/51401" class="goBuy">点击购买</a>
                        </div>
                    </li>
                </ul>
                  <!-- 标题 -->
                <div class="banner">
                    <a name="分栏2" class="link" href="###">
                        <img src="http://img09.jiuxian.com/bill/2017/0912/ac3d834377c940baab4e053248189d61.jpg" original="http://img09.jiuxian.com/bill/2017/0912/ac3d834377c940baab4e053248189d61.jpg" style="display: inline;">
                    </a>
                    <a name="分栏2" class="link" href="https://m.jiuxian.com/m_v1/goods/view/22414">
					    <img src="http://img08.jiuxian.com/bill/2017/0913/e2f3e74d22764287bc88ae68c353fd06.jpg">
                    </a>
                </div>
                <!-- 标题end -->
                <!-- 单品banner样式1 -->
                <ul class="clearBoth twoList2">
                    <li v-for="(item, index) in list2" :key=" item.id ">
                        <a href="https://m.jiuxian.com/m_v1/goods/view/51401" class="link"></a>
                        <div class="pic">
                            <img :src="item.goods_thumb">
                        </div>
                        <p class="name">{{ item.goods_name }}</p>
                        <p class="adText"></p>
                        <div class="orice">
                            <p>
                                <span :goodid="item.goods_id">￥{{ item.cur_price }}</span>
                                <del :goodid="item.goods_id" style="">￥{{ item.shop_price }}</del>
                            </p>
                            <a href="https://m.jiuxian.com/m_v1/goods/view/51401" class="goBuy">点击购买</a>
                        </div>
                    </li>
                </ul>
                   <!-- 标题 -->
                <div class="banner">
                    <a name="分栏3" class="link" href="###">
                        <img src="http://img09.jiuxian.com/bill/2017/0912/ac3d834377c940baab4e053248189d61.jpg" original="http://img09.jiuxian.com/bill/2017/0912/ac3d834377c940baab4e053248189d61.jpg" style="display: inline;">
                    </a>
                    <a name="分栏3" class="link" href="https://m.jiuxian.com/m_v1/goods/view/22414">
					    <img src="http://img08.jiuxian.com/bill/2017/0913/e2f3e74d22764287bc88ae68c353fd06.jpg">
                    </a>
                    <ul class="clearBoth twoList2">
                    <li v-for="(item, index) in list3" :key=" item.id ">
                        <a href="https://m.jiuxian.com/m_v1/goods/view/51401" class="link"></a>
                        <div class="pic">
                            <img :src="item.goods_thumb">
                        </div>
                        <p class="name">{{ item.goods_name }}</p>
                        <p class="adText"></p>
                        <div class="orice">
                            <p>
                                <span :goodid="item.goods_id">￥{{ item.cur_price }}</span>
                                <del :goodid="item.goods_id" style="">￥{{ item.shop_price }}</del>
                            </p>
                            <a href="https://m.jiuxian.com/m_v1/goods/view/51401" class="goBuy">点击购买</a>
                        </div>
                    </li>
                </ul>
                </div>
                <!-- 标题end -->
                <!-- 分栏11项 -->
            </div>
            <!-- 底部脚本 -->
            <div class="bottomBtn" id="returnTop">
                <a class="toTop" href="#"> 
                    <i></i> <span>返回<br>顶部</span>
                </a>
		    </div>
       </div>
      
   </div>
</template>
    
<script>
export default {
  name: "main",
  data () {
    return {
        // pageName:"我是主会场"
        url:'../static/column.json',
        list1:[],
        list2:[],
        list3:[],
        flag:false,
        flag1:true
    };
  },
// 我们会把网络请求的代码，放在这个钩子函数中
    created(){
        // console.log(this.goods_name,this);
        // console.log(this);
        // 在网络请求中，推荐使用箭头函数，这样能完美的解决 this指向问题
        this.$http.get(this.url).then(res =>{
            // console.log(res, this)
            console.log(res);
            // console.log(this);
            this.list1 = res.body.list1;
            this.list2 = res.body.list2;
            this.list3 = res.body.list3;
        },err => {
            console.log(err);
        });
    },
    methods:{
        btnFn(){
            this.flag = !this.flag;
        },
        close(){
            this.flag1 = !this.flag1;
        }
    }  
}
</script>
    
<style lang="css" scoped>
    /* 清除浮动 */
    .clearBoth:after{
        clear: both;
        display: block;
        content: ".";
        visibility: hidden;
        height: 0;
        font-size: 0;
    }
    /* 头部部分 */
    .publicHead{
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 10;
    }
    .head{
        height: 0.4rem;
        background-color: #de4943;
        color: #fff;
        width: 100%;
    }
    .head .back{
        left: 0.1rem;
    }
    .head .back, .head .navBar{
        width: 0.3rem;
        height: 0.4rem;
        position: absolute;
        top: 0;
        display: block;
    }
    .head .back{
        background: url(https://m.jiuxian.com/mjava_statics/images/headBack.jpg) no-repeat;
    }
    .head .navBar{
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat;
    }
    .head .navBar{
        background-position: -150px 6px;
        right: 0.1rem;
    }
    .head .headTitle{
        font-size: 16px;
        text-align: center;
        line-height: 0.4rem;
        position: absolute;
        left: 50%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 500;
        margin-left: -20px;
    }
    /* 中间部分banner */
    .eleven{
        min-width: 320px;
        max-width: 640px;
        width: 100%;
        margin: 0 auto;
        padding-top: 0.4rem;
        margin-top: -0.6rem;
    }
    /* 头部部分右边点击导航 */
    .nav{
        width: 100%;
        height: 0.45rem;
        background-color: #efefef;
        color: #848d96;
        top: 0.4rem;
        border-bottom: 1px solid #ccc;
        position: absolute;
        left: 0;
        text-align: center;
        /* display: none; */
    }
    a{
        color: #848d96;
    }
    .nav li {
        width: 25%;
        height: 45px;
        float: left;
        position: relative;
    }
    .nav li i {
        width: 0.26rem;
        height: 0.2rem;
        display: block;
        margin: 5px auto 0;
        background: url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) no-repeat;
    }
    .nav .home i {
        background-position: -3px -5px;
    }
    .nav .topsearch i {
        background-position: -37px -5px;
    }
    .nav .cart i {
        background-position: -72px -5px;
    }
    .nav .commuser i {
        background-position: -113px -5px;
    }
    /* app下载 */
    .app-download{
        height:0.43rem;
        background: #2e2e2e;
        min-width: 320px;
        max-width: 730px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }
    .app-download .close{
        width: 0.43rem;
        height: 0.43rem;
        display: block;
        position: absolute;
    }
    .app-download .close i, .app-download .add-logo{
        background: url(https://m.jiuxian.com/mjava_statics/images/downapp/topApp.png) no-repeat;
        background-size: 0.34rem 0.5rem;
    }
    .app-download .close i{
        background-position: 0 0;
        width: 0.13rem;
        height: 0.13rem;
        display: block;
        margin: 15px 0 0 15px;
    }
    .app-download .add-logo{
        background-position: 0 -16px;
        width: 0.3rem;
        height: 0.3rem;
        display: block;
        position: absolute;
        top: 0.07rem;
        left: 0.43rem;
    }
    .app-download h3{
        text-align: center;
        padding-top: 0.07rem;
        margin: 0 auto;
        font-weight: normal;
        width: 50%;
    }
    .app-download h3 p {
        line-height: 14px;
        font-size: 12px;
        color: #fff;
        width: 100%;
        height: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .app-download h3 .red{
        color: #fc5a5a;
    }
    .down-btn {
        background: #fc5a5a none repeat scroll 0 0;
        color: #fff;
        display: block;
        font-size: 14px;
        height: 43px;
        line-height: 40px;
        padding: 0 5px;
        position: absolute;
        right: 0;
        text-align: center;
        text-decoration: none;
        top: 0;
    }
    /* 头图 */
    .eleven .topBanner{
        width: 100%;
        position: relative;
        z-index: 5;
        top: 0;
        left: 0;
    }
    .topBanner a{
        width: 100%;
        height: auto;
        display: block;
    }
    .topBanner img{
        width: 100%;
        height: auto;
    }
    /* 中图部分 */
    .topicList{
        position: relative;
    }
    .topicList .jump{
        position: absolute;
        top: -0.8rem;
        left: 0;
    }
    .topicList ul{
        padding-bottom: 0.05rem;
        margin: 0 auto;
    }
    .topicList ul li{
        width: 50%;
        position: relative;
        float: left;
        display: inline-block;
    }
    .topicList ul li img{
        width: 100%;
        height: auto;
    }
    /* 底部 */
    .bottomBtn{
        padding: 0.3rem 0;
    }
    .toTop{
        width: 0.5rem;
        height: 0.5rem;
        display: block;
        margin: 0 auto;
        border-radius: 0.5rem;
        border: 3px solid #ff2753;
        background-color: #fff;
    }
    .toTop i{
        width: 0.14rem;
        height: 0.09rem;
        display: block;
        background: url(https://m.jiuxian.com/mjava_statics/images/top.png) no-repeat;
        margin: 5px 19px 2px;
    }
    .toTop span{
        width: 100%;
        height: auto;
        display: block;
        text-align: center;
        color: #280130;
        line-height: 0.15rem;
    }
    /* 标题 */
    #appendValue{
        padding-top: 2%;
    }
    .banner{
        position: relative;
        overflow: hidden;
        font-size: 0;
    }
    .banner a{
        height: auto;
        display: block;
        margin-bottom: 2%;
    }
    .banner a img{
        width: 100%;
        height: auto;
    }
    /* 单品banner样式 */
    .twoList2{
        padding-left: 2%;
    }
    .twoList2 li{
        float: left;
        width: 48%;
        margin: 0 2% 2% 0;
        background: #fff;
        box-sizing: border-box;
        padding-bottom: 2%;
        position: relative;
        z-index: 1;
    }
    .twoList2 li .link{
        display: block;
        width: 100%;
        height: 100%; 
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
    }
    .twoList2 li .pic{
        position: relative;
        z-index: 1;
        text-align: center;
        font-size: 0;
        padding: 2% 0;
    }
    .twoList2 li .pic img{
        width: 1.4rem;
        height: 1.4rem;
    }
    .twoList2 li .name{
        height: 0.28rem;
        line-height: 0.14rem;
        width: 90%;
        margin: 2% 5%;
        font-size: 12px;
        color: #000;
        text-align: center;
        overflow: hidden;
    }
    .adText{
        font-size: 14px;
        margin: 0 5%;
        width: 90%;
        color:#020202;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-top: 1px solid #8e8e8e;
        height: 0.21rem;
        line-height: 0.21rem;
    }
    .twoList2 li .orice{
        height: 0.24rem;
        line-height: 0.24rem;
        margin: 5px 5% 0;
        text-align: center;
        position: relative;
        z-index: 3;
        overflow: hidden;
    }
    .twoList2 li .orice p{
        float: left;
    }
    .twoList2 li .orice span{
        color: #ff0000;
        font-weight: bold;
        font-size: 14px;
    }
    .twoList2 li .orice del{
        color: #7a7a7a;
        font-size: 12px;
        padding-left: 3px;
    }
    del{
        text-decoration: line-through;
    }
    .twoList2 li .goBuy{
        background: #ff0000;
        display: block;
        float: right;
        width: 40%;
        height: 0.24rem;
        line-height: 0.2rem;
        color: #fff;
        text-align: center;
        font-size: 12px;
        border-radius: 3px;
    }
</style>
