<template>
  <div id="market">
      <!-- 顶部菜单 -->
      <div id="head">
          <div class="head">
          <a href="javascript:void(0)" class="prev" @click="backFn"></a>
          <h2 class="headTitle">购物车</h2>
          <a href="javascript:void(0)" class="navbar" @click="showbar()"></a>
          </div>
          <!-- <ul class="nav">
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
          </ul> -->
            <!-- 顶部菜单 -->
            <div class="topCatTipBd">
            <i class="pubIcon"></i><p>自营商品实付满88元免运费，偏远地区满500免运费</p>
            </div> 
      </div>
      <!-- 空购物车 -->
      <div class="cart_container" v-show="winelist.length == 0">
        <div class="catKongBox">
          <i class="car"></i>
          <p class="kong">购物车还是空的</p>
          <p class="go">快去逛逛吧~</p>
          <a href="javascript:void(0)">促销活动</a>
        </div>
      </div>
      <!-- 购物车 -->
      <div class="cart_container"  v-show="winelist.length >= 1">
        <div class="cartWrap">
          <!-- 商店名字 -->
          <div class="pucTitle">
              <label>
                  <input type="checkbox" id="shopCheckAll" name="catCheck" value="-1" data-type="checkbox">
                  <i id="-1" class="pubIcon falseIcon"></i>
              </label>
              <span class="jxzy"><img src="https://mcart.jiuxian.com/statics/images/jx.png"></span>
              <span class="title">
                <a href="https://m.jiuxian.com/mobile/POP/KFJTM/index.html">酒仙自营</a>
              </span>
          </div>  
            <!-- 商品信息     -->
          <ul class="catShopList">
            <li class="bor" v-for=" (item,index) in winelist">
              <div class="catShopCont">
                <a href="javascript:void(0)" class="cartDel" @click="del(item)">|&nbsp;删除</a>
                <label status="checkStatus" sku-id="item-46440"><input type="checkbox" name="catCheck" data-type="checkbox"><i class="pubIcon falseIcon" data-type="checkbox"></i></label>
              <div class="catShopInfo clearfixed">
              <div class="catImg catImgThr">
                <a href="https://m.jiuxian.com//m_v1/goods/view/46440">
                  <img :src="item.imgPath">
                </a>
              </div>
              <div class="catInfo">
                <div class="price">
                  <a href="https://m.jiuxian.com//m_v1/goods/view/46440">
                    <h4 class="twoLineEllipsisCart">
                    <!-- 52°汾牌老酒原浆礼宾酒225ml*6 -->
                    {{ item.pname }}
                    </h4>
                  </a>
                  <p>
                    <span>
                   ￥{{ item.jxPrice }}
                    </span>
                    <span><strong style="background-color:#ff6266">掌上秒拍</strong></span>
                  </p>
                  <div class="rsCartItem">
                    <div class="comAmount">
                      <a class="publicIcon minus">-</a>
                      <input class="inpVal" type="text" value="1" skuid="item-46440">
                      <a class="publicIcon plus">+</a>
                    </div>
                  </div>
                  <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 底部总计 -->
        <div class="catBomAllCheak">
          <label data-type="checkallcli" class="lab">
            <i class="pubIcon falseIcon" data-type="checkall"></i>
            <span class="all">全选</span>
          </label>
          <!-- 合计 -->
          <div>
            <p><span>合计：</span><em>￥{{ totalMoney }}</em></p>
            <p class="colorTxt"><span>优惠：</span><strong>￥0.00</strong></p>
          </div>
          <span>
            <a href="javascript:void(0)" class="delBtn">去结算&nbsp;(3)</a>
          </span>
        </div>
        <!-- 购物车 -->  
      </div>
  </div>   
</template>  
<script>
export default {
  name: "market",
  data () {
    return {
        pageName:"我是购物车"
    };
  },
  methods:{
    backFn(){
      this.$router.go(-1);
    },
    del(item){
      if(confirm('真的要删除商品吗~？？？')){
          this.$store.dispatch('del',item);  
      }  
    }
  },
  computed:{
      totalMoney(){
          return this.$store.state.money;
      },
      winelist(){
        //   console.log(this.$store.state.goodsList);
          return this.$store.state.goodsList;
      }
  }  
}
</script>
    
<style lang="css" scoped>
    .pucTitle i{
      width:25px;
      height: 25px;
      display:inline-block;
      position: absolute;
      left: 10px;
      top:10px;
      background-position:-27px -115px;
    }
    .pubIcon{
      background:url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0 ;
      background-size:150px 150px;
    }
    .pucTitle{
      height: 45px;
      line-height:45px;
      background:#ffffff;
      position:relative;
    }
    .catKongBox a{
      display:inline-block;
      line-height:24px;
      height: 24px;
      border:1px solid #ccc;
      background: #ffffff;
      font-size:12px;
      color:#666;
      padding:0 10px;
      margin-top:20px;
      border-radius:5px;
    }
    .catKongBox p{
      line-height:20px;
      font-size:12px;
      color:#666;
    }
    .catKongBox .go{
      color:#999;
    }
    .catKongBox .car{
      width:60px;
      height: 60px;
      display:inline-block;
      background:url(https://mcart.jiuxian.com/statics/images/cart/kong.png) no-repeat 0 0/62px 62px;
    }
    .catKongBox{
      width:100%;
      height:500px;
      margin-top:100px;
      margin-left:40%;
    }
    .topCatTipBd{
      width:100%;
      height: 22px;
      background:#fff4e2;
      border-top:1px solid #ffe9c6;
      border-bottom:1px solid #ffe9c6;
      color:#ff3333;
    }
    .topCatTipBd p{
      float:left;
    }
    .topCatTipBd .pubIcon{
      width:11px;
      height: 22px;
      /* display:inline-block; */
      vertical-align: middle;
      background:url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat -40px 2px;
      background-size:150px 150px;
      float:left;
      margin:-2px 5px 0 3px;
    }
    #market{
      width:100%;
      /* height:100px; */
      height: 100%;
      background:#F3F5F6;
      padding-top:62px;
      padding-bottom:50px;
    }
    /* 顶部菜单 */
    #head{
      width:100%;
      position: fixed;
      left: 0;
      top:0;
      height:100px;
      z-index:1000;
    }
    .head{
      width:100%;
      height: 0.4rem;
      background-color:#fafafa;
      position:relative;
      clear:both;
    }
    .prev{
      width:.3rem;
      height: 0.3rem;
      position: absolute;
      top:0;
      left:10px;
      display:block;
      background:url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
      background-size:150px 150px;
    }
    .headTitle{
      width:2.2rem;
      margin-left:6%;
      font-size:16px;
      line-height:.4rem;
      text-align:center;
      position: absolute;
      left:10%;
      font-weight:normal;
    }
    .navbar{
      width:0.3rem;
      height: 0.4rem;
      position: absolute;
      top:0;
      right: 10px;
      display:block;
      background:url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) -150px 6px;
    }
    .nav{
      width:100%;
      height: 0.45rem;
      background-color:#efefef;
      border-bottom:1px solid #ccc;
      display:none;
    }
    .nav li{
      flex:1;
      width:25%;
      position:relative;
      float:left;
    }
    .nav li i{
      width:26px;
      height:20px;
      display: block;
      margin:auto;
      background:url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) -3px -5px;
    }
    .nav li span{
      width:auto;
      height: 18px;
      line-height:18px;
      text-align:center;
      display:block;
    }
    .top{
      clear:both;
      width:100%;
      height: 50px;
      background-color:#e2e2e2;
    }
    .pucTitle .title {
    font-size: 14px;
    color: #252525;
    margin-left: 62px;
    line-height: 45px;
}
.pucTitle a {
    color: #252525;
    display: inline-block;
}
.jxzy img {
    width: 100%;
    height: auto;
    display: block;
}
.jxzy {
    width: 15px;
    height: 15px;
    position: absolute;
    left: 40px;
    top: 15px;
    display: block;
}
.catShopList li .catShopCont {
    padding: 10px 0;
    position: relative;
}
.pubIcon{
	background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
    background-size: 150px 150px;
}
.pucTitle .falseIcon {
    background-position: -2px -115px;
}
.catShopList li label i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 42%;
    left: 10px;
    display: block;
}
.catShopList li label .falseIcon {
    background-position: -2px -115px;
}
.catShopList li label i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 42%;
    left: 10px;
    display: block;
}
.pucTitle input {
    display: none;
}
.catShopList li label input {
    display: none;
}
.catShopList li .cartDel {
    height: 22px;
    line-height: 22px;
    display: block;
    color: #666;
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding-left: 10px;
    z-index: 101;
}
.catShopList li .catShopInfo {
    margin-left: 20px;
    padding-right: 10px;
    height: 80px;
}
.catShopList li .catShopInfo .catImg {
    width: 80px;
    height: 81px;
    border: 1px solid #e8e8e8;
    position: absolute;
    top: 10px;
    left: 40px;
}
.catShopList li .catShopInfo .catInfo p {
    font-size: 12px;
    color: #ff0000;
    padding: 0 0 5px;
    height: 18px;
    line-height: 18px;
}
.catShopList li .catShopInfo .catImg img{
    width: 100%;
    height: auto;
    border: 0;
}
.catShopList li .catShopInfo .catInfo {
    margin-left: 112px;
}
.catShopList li .catShopInfo .catInfo h4 {
    width: 100%;
    height: 36px;
    line-height: 18px;
    font-size: 14px;
    overflow: hidden;
    color: #333;
}
.twoLineEllipsisCart {
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.catShopList li .catShopInfo .catInfo p {
    font-size: 12px;
    color: #ff0000;
    padding: 0 0 5px;
    height: 18px;
    line-height: 18px;
}
.catShopList li .catShopInfo .catInfo p span {
    float: left;
    margin-right: 5px;
}
.catShopList li .catShopInfo .catInfo p span strong {
    position: relative;
    top: 1px;
    padding: 0 3px;
    height: 16px;
    color: #ffffff;
    line-height: 16px;
    font-size: 12px;
    font-style: normal;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}
.catShopList li .catShopInfo .catInfo p strong {
    float: right;
    color: #999;
    font-weight: normal;
}
.comAmount {
    width: 75px;
    height: 20px;
    position: relative;
}
.comAmount a {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    overflow: hidden;
    color: #666;
    cursor: pointer;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    font-family: Arial;
    border:1px solid #d0d0d0;
}
.comAmount .minus {
    left: 0;
    border-right: 1px solid #d0d0d0;
    line-height: 18px;
}
.comAmount .inpVal {
    width: 75px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 0;
}
.comAmount .plus {
    right: 0;
    border-left: 1px solid #d0d0d0;
}
.catBomAllCheak {
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #d9d9d9;
    z-index: 999;
}
.catBomAllCheak label,.catBomAllCheak label, .catBomAllCheak div{
    display: inline-block;
}
.catBomAllCheak label i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 14px;
    left: 10px;
    display: block;
}
.catBomAllCheak label .falseIcon {
    background-position: -2px -115px;
}
.catBomAllCheak span {
    float: right;
}
.catBomAllCheak label .all {
    position:absolute;
    color: #666;
    left:40px;
     top: 1px;
}
.catBomAllCheak div p {
    line-height: 27px;
    font-size: 16px;
    color: #252525;
    position: relative;
    margin-left:100px;
}
.catBomAllCheak div p span {
    display: block;
    width: 50px;
    float: left;
}
address, cite, dfn, em, var {
    font-style: normal;
}
.catBomAllCheak div p em {
    color: #ff3333;
}
.catBomAllCheak div p.colorTxt {
    color: #999;
    font-size: 14px;
    position: relative;
    top: -8px;
    margin-left:100px;
}
.catBomAllCheak div p strong {
    font-weight: normal;
    padding: 0 5px 0 0;
}
.catBomAllCheak span {
    float: right;
}
.catBomAllCheak span a {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: 98px;
    font-size: 16px;
    background-color: #ddd;
    color: #999;
    text-align: center;
}
.catBomAllCheak span a.delBtn {
    color: #fff;
    background-color: #fd5a5b;
}
</style>
