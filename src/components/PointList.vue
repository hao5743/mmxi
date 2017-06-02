<template>
  <div>
    <!--<x-header fixed :left-options="{showBack: false}">经脉穴位大全</x-header>
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item selected>穴位</tab-item>
      <tab-item>疾病</tab-item>
    </tab>-->
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

      <group title="" v-if="!searching">
      <div v-for="item in Object.keys(items)" key="item">
         <cell
          class="mycell"
          :title="item"
          is-link
          :border-intent="false"
          :arrow-direction="showContent001 ? 'up' : 'down'"
          @click.native="open(item)"></cell>
          <template v-if="currentOpen == item ">
                <cell-box is-link @click.native="showJlDetail(item)">
                  {{item}}
                </cell-box>
                <grid :rows="4">
                  <grid-item v-for="i in items[item]" :key="i" @click.native="showDetail(i)" style="padding:8px">
                    <span class="grid-center">{{i.point.split(' ')[0] | cat}}</span>
                  </grid-item>
                </grid>
                <!--<template v-for="(e,index) in items[item]" >
                        <a @click.native="showDetail(e)">{{e.point.split(' ')[0]}}</a>
                    <span v-if="(index+1)%4==0 && index>0"></br></span>
                </template>-->
          </template>
      </div>
      </group>
  </div>
</template>

<script>
import { XHeader,Cell, CellBox, CellFormPreview, Group, Grid, GridItem, GroupTitle ,Search, Divider,Tab,TabItem } from 'vux'
import router from '../router'
export default {
  components: {
    XHeader,Divider,
    Cell,
    CellBox,CellFormPreview,Group,Grid, GridItem, GroupTitle,Search,Tab,TabItem
  },
  data () {
    return {
      currentOpen:'',
      items: this.$store.state.jingluos,
      points: this.$store.state.points,
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
      this.showDetail(item.other)
    },
    getResult (val) {
      this.results = val ? this.searchData(val) : []
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
    },
    searchData(val){
      let ans=[];
      this.points.forEach(function(e) {
        if(e.point.indexOf(val)>=0 || e.pinyin[0].indexOf(val)>=0 ||e.pinyin[1].indexOf(val)>=0 ){
          ans.push({title:e.point,other:e});
        }
      }, this);
      return ans;
    },
    showJlDetail(item){
      console.log(item)
      router.push({ name: 'jingluo',query: { name:item }})
    }
  },
  filters: {
    cat: function (value) {
      return value.length>3 ? value.substring(0,2)+'...' : value
    }
  }
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
  background: #fbf9fe
}
</style>
