<template>
    <div>
        <!-- 头部部分 -->
       <div class="publicHead" id="head">
            <div class="head clearBoth">
                <router-link to="/sesscions"><a href="javascript:void(0)" class="back" ></a></router-link>
                <h2 class="headTitle">商品详情</h2>
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
          <!-- 下载App部分 -->
          <div class="app-download" id="appdownload">
              <a href="javascript:;" class="close">
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
          <!-- 商品展示图 begin -->
          <div class="floor f1">
            <div id="slideBox" class="slideBox">
              <div class="bd">
                <ul>
                  <li>
                    <a href="#"><img src="http://img08.jiuxian.com/2017/0602/16c02e056ea04184aedbde93a13e915c5.jpg"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 商品展示图 end -->
          <!-- 商品名称价格等 begin -->
          <div class="detailsbd">
            <div class="detailsTil">
								<h4>
                  <img src="https://m.jiuxian.com/mjava_statics/images/goods/jxzy.png" class="jxzy" style="display: true">【红洋酒特卖】澳大利亚红酒整箱澳丽庄园经典红葡萄酒750ml（6瓶套）醒酒器酒刀
                </h4>
							</div>
            <div class="detailsTip">{{ list.advWords }}</div>
            <div class="priceAndTag">
              <div class="detailsPrice clearBoth">
                <p id="no_clubPrice">
                  <span class="price">
                    <em>￥</em>
                    <b>{{ list.price }}</b>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <!-- 商品名称价格等 end -->
          <!-- 线 -->
          <div class="line"></div>
          <!-- 金币 -->
          <div class="detailsbd" style="padding: 10px 10px 0;">
            <div class="detailsDl">
              <div class="detailsDl">
                <div class="dt">金币</div>
                <div class="dd">
                  <p>
                    赠送<b class="coinNum">79</b>个金币
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <!-- 金币end -->
          <!-- 线 -->
          <div class="line"></div>
          <!-- 数量区域部分 -->
          <div class="detailsbd" style="padding:10px 10px 5px;margin-bottom:0">
            <!-- 数量部分 -->
            <div class="detailsDl">
              <div class="detailsDl">
                <div class="dt">数量</div>
                <!-- 加减数量 -->
                <div class="dd">
                  <div class="rsCartItem">
                    <div class="comAmount">
                        <a id="decrease_number_goods" class="publicIcon minus on" href="javascript:;" onclick="chgNum(-1)">-</a> 
                        <input type="text" value="1" id="prosum" onblur="chgNum()" onafterpaste="chgNum()"> 
                        <a class="publicIcon plus " href="javascript:;" onclick="chgNum(1)" id="increase_number_goods">+</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 地址 start -->
            <div class="dOrder-city" id="_shdz">
              <div class="set-tit">
                送至
              </div>
              <a href="javascript:;" class="dOrder-city-sel"> 
                <b pid="2">北京</b> 
                <b pid="52">北京市</b>
                <b pid="500">东城区</b>
              </a>
            </div>
            <p class="addTip">有货</p>
            <!-- 地址 end -->
            <!-- 提示信息 -->
            <div class="detailsDl">
              <div class="detailsDl">
                <div class="dt" style="top: 1px;">提示</div>
                <div class="dd">
                  <p id="coupon"></p>
                  <p id="handBag"> 此商品无原厂手提袋 </p>
                </div>
              </div>
            </div>
            <!-- 提示信息end -->
          </div>
          <!-- 保障 -->
          <div class="detailsSecurityBox">
						<div class="detailsSecurity">
              <span><i style="background: url('http://img09.jiuxian.com/bill/2016/1129/16d97e874a194b55b347ca1f63a89b58.png') no-repeat 0 0; background-size: 13px 13px;"></i>正品保障</span>
              <span><i style="background: url('http://img07.jiuxian.com/bill/2016/1129/8efeb2432fcf4bd585dee2b6d3e800f1.png') no-repeat 0 0; background-size: 13px 13px;"></i>满88包邮</span>
              <span><i style="background: url('http://img08.jiuxian.com/bill/2016/1129/c625b2a3daf94197810e69579d10e031.png') no-repeat 0 0; background-size: 13px 13px;"></i>7天退换</span>
            </div>
					</div>
          <!-- 线 -->
          <div class="line"></div>
          <!-- 商品评价 -->
          <div class="detailCommentBD">
              <!-- 导栏 -->
              <div class="detailCommentTil">
                  <router-link to="/comments">
                        <div class="goodsComtTil">
                            <i class="pubIcon"></i>好评度<strong id="goodEval">99%</strong>
                        </div>
                  </router-link>
                  <div class="goodsComtTil1">
                    商品评价<em id="totalEval">(15109人评价)</em>
                  </div>
                 
              </div>
              <!-- 内容 -->
              <ul class="detailCommentUl">
                <li class="comentLi" v-for="(item, index) in list1">
                  <div class="userTil">
                    <em>{{item.createTime}}</em>
                    
                        <strong>{{ item.userName }}</strong>
                        <i class="member">酒虫</i>
                        <span><i class="pubIcon"></i>
                              <i class="pubIcon"></i>
                              <i class="pubIcon"></i>
                              <i class="pubIcon"></i>
                              <i class="pubIcon"></i>
                        </span>
                    
                  </div>
                  <p>{{ item.content }}</p>
                  <div class="smallUl">
                    <ul class="smallList clearBoth">
                      <li v-for="(img, index) in item.imageList">
                        <div class="imgBox">
                          <div class="imgHold"></div>
                          <span>
                            <img class="picToEvalPage" :src="img.smallImage" >
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
          </div> 
          <!-- 商品评价end -->
            <!-- 线 -->
          <div class="line"></div>
          <!-- 品牌介绍，只有酒仙网自营才显示 -->
          <div class="detailsbd">
              <ul class="pinBox">
                  <li>
                        <a href="https://mlist.jiuxian.com/m_v1/search/filter/2/4521/0/0/0/0/0/0/0/1/0/sale" class="clearBoth"><b class="pubIcon"></b> <img src="https://m.jiuxian.com/mjava_statics/images/goods/ziying.png" class="logoimg">
                            <div class="pinInfoBox">
                                <div class="pinInfo">
                                    <p style="text-align:left;">
                                        澳丽庄园
                                        <strong></strong>
                                        <img src="https://m.jiuxian.com/mjava_statics/images/goods/jxzy.png" class="jxzy">
                                    </p>
                                    <div class="pinInfoTxt"></div>
                                </div>
                            </div> 
                        </a>
                  </li>
              </ul>
          </div>
            <!-- 线 -->
          <div class="line"></div>
          <!-- 店铺介绍 -->
          <div class="showConFrame">
              <div class="showCon showCon1" id="showCon1_goods">
                  <div class="prodIntro clearBoth"></div>
                  <div class="prodDet">
                        <p class="detialTit">
                            <i></i>温馨提示
                        </p>
                        <p>
                            根据新修订的《商标法》及国家工商总局最新文件要求，2014年5月1日之后不得将“驰名商标”字样用于商品宣传，酒仙网依法对商品图片中含“驰名商标”字样做马赛克处理；同时，涉及厂家正在按照新规定逐步更换包装，在此期间，我们将对新旧包装货品随机发货，请以实际收到的货物为准。给您带来的不便，敬请谅解。
                        </p>
                  </div>
                  <div class="prodDet">
                        <p class="detialTit">
						    <i></i>商品特点
					    </p>
                        <div class="detailImg" style="text-align:center">
                            <img src="http://img10.jiuxian.com/bill/2017/0602/de7937469e2447c9922988415218eaa5.jpg">
                        </div>
                  </div>
              </div>
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
        url:'../static/promotionLang.json',
        url1:'../static/comment.json',
        list:{},
        list1:[]
    };
  },
  created(){
    this.$http.get(this.url).then(res =>{
        
        console.log(res.body.productPromo);
        // this.list1 = res.body.productPromo.advWords;
        this.list = res.body.productPromo
       
    },err => {
        console.log(err);
    });
    this.$http.get(this.url1).then(res =>{
        
        console.log(res.body.proEvalList);
        // this.list1 = res.body.productPromo.advWords;
        this.list1 = res.body.proEvalList
       
    },err => {
        console.log(err);
    });
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
        /* top: -0.2rem; */
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
    /* 商品展示图 */
    .floor{
      background-color: #fff;
      width: 100%;
      height: 3.2rem;
      overflow: hidden;
      /* margin-top: -0.2rem; */
    }
    .slideBox{
      position: relative;
      overflow: hidden;
      width: 3.2rem;
      margin: 0 auto;
      height: 3.2rem;
    }
    .slideBox .bd{
      position: relative;
      z-index: 0;
    }
    .slideBox .bd li{
      position: relative;
      text-align: center;
      float: left;
    }
    .slideBox .bd li a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .slideBox .bd li img {
        background: url(https://dljx.jxwmanage.com/js/xn6/siteid/respack_nt6.91/images/loading.gif) center center no-repeat;
        vertical-align: top;
        width: 100%;
    }
    /* 商品名称价格等 */
    .detailsbd{
      padding: 0.1rem;
      background-color: #fff;
      overflow: hidden;
      margin-bottom: 0.08rem;
    }
    .detailsTil{
      position: relative;
      margin-bottom: 0.08rem;
    }
    .detailsTil h4{
      font-size: 15px;
      color: #252525;
      line-height: 0.35rem;
      display: inline-block;
      font-weight: 500;
    }
    .jxzy{
      width: 0.38rem;
      height: 0.13rem;
      vertical-align: top;
      margin: 9px 5px 0 0;
    }
    .detailsTip {
        font-size: 13px;
        color: #fc5a5a;
        margin-right: 70px;
    }
    /* 价钱 */
    .detailsPrice {
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        padding: 0 0 5px 0;
        position: relative;
    }
    .detailsPrice .price{
      float: left;
      color: #fc5a5a;
    }
    .detailsPrice .price em {
        font-size: 14px;
        float: left;
        position: relative;
        top: 2px;
        padding-right: 2px;
        font-style: normal;
    }
    .detailsPrice .price b {
        float: left;
        font-weight: normal;
        font-size: 19px;
    }
    /* 金币 */
    .detailsDl{
      width: 100%;
      position: relative;
      margin-bottom: 5px;
    }
    .detailsDl .dt {
        display: inline-block;
        line-height: 20px;
        height: 20px;
        font-size: 14px;
        color: #666;
        position: absolute;
        top: 1px;
        left: 0;
    }
    .detailsDl .dd{
        /* margin: 0 0 5px 54px;
        margin-left: -0.8rem; */
        margin-left: 54px;
        display: inline-block;
        color: #252525;
        width: 90%;
        font-size: 14px;
        padding-right: 10px;
        position: relative;
    }
    .detailsDl .dd p {
        line-height: 20px;
        margin-bottom: 5px;
    }
    .detailsDl .dd p b {
        color: #fc6a6a;
        font-weight: normal;
    }
    /* 线 */
    .line{
      width: 100%;
      height: 0.1rem;
      background-color: #f3f5f6;
    }
    /* 加减数量 */
    .detailsDl .dd a{
      display: block;
    }
    .detailsDl .dd .rsCartItem {
        width: 75px;
        height: 22px;
        border: 1px solid #e8e8e8;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        padding: 0;
    }
    .detailsDl .dd .comAmount {
        width: 75px;
        height: 22px;
        position: relative;
        padding: 0;
    }
    .detailsDl .dd .comAmount .minus {
        left: 0;
        border-right: 1px solid #e8e8e8;
    }
    .detailsDl .dd .comAmount .plus {
        right: 0;
        border-left: 1px solid #e8e8e8;
    }
    .detailsDl .dd .comAmount a {
        width: 20px;
        height: 22px;
        position: absolute;
        top: 0;
        overflow: hidden;
        color: #666;
        cursor: pointer;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
    }
    .detailsDl .dd .comAmount input {
        display: inline-block;
        width: 75px;
        height: 22px;
        line-height: 22px;
        text-align: center;
    }
    input[type=text], input[type=password] {
        -webkit-appearance: none;
        box-sizing: content-box;
        border: 0;
        border-radius: 0;
        box-shadow: none;
        outline: none;
        font-family: Microsoft YaHei;
    }
    /* 地址 */
    .dOrder-city{
        padding: 10px 0 0;
        color: #252525;
        height: 0.24rem;
        z-index: 3;
    }
    .set-tit{
        float: left;
        line-height: 0.24rem;
        color: #666;
    }
    .dOrder-city .dOrder-city-sel{
        color: #252525;
        float: left;
        height: 0.22rem;
        line-height: 0.22rem;
        margin-left: 20px;
        padding-left: 5px;
        position: relative;
        z-index: 1;
        display: block;
        width: 80%;
    }
    .dOrder-city .dOrder-city-sel b{
        color: #252525;
        font-weight: normal;
        padding-right: 7px;
        vertical-align: middle; 
        float: left;
    }
    .addTip{
        color: #fc5a5a;
        margin-left: 50px;
        font-size: 12px;
        padding-bottom: 10px;
        text-align: left;
    }
    /* 提示信息 */
    .detailsDl .dd p {
        line-height: 20px;
        margin-bottom: 5px;
    }
    /* 保障 */
    .detailsSecurityBox {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e2e2;
        /* margin-bottom: 8px; */
        background: #f9f9f9;
    }
    .detailsSecurity {
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        position: relative;
    }
    .detailsSecurity span {
        float: left;
        color: #666;
        font-size: 12px;
        display: block;
        height: 20px;
        margin-right: 15px;
    }
    .detailsSecurity i {
        width: 13px;
        height: 13px;
        display: block;
        float: left;
        margin: 3px 3px 0 0;
        font-style: italic;
    }
    /* 商品评价 */
    /* 商品标题导栏 */
    .detailCommentTil{
        border-bottom: 1px solid #f0f0f0;
        border-width: 0 0 1px;
        height: 0.44rem;
        line-height: 0.44rem;
        position: relative;
        padding: 0 10px;
        color: #252525;
        font-size: 14px;
    }
    .detailCommentTil div {
        display: block;
        float: right;
        color: #666;
        font-size: 12px;
        position: relative;
    }
    .detailCommentTil .goodsComtTil1{
        float: left;
    }
    .pubIcon {
        background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png) no-repeat 0 0;
        background-size: 150px;
    } 
    .detailCommentTil div i {
        background-position: -130px -40px;
        width: 10px;
        height: 13px;
        overflow: hidden;
        display: block;
        position: absolute;
        top: 16px;
        right: 5px;
    }
    .detailCommentTil div strong {
        color: #fc5a5a;
        padding-left: 2px;
        font-weight: normal;
        padding-right: 14px;
    }
    .detailCommentTil em {
        color: #999;
        font-size: 12px;
        padding-left: 5px;
        font-style: normal;
    }
    /* 商品评价内容 */
    .detailCommentUl {
      padding: 0 10px;
    }
    /* .userTil{
        float: left;
        width: 100%;
    }
    .userTil1{
        float: left;
    } */
    .comentLi {
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      width: 100%;
      border-width: 0 0 1px;
    }
     .comentLi .userTil em {
      color: #666;
      font-size: 12px;
      font-weight: normal;
      float: right;
      font-style: normal;
    }
    .comentLi .userTil strong {
      color: #666;
      font-size: 12px;
      font-weight: normal;
      margin-right: 10px;
    }
    .comentLi .userTil .member {
      font-style: normal;
      color: #252525;
      border: 1px solid #ccc;
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      padding: 0 5px;
      display: inline-block;
      margin-right: 5px;
      font-size: 10px;
      height: 15px;
      line-height: 15px;
    }
    /* 小星星 */
    .comentLi .userTil span i {
        background-position: 0 -70px;
        width: 9px;
        height: 9px;
        display: inline-block;
        margin-right: 2px;
    }
    /* 内容 */
    .comentLi p {
        padding: 5px 0;
        font-size: 12px;
        color: #252525;
    }
    .comentLi .smallUl {
        width: 100%;
    }
    .comentLi ul {
        width: 100%;
    }
    .comentLi li {
        width: 22%;
        float: left;
        margin: 2% 2% 0 0;
        overflow: hidden;
    }
    .comentLi li .imgBox {
        padding-bottom: 100%;
        position: relative;
    }
    .comentLi li .imgHold {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .comentLi li .imgBox span {
        box-sizing: border-box;
        display: block;
        font-size: 0;
        height: 100%;
        overflow: hidden;
        width: 100%;
    }
    .comentLi li .imgBox img {
        width: 100%;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    /* 自营 */
    .pinBox{
        width: 100%;
    }
    .pinBox li {
        padding: 0 10px;
        position: relative;
        height: 44px;
        overflow: hidden;
        width: 100%;
    }
    .pinBox li b {
        background-position: -130px -40px;
        width: 10px;
        height: 13px;
        overflow: hidden;
        display: block;
        position: absolute;
        top: 45%;
        right: 20px;
    }
    .pinBox .logoimg {
        width: 84px;
        height: 38px;
        display: inline-block;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        position: absolute;
        top: 6px;
        left: 0;
    }
    .pinBox .pinInfoBox {
        margin: 0 10px 0 84px;
        overflow: hidden;
    }
    .pinBox .pinInfo {
        line-height: 22px;
        color: #252525;
        font-size: 12px;
        display: inline-block;
        padding-top: 4px;
        overflow: hidden;
        width: 97%;
    }
    .pinBox .pinInfo em, .pinBox .pinInfo strong {
        color: #999;
        padding-left: 4px;
        font-weight: normal;
    }
    .pinBox .jxzy {
        position: relative;
        border-radius: 0;
        width: 38px;
        height: 13px;
        left: 5px;
        top: 3px;
        margin: 2px 0 0;
    }
    .pinBox .pinInfo .pinInfoTxt {
        height: 22px;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    /* 店铺介绍 */
    .showCon{
        padding: 10px;
        color: #848484;
        max-width: 780px;
        margin: 0 auto;
    }
    .prodDet{
        margin-bottom: 10px;
    }
    .detialTit {
        height: 24px;
        line-height: 24px;
        background: url(https://m.jiuxian.com/mjava_statics/images/prodInfoBg.jpg) 0 0 repeat-x;
        padding: 0 10px;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .detialTit i {
        float: left;
        height: 8px;
        width: 8px;
        overflow: hidden;
        background: #b00000;
        margin: 8px 8px 0 0;
    }
    p{
        text-align: left;
    }
    .showCon .detailImg img {
        width: 100%!important;
        height: auto!important;
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
</style>