<template>
  <div>
     <x-header :left-options="{showBack: true}">穴位详情</x-header>
    <h2>{{ $route.query.name }}</h2>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'point',
  components:{XHeader},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
