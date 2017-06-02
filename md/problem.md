# 问题记录

## 进入新的page后页面不刷新的问题

在使用` <keep-alive>`的情况下：

page仅在第一次加载的时候调用`created`,`mounted`等组件钩子函数。离开的时候不会调用`destroyed`钩子函数。在使用vue-router时，如果第二次进入某个page，那么这个page不会被刷新。解决这个问题，需要使用router的钩子函数来解决：

```js
 beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.point = vm.$route.query.point
    })
  },  
```

上面通过在`beforeRouteEnter`钩子中重新获取数据，注意这里的组件没有重新加载，只是动态更新了数据，所以效率较高。

如果不使用` <keep-alive>`:

page每次进入的时候都会调用`created`,`mounted`等组件钩子函数，每次离开都会调用`destroyed`钩子函数。

说明：`keep-alive`

<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。

主要用于保留组件状态或避免重新渲染。

[https://cn.vuejs.org/v2/api/#keep-alive]
(https://cn.vuejs.org/v2/api/#keep-alive)

## vue-router过渡动画不起效果解决

注意：必须在style中要定义自己的css，否则动画不起作用

```html
<transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
</transition>
```

```css
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
```