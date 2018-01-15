<template>
    <div id="mine">
       <!-- <h1>{{ pageName }}</h1> -->
       <!-- 头部部分 -->
       <div class="publicHead" id="head">
            <div class="head clearBoth">
                <router-link to="/home"><a href="javascript:void(0)" class="back" ></a></router-link>
                <h2 class="headTitle">用户登录</h2>
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
       <!-- 导航登录部分 -->
       <section class="login">
           <ul class="tab">
               <router-link to="/mine/userLogin">
                    <li class="tab1 on">
                        <p>账号登录</p>
                        <span></span>
                    </li>
                </router-link>
                <router-link to="/mine/phoneLogin">
                    <li class="tab2">
                        <p>手机动态密码登录</p>
                        <span></span>
                    </li>
                </router-link>
           </ul>
           <!-- 主体部分 -->
           <div class="content">
               <!-- 用户账号登录模块开始 -->
              
               <!-- 二级路由 -->
               <!-- <router-link to="/mine/userLogin">账号登录</router-link>
               <router-link to="/mine/phoneLogin">手机动态密码登录</router-link> -->
                <router-view></router-view>
           </div>
       </section>
   </div>
</template>
    
<script>
export default {
  name: "mine",
  data () {
    return {
        pageName:"我是我的酒仙",
        flag:false
    };
  },
  methods:{
      btnFn(){
          this.flag = !this.flag; 
      }
  }
}
</script>
    
<style lang="css" scoped>
    /* #mine h1{
        color:blueviolet;
    } */
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
        text-align: center;
        /* display: none; */
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
    /* 导航登录部分 */
    section{
        /* padding-top: 0.15rem; */
        max-width: 768px;
        margin: 40px auto 0;
        background: #fff;
        margin-top: 40px;
    }
    a{
        color: #666;
    }
    .tab{
        width: 84%;
        margin: 0 auto;
        overflow: hidden;
    }
    .tab li{
        width: 50%;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        float: left;
    }
    /* .tab .on p{
        color: #de4943;
    }
    .tab li p{
        height: 0.3rem;
        line-height: 0.4rem;
    }
    .tab li span{
        height: 2px;
        background-color: #de4943;
        margin: 0 auto;
    }
    .login .tab1 span{
        width: 0.6rem;
    }
    .login .tab2 span {
        width: 1.1rem;
    }
    .tab .on span{
        display: block;
    } */
    
    /* 二级路由样式 */
    .router-link-active{
        color: #de4943;
    }
    /* 主体部分 */
    .content{
        /* margin-top: 10px; */
        padding-top: 10px;
        width: 84%;
        margin: 0 auto;
        overflow: hidden;
    }
    form{
        margin-bottom: 1em;
        display: block;
        margin-top: 0em;
    }
    
</style>
