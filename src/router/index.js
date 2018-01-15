import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'

//全局安装路由 让任何组件都可以使用路由
Vue.use(VueRouter);

//分别导入四个组件
// 导入组件
// 首页
import Home from '../pages/home/Home'
// 主会场
import Sesscions from '../pages/sesscions/Sesscions'
// 分类
import Sorts from '../pages/sorts/Sorts'
// 购物车
import Market from '../pages/market/Market'
// 我的酒仙
import Mine from '../pages/mine/Mine'

// 酒类组件
import Baijiu from '../pages/home/type/Baijiu'
import Putaojiu from '../pages/home/type/putaojiu'
import Yangjiu from '../pages/home/type/yangjiu'
import Laojiu from '../pages/home/type/laojiu'
import Nianfen from '../pages/home/type/nianfen'
import Club from '../pages/home/type/club'

import Qincang from '../pages/home/type/qincang'
import Xinpin from '../pages/home/type/xinpin'
import Jinxuan from '../pages/home/type/jinxuan'
//导入商品列表组件
// 白酒组件
import Whitewine from '../pages/sorts/Whitewine'
import Redwine from '../pages/sorts/Redwine'
import Yangwine from '../pages/sorts/Yangwine'
//导入详情列表组件
import WineDetail from '../pages/WineDetail'
import Details from '../pages/sesscions/Details'
import Comments from '../pages/sesscions/Comments'

import UserLogin from '../pages/mine/UserLogin'
import PhoneLogin from '../pages/mine/PhoneLogin'

import AllEval from '../pages/sesscions/AllEval'
import GoodEval from '../pages/sesscions/GoodEval'
import MiddleEval from '../pages/sesscions/MiddleEval'
import BadEval from '../pages/sesscions/BadEval'
import HasPicEval from '../pages/sesscions/HasPicEval'
//配置路由规则
const routes =[
        { path:'', component:Home },
        { path:'/home', component:Home },
        { path:'/sorts', component: Sorts, children:[
            {path:'/sorts/Whitewine/:index',component:Whitewine}
        ]},
        { path:'/Sesscions', component: Sesscions },
        { path:'/market', component: Market },
        { path:'/mine', component: Mine ,children:[
            {path:'', component:UserLogin},
            {path:'userLogin', component:UserLogin},
            {path:'phoneLogin', component:PhoneLogin}
        ]},
        // 首页
        { path:'/baijiu', component: Baijiu },
        { path:'/putaojiu', component: Putaojiu },
        { path:'/yangjiu', component: Yangjiu },
        { path:'/laojiu', component: Laojiu },
        { path:'/nianfen', component: Nianfen },
        { path:'/club', component: Club },
        { path:'/qincang', component: Qincang },
        { path:'/xinpin', component: Xinpin },
        { path:'/jinxuan', component: Jinxuan },
        // 分类
        { path:'/WineDetail/:wineId', component: WineDetail},
        //详情
        { path:'/details', component: Details },
        { path:'/comments', component: Comments,children:[
            {path:'', component:AllEval},
            {path:'allEval', component:AllEval},
            {path:'goodEval', component:GoodEval},
            {path:'middleEval', component:MiddleEval},
            {path:'badEval', component:BadEval},
            {path:'hasPicEval', component:HasPicEval}
        ] }
    ]
//创建路由实例    
const router = new VueRouter({
    mode:'history',
    routes
})

//因为把路由逻辑单独提出来了，所有我们要提供一个导出路由对象功能
export default router
