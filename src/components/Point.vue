<template>
  <div>
     <x-header :left-options="{showBack: false}">穴位详情</x-header>
     <x-button type="primary" @click.native="back">返回</x-button>
     
     <div class="card">
       <div>穴位名称: {{point.point}}</div>
       <div>所属经络: {{point.kind}}</div>
       <div>分类: {{point.category}}</div>
     </div>
    <!--<h2>{{ $route.query.name }}</h2>  -->

     <tab>
      <tab-item selected @on-item-click="onItemClick">主治</tab-item>
   
      <tab-item @on-item-click="onItemClick">定位</tab-item>
      <tab-item @on-item-click="onItemClick">配伍</tab-item>
    </tab>
    <div v-if="tabIndex==0" class="info">
      <!--<p>{{point.dissection}}</p>-->
      <p class="mydivider">主治</p>
      <p>{{point.attending}}</p>
       <p class="mydivider">图片</p>
      <x-img :src="point.image" ></x-img>
    </div>
    <div v-if="tabIndex==1" class="info">
     <p> {{point.location}}</p>
    </div>
    <div v-if="tabIndex==2" class="info">
      <p>{{point.compatibility}}</p>
    </div>

  </div>
</template>

<script>
import { XHeader,Tab,TabItem ,XButton,XImg} from 'vux'
import router from '../router'
export default {
  name: 'point',
  components:{XHeader,Tab,TabItem,XButton,XImg},
  data () {
    return {
      point: {},
      tabIndex: 0
    }
  },
  created () {
    this.point = this.$route.query.point
    console.log(this.point)
  },
   methods: {
    onItemClick (index) {
      console.log('on item click:', index)
      this.tabIndex = index;
    },
    back(){
      console.log('back')
      router.back()
    },
    fetchDetail (){
      
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.info {
  padding: 12px;
}
.card {
  padding:16px;
}
.mydivider {
  background: lightgray
}
</style>
