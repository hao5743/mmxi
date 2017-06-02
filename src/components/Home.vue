<template>
  <div>
    <x-header fixed :left-options="{showBack: false}">经脉穴位大全</x-header>
    <tab :line-width="1">
      <tab-item selected @on-item-click="onItemClick">穴位</tab-item>
      <tab-item @on-item-click="onItemClick">疾病</tab-item>
    </tab>
    
    <template v-if="tabIndex==0" >
     <PointList></PointList>
    </template>
    <template v-if="tabIndex==1" >
      <DiseaseList></DiseaseList>
    </template>
    
  </div>
</template>

<script>
import { XHeader,Tab,TabItem } from 'vux'
import router from '../router'
import PointList from './PointList'
import DiseaseList from './DiseaseList'

export default {
  components: {
    XHeader,Tab,TabItem,PointList,DiseaseList
  },
  data () {
    return {
      msg:'',
      tabIndex:0
    }
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
      this.tabIndex = index;
    },
  }
}
    

</script>

<style>
</style>
