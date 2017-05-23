<template>
  <div>
    <x-header :left-options="{showBack: false}">经脉穴位大全</x-header>
      <group title="经脉穴位">
      <div v-for="item in items" key="item">
         <cell
          :title="item.name"
          is-link
          :border-intent="false"
          :arrow-direction="showContent001 ? 'up' : 'down'"
          @click.native="open(item)"></cell>
          
          <template v-if="currentOpen == item.name ">
                <grid :rows="4">
                  <grid-item v-for="i in item.content" :key="i" @click.native="showDetail(i)">
                    <span class="grid-center">{{i}}</span>
                  </grid-item>
                </grid>
          </template>
      </div>
     
      </group>

  </div>
</template>

<script>
import { XHeader,Cell, CellBox, CellFormPreview, Group, Grid, GridItem, GroupTitle  } from 'vux'
import router from '../router'
import LocalData from '../data.json'
export default {
  components: {
    XHeader,
    Cell,
    CellBox,CellFormPreview,Group,Grid, GridItem, GroupTitle 
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      currentOpen:'',
      items: LocalData,
      showContent001: false,
      showContent002: false,
      title:['title1','title2']
    }
  },
  methods: {
    open: function(item){
      this.currentOpen = this.currentOpen==item.name ? '' : item.name;
    },
    showDetail: function(name){
      console.log(name);
      router.push({ name: 'point',query: { name: name }})
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
</style>
