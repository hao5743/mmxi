<template>
  <div>
     <x-header :left-options="{showBack: true}">穴位详情</x-header>
     
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
      <div style="text-align:center;">
          <span style="font-size:18px;color:gray;">
            <spinner type="ios" slot="value"></spinner>
          </span>
          <x-img :src="point.image" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error"></x-img>
      </div>
    
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
import { XHeader,Tab,TabItem ,XButton,XImg,Spinner} from 'vux'
import router from '../router'
export default {
  name: 'point',
  components:{XHeader,Tab,TabItem,XButton,XImg,Spinner},
  data () {
    return {
      point: {},
      tabIndex: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.point = vm.$route.query.point
    })
  },  
  created () {
    console.log('created')
    this.point = this.$route.query.point
    console.log(this.point)
  },
  mounted(){
    console.log('mounted')
  },
  destroyed(){
    console.log('destroyed')
  },
   methods: {
    onItemClick (index) {
      console.log('on item click:', index)
      this.tabIndex = index;
    },
    fetchDetail (){
      
    },
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = '图片加载失败'
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

p{
  padding: 10px;
}

.info {
  padding: 12px 5px;
}
.card {
  padding:16px;
}
.mydivider {
  background: lightgray;
  padding:2px 6px
}
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  font-size: 16px;
  color: gray;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>
