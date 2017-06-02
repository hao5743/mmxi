import Vuex from 'vuex'
import Vue from 'vue'
// import VueResource from 'vue-resource'

// Vue.use(VueResource);
Vue.use(Vuex)

// import points from './data'
import points from '../json/points.json'
const jingluos=getJingluo()

function readData(){

}

export default new Vuex.Store({
  state: {
    count: 0,
    global:"global data",
    points,
    jingluos
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

function getJingluo(){
    let ans = {};
    points.forEach(function(element) {
        if(typeof ans[element.kind] == 'undefined'){
            ans[element.kind] = [element]
        }else{
            ans[element.kind].push(element)
        }
    }, this);
    return ans
}