# 数据获取
这里展示了如果需要在进入一个路由之后，如何获从服务器获取数据。可以分为**导航完成前**和**导航完成后获取**。

## 导航完成后获取数据
这种方式会马上导航和渲染组件，然后在组件的**created钩子**中获取数据。本例还展示了如何展示一个loading状态。

比如我们有个`post`组件，需要`根据$route.params.id`来获取文章详情：

```js
<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
```

## 导航之前获取数据
在页面载入之前获取，需要使用`beforeRouteEnter`钩子函数，数据获取成功之后调用`next`方法。注意：这种情况在路由改变前，**数据获取**、**组件渲染**已经完成了，所以可能进入页面会稍有些延迟。

```js
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => 
      if (err) {
        // display some global error message
        next(false)
      } else {
        next(vm => {
          vm.post = post
        })
      }
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  watch: {
    $route () {
      this.post = null
      getPost(this.$route.params.id, (err, post) => {
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
```





