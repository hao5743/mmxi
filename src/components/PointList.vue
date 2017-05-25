<template>
  <div>
    <x-header fixed :left-options="{showBack: false}">经脉穴位大全</x-header>

     <search
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    position="absolute"
    auto-scroll-to-top top="46px"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    ref="search"></search>

      <div v-if="searching && !value" class="hot">
        <divider>大家都在搜</divider>
        <grid :rows="5">
          <grid-item v-for="i in hotPoints" :key="i" @click.native="chooseHot(i)">
              <span class="grid-center">{{i}}</span>
          </grid-item>
        </grid>
      </div>

      <group title="经脉穴位" v-if="!searching">
      <div v-for="item in Object.keys(items)" key="item">
         <cell
          class="mycell"
          :title="item"
          is-link
          :border-intent="false"
          :arrow-direction="showContent001 ? 'up' : 'down'"
          @click.native="open(item)"></cell>
          <template v-if="currentOpen == item ">
                <grid :rows="4">
                  <grid-item v-for="i in items[item]" :key="i" @click.native="showDetail(i)">
                    <span class="grid-center">{{i.point.split(' ')[0]}}</span>
                  </grid-item>
                </grid>
          </template>
      </div>
      </group>
  </div>
</template>

<script>
import { XHeader,Cell, CellBox, CellFormPreview, Group, Grid, GridItem, GroupTitle ,Search, Divider } from 'vux'
import router from '../router'

export default {
  components: {
    XHeader,Divider,
    Cell,
    CellBox,CellFormPreview,Group,Grid, GridItem, GroupTitle,Search
  },
  data () {
    return {
      currentOpen:'',
      items: this.$store.state.jingluos,
      hotPoints:["商阳","二间","三间","合谷","阳溪","偏历","温溜","下廉","侠白","尺泽"],
      showContent001: false,
      showContent002: false,
      results: [],
      value: '',
      searching: false
    }
  },
  methods: {
    open: function(item){
      this.currentOpen = this.currentOpen==item ? '' : item;
    },
    chooseHot: function(item){
      this.value = item;
    },
    showDetail: function(point){
      router.push({ name: 'point',query: { point }})
    },
    resultClick (item) {
      // window.alert('you click the result item: ' + JSON.stringify(item))
      this.showDetail(this.value)
    },
    getResult (val) {
      this.results = val ? searchData(val) : []
      console.log(this.results)
    },
    onSubmit () {
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
      this.searching = true
    },
    onCancel () {
      console.log('on cancel')
      this.searching = false
    }
  }
}

function searchData(val){
  let ans=[];
  LocalData.forEach((e)=> {
    e.content.forEach((data)=>{
      if(data.indexOf(val)>=0){
        ans.push({title:data,other:{}});
      }
    })
  });
  return ans;
}

</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.hot{
  padding-top:46px;
}
.gitem{
  padding:6px;
}
.mycell{
  background: #edf6ea
}
</style>
