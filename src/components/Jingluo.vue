<template>
  <div>
     <x-header :left-options="{showBack: true}">{{point.name}}</x-header>
     <tab>
      <tab-item selected @on-item-click="onItemClick">经脉循行</tab-item>
      <tab-item @on-item-click="onItemClick">主要病候</tab-item>
      <tab-item @on-item-click="onItemClick">主治概要</tab-item>
    </tab>
    <div v-if="tabIndex==0" class="info">
      <p>{{point.meridian}}</p>
      <p class="mydivider">图片</p>
    
      <div v-for="src in point.images" style="text-align:center;">
        <span style="font-size:18px;color:gray;">
          <spinner type="ios" slot="value"></spinner>
        </span>
        <x-img :src="src" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error"></x-img>
      </div>
    </div>
    <div v-if="tabIndex==1" class="info">
     <p> {{point.symptom}}</p>
    </div>
    <div v-if="tabIndex==2" class="info">
      <p>{{point.attending}}</p>
    </div>

  </div>
</template>

<script>
import { XHeader,Tab,TabItem ,XButton,XImg,Spinner} from 'vux'
import router from '../router'
import meridians from '../json/meridians'
console.log(meridians)
export default {
  name: 'jingluo',
  components:{XHeader,Tab,TabItem,XButton,XImg,Spinner},
  data () {
    return {
      point: {},
      name:'',
      tabIndex: 0
    }
  },
  created () {
    console.log('created')
    this.name = this.$route.query.name
    this.getDetail(this.name)
    console.log(this.point)
  },
   methods: {
    onItemClick (index) {
      console.log('on item click:', index)
      this.tabIndex = index;
    },
    getDetail(name){
      for(let i=0;i<meridians.length;i++){
         if(meridians[i].name == name){
          this.point = meridians[i];
        }
      }
    },
    back(){
      console.log('back')
      router.back()
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
  padding:10px;
}

.info {
  padding: 2px 5px;
}
.card {
  padding:16px;
}
.mydivider {
  background: lightgray;
  padding:2px 6px
}
.title {
  font-size: 20px;
  padding: 16px;
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
