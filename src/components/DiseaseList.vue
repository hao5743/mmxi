<template>
  <div>
      <group>
        <grid :rows="4" v-if="!searching">
            <grid-item v-for="i in items" :key="i" @click.native="showDetail(i)" style="padding:8px">
                <span class="grid-center">{{i.name | cat}}</span>
            </grid-item>
        </grid>
      </group>
  </div>
</template>

<script>
import { XHeader,Cell, CellBox, CellFormPreview, Group, Grid, GridItem, GroupTitle ,Search, Divider,Tab,TabItem } from 'vux'
import router from '../router'
import diseases from '../json/diseases.json'

export default {
  components: {
    XHeader,Divider,
    Cell,
    CellBox,CellFormPreview,Group,Grid, GridItem, GroupTitle,Search,Tab,TabItem
  },
  data () {
    return {
      currentOpen:'',
      items: diseases,
      hotPoints:["中风","感冒","中暑","呕吐","便秘"],
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
    showDetail: function(item){
      console.log(item)
      router.push({ name: 'disease',query: { name:item.name }})
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
