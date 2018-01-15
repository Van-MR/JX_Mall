import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = { 
    money:0, //总价钱
    totalCount:0, //商品个数
    activeItem:{}, //商品个数
    goodsList:[],//商品列表
    isLogin:false,
    alls:[23,0,0],
    timeh:'',
    timem:'',
    times:''
}
let mutations = {
    ADD(state,obj){
        state.money += obj.danjia;
        state.goodsList.push(obj.duixiang);
        state.activeItem = obj.duixiang;
        state.totalCount += parseInt(obj.shuliang);
    },
    REDUCE(state,price){
        state.money -= price
    },
    ADDITEM(state,item){
    },
    DEL(state,item){
        let idx = state.goodsList.indexOf(item);
        state.goodsList.splice(idx,1);
    },
    CHANGETIME(state, time) {
        // state.alls -= 1;
        var alltime = state.alls[0]*60*60 + state.alls[1]*60 + state.alls[2] - time[0]*60*60 + time[1]*60 +time[2];
            setInterval(() => {
                alltime--;
                state.timeh = ('00' + parseInt(alltime/ 3600)).slice(-2);
                state.timem = ('00' + parseInt((alltime - 3600 * state.timeh) / 60)).slice(-2);
                state.times = ('00' + parseInt(alltime - 3600 * state.timeh - 60 * state.timem)).slice(-2);
                }, 1000)
      },
}
let getters = {
     js1(state) {
         console.log(state.timeh)
        return state.timeh
      },
      js2(state) {
        return state.timem
      },
      js3(state) {
        return state.times
      }
}
let actions = {
    add(context,obj){
        setTimeout(()=>{
            context.commit('ADD',obj)
        },1000)
    },
    del(context,item){
        setTimeout(() =>{
            context.commit('DEL',item)
        },1000)
    }
}
// 实例化vue仓库
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store