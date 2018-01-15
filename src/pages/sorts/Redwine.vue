<template>
  <div id="sorts">
    <div class="head">
      <a href="javascript:void(0)" class="prev" @click="backFn"></a>
      <h2 class="headTitle">商品列表</h2>
      <a href="javascript:void(0)" class="navbar">筛选</a>
    </div>  
    <div class="tabBar clearfix">
        <a href="javascript:;" class="tab first">
        <span>综合</span>
        </a>
      <a href="javascript:;" class="tab">
        <span>销量</span>
      </a> 
      <a href="javascript:;" class="tab">
        <span>价格</span>
        <span class="listIcon prodPrice"></span>
      </a> 
      <a href="javascript:;" class="tab tab4" @click="change()">
        <span class="line"></span>
        <span class="listIcon winelist" v-if="flag"></span>
        <span class="listIcon winepic" v-else></span>
      </a> 
    </div>
    <div class="content">
     <ul :class="changeclass">
          <li v-for="(item,index) in winelist" :key="item.id">
          <router-link :to="'/WineDetail/' + item.commonProductInfo.pid" class="goodlist">
            <img class="prodImg" :src="item.commonProductInfo.imgPath">
            <div class="prodInfo">
              <div class="prodName">
                <p class="name"><a href="javascript:;">{{ item.commonProductInfo.pname }}</a></p>
                <p class="nameAndPro">
                  <span class="promBox">
                    <em class="prom" style="background-color:#8888ff">满赠</em>
                  </span>
                </p>
              </div>
              <div class="price"><strong>￥{{ item.commonProductInfo.jxPrice }}</strong></div>
              <div class="pro">
                <span class="listIcon"></span> <span class="good">  98% 好评</span><span class="good">1707评论</span>
              </div>
            </div>
          </router-link>  
          </li> 
      </ul>
    </div>
  </div>
</template>
    
<script>
//返回详情页面
//history.back ()
//$router.back()
// vue 在子路由中，通过 this.$route.params.参数名来接受传递过来的值 不显示url
export default {
  name: "component_name",
  data () {
    return {
      flag:false,
      url:'../../static/putaojiu.json',
      winelist:[]
    };
  },
  methods:{
    change(){
      this.flag ? this.flag = false : this.flag = true;
    },
    backFn(){
      this.$router.go(-1);
    },
    
  },
  created(){
      this.$http.get(this.url).then(res =>{
      this.winelist = res.body.promoList;
      // console.log(this.winelist);
    },err =>{
      console.log(err);
    })
  },
  computed:{
    changeclass(){
      return this.flag ? 'aaa' : '' ;
    }
    // url(){
    //   // console.log(this.$route.params.index)
    //   switch(this.$route.params.index){
    //     case '0' : return '../../static/baijiu.json';
    //     case '1' : return '../../static/putaojiu.json'
    //     case '2' : return '../../static/yangjiu.json'
    //   }
    // }
   } 
}
</script>   
<style lang="css" scoped>
  .goodlist{
    width:100%;
  }
  /* tab菜单 */
  .tabBar .tab.tab4 .line{
    width:1px;
    height: 19px;
    border:1px #e8e8e8 solid;
    display:inline-block;
    float:left;
    margin-top:10px;
  }
  .listIcon{
    background:url(https://mlist.jiuxian.com/mjava_statics/images/listIcon.png);
    background-size:100px 70px;
  }
  .tabBar .tab.tab4 .listIcon{
    width:24px;
    height:24px;
    display:inline-block;
    vertical-align:top;
    margin-top:8px;
  }
  .winepic{
    background-position:0 -45px;
  }
  .winelist{
    background-position:-27px -45px;
  }
  .tabBar .tab .listIcon.prodPrice{
    width:5px;
    height: 8px;
    display:inline-block;
    vertical-align:top;
    background-position: -23px 0;
    margin:16px 0 0 5px;
  }
  .tabBar .tab.tab4{
    width:20%;
  }
  .tabBar .tab.first{
    color:#fc5a5a;
  }
  .tabBar .tab{
    width:25%;
    height: 40px;
    display:inline-block;
    text-align:center;
    color:#252525;
  }
  .tabBar{
    width:100%;
    height: 40px;
    line-height:40px;
    border-bottom:1px solid #e8e8e8;
    margin-top:40px;
  }
/* 顶部 */
.head{
  width:100%;
  height: 0.4rem;
  background-color:#de4943;
  color:#fff;
  position:relative;
  clear:both;
  z-index:1000;
  position:fixed;
  left: 0px;
  top:0px;
}
.prev{
  width:.3rem;
  height: 0.4rem;
  position: absolute;
  top:0;
  left:10px;
  display:block;
  background:url(https://m.jiuxian.com/mjava_statics/images/headBack.jpg);
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
  width:0.8rem;
  height: 0.4rem;
  position: absolute;
  top:0;
  right: 10px;
  display:block;
  line-height:0.4rem;
  color:#fff;
  font-size:14px;
}
  /* 商品列表详细信息 */
  .content a:link{
    color:#000;
  }  
.content .aaa  .pro .listIcon{
    width:38px;
    height: 13px;
    display:inline-block;
    background-position:-62px -15px;
    vertical-align: middle;
  }
.content .aaa  .pro .good{
    color:#aaa;
    font-size:12px;
    margin-left:8px;
  }
.content .aaa  .price strong{
    color:#fc5a5a;
    font-weight:bold;
    font-size:15px;
    line-height:20px;
  }
.content .aaa  .prom{
    height: 14px;
    display:inline-block;
    font-size:10px;
    border-radius:2px;
    padding:0 2px;
    color:#fff;
    font-style:normal;
    margin-left:5px;
  }
.content .aaa  .prodInfo .sName i{
    width:13px;
    height: 13px;
    display:inline-block;
    background-position:-69px 1px;
  }
.content .aaa  .prodInfo .sName span{
    font-size:12px;
    color:#aaa;
  }
.content .aaa  .prodName{
    height:56px;
  }
.content .aaa  .prodName .name{
    width:100%;
  }
.content .aaa  .pro{
    white-space:nowrap;
    overflow: hidden;
    white-space:nowrap;
  }
.content .aaa .prodInfo{
    margin-top:100px;
    margin-left:0px;
    text-align:center;
    border:none;
  }
.content .aaa  .prodImg{
    clear:both;
    height: 110px;
    width:110px;
    margin-left:20%;
    display: block;
  }
.content .aaa {
    display:flex;
    flex-wrap: wrap;
  }
.content .aaa  li{
    width:50%;
    /* flex:1; */
    float:left;
    height:auto;
    padding:20px 5px 10px;
    border:2px solid #f3f5f6;
  }
.content .aaa .listIcon{
    background:url(https://mlist.jiuxian.com/mjava_statics/images/listIcon.png);
    background-size:100px 70px;
  }
  .content .aaa .listIcon{
    background:url(https://mlist.jiuxian.com/mjava_statics/images/listIcon.png);
    background-size:100px 70px;
  }     
      /* 商品列表详细信息 */
  .pro .listIcon{
    width:38px;
    height: 13px;
    display:inline-block;
    background-position:-62px -15px;
    vertical-align: middle;
  }
  .pro .good{
    color:#aaa;
    font-size:12px;
    margin-left:8px;
  }
  .price strong{
    color:#fc5a5a;
    font-weight:bold;
    font-size:15px;
    line-height:20px;
  }
  .prom{
    height: 14px;
    display:inline-block;
    font-size:10px;
    border-radius:2px;
    padding:0 2px;
    color:#fff;
    font-style:normal;
    margin-left:5px;
  }
  .prodInfo .sName i{
    width:13px;
    height: 13px;
    display:inline-block;
    background-position:-69px 1px;
  }
  .prodInfo .sName span{
    font-size:12px;
    color:#aaa;
  }
  .prodName{
    height:56px;
  }
  .prodName .name{
    line-height:22px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .prodName,.price,.pro{
   text-align:left;
  }  
  .content .prodInfo{
    height:104px;
    padding:0px 0 5px 10px;
    border-bottom:1px solid #e8e8e8;
    margin-left:110px;
  }
  .prodImg{
    width:110px;
    height: 110px;
    display: block;
    float:left;
  }
  .content li{
    height:110px;
    padding-top:5px;
  }
</style>