<template>
  <div id="sorts">
    <header id="header" v-show="showFlag">
			<section class="top">
				<a href="javascript:;" onclick="javascript:history.back(-1)" class="goback"></a>
				<h4>选酒</h4>
				<a href="javascript:;" class="menus" @click="showbar()"></a>
			</section>
			<ul class="list-menu" v-show="flag">
				<li><a href="javascript:void(0)"><i></i><p>首页</p></a></li>
				<li><a href="javascript:void(0)"><i></i><p>搜索</p></a></li>
				<li><a href="javascript:void(0)"><i></i><p>购物车</p></a></li>
				<li><a href="javascript:;"><i></i><p>我的酒仙</p></a></li>
			</ul>
			<section class="search">
				<div class="search-box">
					<input type="text" id="text" @focus="showsearch()" placeholder="飞天茅台"/>
					<input type="button" value="搜索" id="search"/>
				</div>
			</section>
		</header>
		<section id="content" v-show="showFlag">
			<ul class="list-intro" v-show="type == 'nav'">
        <li v-for="(item,index) in list1" :key="item.id">
          <router-link :to="'/sorts/Whitewine/'+ index"><i></i><p> {{ item }}</p></router-link>
        </li>
				<!-- <li>
          <router-link to="/sorts/Whitewine"><i></i><p> 白酒 </p></router-link>
        </li>
				<li>
          <router-link to="/sorts/Redwine"><i></i><p> 葡萄酒 </p></router-link>
        </li>
				<li>
          <router-link to="/sorts/Yangwine"><i></i><p> 洋酒 </p></router-link>
        </li> -->
        <li v-for="(item,index) in list2" :key="item.id">
          <a href="javascript:void(0)"><i></i><p>{{ item }}</p></a>
        </li>
			</ul>
			<section class="search-focus" v-show="type == 'search'">
				<p>热门搜索:</p>
				<ul class="search-list">
					<li><a href="javascript:void(0)">茅台</a></li>
					<li><a href="javascript:void(0)">五粮液</a></li>
					<li><a href="javascript:void(0)">泸州老窖</a></li>
					<li><a href="javascript:void(0)">剑南春</a></li>
					<li><a href="javascript:void(0)">酒鬼酒</a></li>
					<li><a href="javascript:void(0)">威士忌</a></li>
					<li class="last"><a href="javascript:void(0)">拉菲</a></li>					
				</ul>
			</section>
      <div class="bg" v-show="type == 'search'" @click="change()"></div>
		</section>
    <router-view></router-view>
  </div>  
</template>   
<script>
export default {
  data () {
    return{
      winelist:[],
      flag:false,
      type:'nav',
      list1:['白酒','葡萄酒','洋酒'],
      list2:['整箱购','老酒','清仓特卖',
      '海外直采','精美大坛','红酒整箱','值得买','销量排行','礼尚往来']
    }
  },
  methods:{
    backFn(){
      this.$router.go(-1);
    },
    showbar(){
      this.flag = !this.flag;
    },
    showsearch(){
      this.type = 'search';
    },
    change(){
      this.type = 'nav';
    } 
  },
  computed: {
    showFlag(){
      return this.$route.path == '/sorts'
    }
  }
}
</script>   
<style lang="css" scoped>	
input{
  border:none;
  outline:none;
}
a:link{
color:#000;
}
#header{
	width:100%;
	height:auto;
	font-size:14px;
}
#header .top{
	width:100%;
	height:40px;
	background:#de4943;
}
#header .top a.goback{
	display:block;
	width:30px;
	height:40px;
	background:#de4943 url(../img/headBack.jpg) center center no-repeat;
	margin:0 10px;
	float:left;
}
#header .top h4{
	width:70%;
	height:40px;
	line-height:40px;				
	text-align:center;
	float:left;
	color:#fff;
	margin-left:5px;
}
#header .top a.menus{
	display:block;
	float:right;
	width:20px;
	height:20px;
	margin:10px 10px;
	background:url(../img/headIcon.png) -155px -5px no-repeat;
}
#header .list-menu{
	width:100%;
	height:45px;
	background:#efefef;
	/* display:none; */
}
#header .list-menu li{
	width:25%;
	height:100%;
	float:left;
}
#header .list-menu li a{
	display:block;
	width:100%;
	height:100%;
	overflow:hidden;
}
#header .list-menu li:nth-child(1) a i{
	display:block;
	width:26px;
	height:20px;
	margin:0 auto;
	margin-top:5px;
	background:url(../img/headIcon.png) -3px -5px no-repeat;
}
#header .list-menu li:nth-child(2) a i{
	display:block;
	width:26px;
	height:20px;
	margin:0 auto;
	margin-top:5px;
	background:url(../img/headIcon.png) -36px -5px no-repeat;
}
#header .list-menu li:nth-child(3) a i{
	display:block;
	width:26px;
	height:20px;
	margin:0 auto;
	margin-top:5px;
	background:url(../img/headIcon.png) -74px -5px no-repeat;
}
#header .list-menu li:nth-child(4) a i{
	display:block;
	width:26px;
	height:20px;
	margin:0 auto;
	margin-top:5px;
	background:url(../img/headIcon.png) -112px -5px no-repeat;
}
#header .list-menu li a p{
	width:100%;
	height:20px;
	font-size:12px;
	line-height:20px;
	text-align:center;
}
#header .search{
	width:100%;
	height:50px;
	background:#e2e2e2;
	overflow:hidden;
}
#header .search .search-box{
	width:88%;
	height:30px;
	margin:10px auto;
	background:#fff;
}
#header .search .search-box input{
	height:30px;
}
#text{
	width:73%;
	background:#fff;
	padding-left:15px;
	font-size:15px;
}
#search{
	width:20%;
	background:#de4943;
	float:right;
  color:#fff;
}
#content{
	width:100%;
	height:80%;
	background:#fff;
}
#content ul.list-intro{
	width:100%;
}
#content ul.list-intro li{
	width:33.3%;
	height:80px;
	border-right: 1px solid #f6f6f6;
	border-bottom: 1px solid #f6f6f6;
	float:left;
}
#content ul li a{
	display:block;
	width:100%;
	height:80px;
	overflow:hidden;
}
#content ul li a p{
	font-size:12px;
	text-align:center;
	width:100%;
	height:24px;
	line-height:24px;
}
#content ul li a i{
	display:block;
	width:36px;
	height:36px;
	margin:10px auto;
	background:url(../img/selectIcon0314.png) no-repeat;
}
#content ul li:nth-child(1) a i{				
	background-position:0 0;
}
#content ul li:nth-child(2) a i{				
	background-position:-84px 0px;
}
#content ul li:nth-child(3) a i{				
	background-position:-165px 1px;
}
#content ul li:nth-child(4) a i{				
	background-position:0 -70px;
}
#content ul li:nth-child(5) a i{				
	background-position:-84px -70px;
}
#content ul li:nth-child(6) a i{				
	background-position:-165px -70px;
}
#content ul li:nth-child(7) a i{				
	background-position:0 -141px;
}
#content ul li:nth-child(8) a i{				
	background-position:-84px -141px;
}
#content ul li:nth-child(9) a i{				
	background-position:-165px -141px;
}
#content ul li:nth-child(10) a i{				
	background-position:0 -217px;
}
#content ul li:nth-child(11) a i{				
	background-position:-84px -218px;
}
#content ul li:nth-child(12) a i{				
	background-position:-165px -217px;
}

#content .search-focus{
	width:100%;
	height:auto;
	background:#fff;
	/* display:none; */
	overflow:hidden;
}
#content .search-focus p{
	display:inline-block;
	width:20%;
	margin-left:10px;
	height:40px;
	line-height:40px;
	font-size:14px;
	background:#fff;
	float:left;
}
#content .search-focus ul.search-list{
	width:70%;
	height:100%;
	float:left;
}
#content .search-focus ul.search-list li{
	width: auto;
    height: 20px;
    font-size:13px;
    line-height: 20px;
    padding: 0 10px;
    margin: 12px 0 0 10px;
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    display: block;
    float: left;
    position: relative;
}
#content .search-focus ul.search-list li.last{
	margin-bottom:10px;
}
.bg{
  width:100%;
  height: 500px;
  background-color:#c6c6c6;
}
</style>