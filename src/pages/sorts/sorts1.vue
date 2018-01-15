<template>
  <div id="sorts">
    <div id="head" class="publicHead">
      <div class="head clearfix">
        <a href="javascript:void(0)" class="prev" @click="backFn"></a>
        <h2 class="headTitle">选酒</h2>
        <a href="javascript:void(0)" class="navbar" @click="showbar()"></a>
      </div>
      <ul class="nav" :class="{on:flag}">
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
      </ul>
    </div>
    <div class="top">
      <div class="search">
         <input type="text" class="drink" placeholder="飞天茅台">
         <input type="button"  class="ss" value="搜索">
      </div>
    </div>
    <div class="contentFrame">
      <ul class="list">
        <li class="bj first" v-for="(item,index) in winelist" :key="item.id">
          <router-link :to="'/wine/'+ item.winesortId">
              <i></i>
              <span>{{ item.winesortName}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>  
</template>   
<script>
export default {
  data () {
    return{
      winelist:[],
      flag:false,
      url:'../static/winesortlist.json'
    }
  },
  methods:{
    backFn(){
      this.$router.go(-1);
    },
    pushFn(winesortId){
      // this.$router.push('/wine/' + winesortId)
      this.$router.push({
        path:'/wine/winesortId',
        query:{
          winesortId
        }
      })
    }, 
    showbar(){
      if(this.flag){
        this.flag = false;
      }else{
        this.flag= true;
      }
    } 
  },
  created(){
    this.$http.get(this.url).then(res =>{
      console.log(res,this);
      this.winelist =res.body.winelist;
    },err =>{
      console.log(err);
    })
  }
  
}
</script>
    
<style lang="css" scoped>
   .publicHead {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
  }
  .head {
    height: 40px;
    background-color: #de4943;
    color: #fff;
  }
    #sorts{
      margin-top:40px;
    }
    .contentFrame{
      width:100%;
      margin: 0 auto;
    }
    .contentFrame .list li span{
      text-align:center;
    }
    .contentFrame .list li:nth-child(1) i{
      background-position: 0 0;
    }
    .contentFrame .list li:nth-child(2) i{
      background-position: -84px 0px;
    }
    .contentFrame .list li:nth-of-type(3) i{
      background-position: -165px 1px;
    }
    .contentFrame li i{
      width:36px;
      height: 36px;
      display: block;
      margin:10px auto;
      display:block;
      background:url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png);
    }
    .contentFrame li{
      float:left;
      width:33.3%;
      height: 80px;
      border:1px solid #f6f6f6;
      border-left:none;
      text-align:center;
    }
    .search{
      width:90%;
      margin:auto;
      display:flex;
    }
    .search input{
      border:none;
      outline:none;
      vertical-align:middle;
      margin-top:10px;
    }
    .search .drink{
      width:75%;
      height:30px;
      padding:10px;
      float:left;
      flex:1;
    }
    .search .ss{
      width:70px;
      height:30px;
      line-height:30px;
      text-align:center;
      background-color:#de4943;
      float:left;
      color:#fff;
    }
    .head{
      width:100%;
      height: 0.4rem;
      background-color:#de4943;
      color:#fff;
      position:relative;
      clear:both;
      z-index:1000;
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
      width:0.3rem;
      height: 0.4rem;
      position: absolute;
      top:0;
      right: 10px;
      display:block;
      background:url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) -150px 6px;
    }
  .nav {
    height: 45px;
    background-color: #efefef;
    color: #848d96;
    top: 40px;
    border-bottom: 1px solid #ccc;
    display: none;
  }
  .nav.on {
    height: 45px;
    background-color: #efefef;
    color: #848d96;
    top: 40px;
    border-bottom: 1px solid #ccc;
    display: block;
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
</style>