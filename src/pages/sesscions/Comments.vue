<template>
    <div>
        <!-- 头部部分 -->
       <div class="publicHead" id="head">
            <div class="head clearBoth">
                <router-link to="/details"><a href="javascript:void(0)" class="back" ></a></router-link>
                <h2 class="headTitle">商品评论</h2>
                <a class="navBar" href="javascript:void(0)"></a>
            </div>
            <!-- 头部部分右边点击导航 -->
            <ul class="nav on">
                <li class="home">
                    <i></i>
                    <span>首页</span>
                    <a id="daohang_home" href="https://m.jiuxian.com/?from=topNav"></a>
                </li>
                <li class="topsearch"><i></i><span>搜索</span><a id="daohang_search" href="https://m.jiuxian.com/m_v1/search?from=topNav"></a></li>
                <li class="cart"><i></i><span>购物车</span><a id="daohang_gouwuche" href="https://mcart.jiuxian.com/cart/info?from=topNav"></a></li>
                <li class="commuser"><i></i><span>我的酒仙</span><a id="daohang_wodejiuxian" href="https://mmember.jiuxian.com/user?from=topNav"></a></li>
            </ul>
       </div>
       <input type="hidden" id="goods_id" value="43361">
       <div class="mainBody">
           <!-- 评论导航 -->
            <div class="detailComentNav">
                <ul>
                    <!-- <router-link to="/comments/allEval"><li id="allEval" :class="{'current':ind === index}" @click=" isShow(index)" v-for="(item, index) in listObj"><em>{{item.linkName}}</em><strong id="totalCount">15175</strong><i></i></li></router-link> -->
                    <router-link to="/comments/allEval"><li id="allEval"><em>全部</em><strong id="goodCount">15013</strong><i></i></li></router-link>
                    <router-link to="/comments/goodEval"><li id="goodEval"><em>好评</em><strong id="goodCount">15013</strong><i></i></li></router-link>
                    <router-link to="/comments/middleEval"><li id="middleEval"><em>中评</em><strong id="middleCount">131</strong><i></i></li></router-link>
                    <router-link to="/comments/badEval"><li id="badEval"><em>差评</em><strong id="badCount">31</strong><i></i></li></router-link>
                    <router-link to="/comments/hasPicEval"><li id="hasPicEval"><em>有图</em><strong id="hasPicCount">419</strong></li></router-link>
                </ul>
            </div>
            <!-- 线 -->
            <div class="line"></div>
            <!-- 评论内容 -->
            <div class="detailCommentBDTwe">
                <!-- 全部评论内容 -->
                
                <!-- 全部评论内容end -->
                <router-view></router-view>
            </div>
       </div>
       <!-- 固定脚部 -->
       <div class="bottomFix">
           <div class="detailBomNav">
               <ul>
                   <li>
                        <a href="javascript:;" id="zaixiankefu"> 
                            <i class=" shijiushiIcon "></i>
                        </a>
                    </li>
                   <li>
                        <a href="javascript:;" class="" id="collect_goods"> 
                            <i class=" collectIcon " ></i>
                        </a>
					</li>
                   <li>
                       <em id="cartNums">0</em> 
				        <a id="detail_gouwuche" href="https://mcart.jiuxian.com/cart/info">
                            <i class="cartIcon2"></i>
                        </a>
                    </li>
               </ul>
           </div>
           <div class="detailBomRight" id="footerBar">
               <li class="inCart">
                   <a class="detailLink toCart"  href="javascript:;" id="toCart_goods">加入购物车</a>
               </li>
               <ul class="canBuy">
                   <li>
                       <a class="detailLink detSty buyNow"  href="javascript:;" id="buyNow_goods">立即购买</a>
                    </li>
               </ul>
           </div>
       </div>
       <!-- 固定脚部end -->
   </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
            flag : false,
            listObj:[
                {"linkName":"全部", "nameLink":"allEval"},
                {"linkName":"好评", "nameLink":"goodEval"},
                {"linkName":"中评", "nameLink":"middleEval"},
                {"linkName":"差评", "nameLink":"badEval"},
                {"linkName":"有图", "nameLink":"hasPicEval"}
            ],
            // list:['全部', '好评', '中评', '差评', '有图'],
            // list1:['allEval', 'goodEval', 'middleEval', 'badEval','hasPicEval'],
            ind:'',
            ind1:''
        };
    },
    created(){
    
    },
    methods:{
        isShow(index){
           
            // this.flag = !this.flag;
            this.ind = index
        },
        isShow1(index1){
           
            // this.flag = !this.flag;
            this.ind = index
        }
    }
    // computed:{
    //     isShow(){
    //         this.flag = !this.flag;
    //     }
    // }

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
        margin-left: -30px;
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
        display: none;
        /* display: block; */
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
    /* 主体 */
    .mainBody {
        min-width: 320px;
        max-width: 640px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        padding-bottom: 56px;
        height: auto;
        overflow-x: hidden;
        overflow-y: auto;
        margin-top: -0.2rem;
    }
    /* 评论导航 */
    .detailComentNav {
        height: 28px;
        padding: 12px 0;
        background-color: #fff;
        border-bottom: 1px solid #e4e4e4;
        /* margin: 40px 0 10px; */
    }
    .detailComentNav li {
        width: 20%;
        height: 28px;
        line-height: 14px;
        font-size: 12px;
        text-align: center;
        float: left;
        position: relative;
        color: #666;
    }
    /* 样式 */
    .detailComentNav .current {
        color: #fc4646;
    }
    /* 二级路由样式 */
    /* .router-link-active {
        color: hotpink;
    } */
    .detailComentNav li em, .detailComentNav li strong {
        display: block;
        font-weight: normal;
    }
    em{
        font-style: normal;
    }
    i{
        font-style: italic;
    }
    .detailComentNav li i {
        display: block;
        width: 1px;
        height: 28px;
        background-color: #e5e5e5;
        position: absolute;
        top: 0;
        right: 0;
    }
    /* 线 */
    .line{
        width: 100%;
        height: 0.1rem;
        background-color: #f3f5f6;
    }
    
    /* 详情页脚本 */
    .bottomFix {
        background-color: #fafafa;
        position: fixed;
        height: 45px;
        bottom: 0;
        left: 0;
        z-index: 99;
        width: 100%;
    }
    .detailBomNav {
        float: left;
        width: 50%;
        height: 45px;
        position: relative;
    }
    .detailBomNav:after {
        border-top: 1px solid #d7d7d8;
        content: "";
        width: 100%;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        z-index: 10;
    }
    .detailBomNav ul{
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    }
    .detailBomNav li {
        height: 41px;
        padding-top: 3px;
        position: relative;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0;
        -moz-flex-basis: 0;
        flex-basis: 0;
        overflow: hidden;
    }
    .detailBomNav li a {
        display: block;
        width: 100%;
        height: 41px;
    }
    .detailBomNav li a i {
        display: block;
        width: 41px;
        height: 41px;
        margin: 0 auto;
    }
    .detailBomNav .shijiushiIcon {
        background: url(https://m.jiuxian.com/mjava_statics/images/goods/sjs.png) no-repeat;
        background-size: 41px 41px;
    }
    .detailBomNav .collectIcon {
        background: url(https://m.jiuxian.com/mjava_statics/images/goods/bottom05.png) no-repeat;
        background-size: 41px 41px;
    }
    .detailBomNav .cartIcon2 {
        background: url(https://m.jiuxian.com/mjava_statics/images/goods/bottom06.png) no-repeat;
        background-size: 41px 41px;
    }
    .detailBomNav li:after {
        border-right: 1px solid #d7d7d8;
        content: "";
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
        width: 1px;
        z-index: 10;
    }
    .detailBomNav li em {
        position: absolute;
        top: 3px;
        left: 50%;
        height: 14px;
        line-height: 14px;
        overflow: hidden;
        display: block;
        padding: 0 5px;
        color: #fff;
        border-radius: 7px;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        background-color: #fc5a5a;
        font-size: 8px;
        font-style: normal;
    }
    .detailBomRight {
        margin-left: 50%;
        height: 46px;
        display: -webkit-box!important;
        display: -moz-box;
        display: box;
        display: -webkit-flex!important;
        display: -moz-flex;
        display: flex!important;
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    li{
        list-style: none;
    }
    .detailBomRight li.inCart {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0;
        -moz-flex-basis: 0;
        flex-basis: 0;
    }
    .detailBomRight li .detailLink.toCart {
        background-color: #fc5a5a;
    }
    .detailBomRight li .detailLink.detSty {
        background-color: #3c3f51;
    }
    .detailBomRight li .detailLink {
        display: block;
        width: 100%;
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        position: relative;
    }
    .detailBomRight ul {
        height: 46px;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0;
        -moz-flex-basis: 0;
        flex-basis: 0;
    }
    #canBuy li{
        width: 100%;
    }
    .router-link-active{
        color: red;

    }
</style>