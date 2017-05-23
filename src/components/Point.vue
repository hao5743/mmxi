<template>
  <div>
     <x-header :left-options="{showBack: true}">穴位详情</x-header>
     <group>
     <panel :list="list" type="1"></panel>
     </group>
    <!--<h2>{{ $route.query.name }}</h2>  -->
     <tab>
      <tab-item selected @on-item-click="onItemClick">概述</tab-item>
      <tab-item @on-item-click="onItemClick">定位</tab-item>
      <tab-item @on-item-click="onItemClick">取穴</tab-item>
    </tab>
  </div>
</template>

<script>
import { XHeader,Tab,TabItem, Panel, Group } from 'vux'
export default {
  name: 'point',
  components:{XHeader,Tab,TabItem,Panel,Group},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '云门',
        desc: '现代常用于治疗气管炎、支气管炎等。配中府、期门等主治胸肋痛。'
      }]
    }
  },
   methods: {
    onItemClick (index) {
      console.log('on item click:', index)
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
</style>
