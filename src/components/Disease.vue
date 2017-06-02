<template>
  <div>
     <x-header :left-options="{showBack: true}">{{name}}</x-header>
     <p>
       {{point.content}}
     </p>

     <p>
       {{point.digest}}
     </p>

  </div>
</template>

<script>
import { XHeader,Tab,TabItem ,XButton,XImg,Spinner} from 'vux'
import router from '../router'
import diseases from '../json/diseases'

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
  },
   methods: {
    onItemClick (index) {
      console.log('on item click:', index)
      this.tabIndex = index;
    },
    getDetail(name){
      for(let i=0;i<diseases.length;i++){
         if(diseases[i].name == name){
          this.point = diseases[i];
        }
      }
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
