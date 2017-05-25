## 1.调试的时候屏幕缩放到很小，很困扰的问题

原因：meta viewport 没有设置好

解决：在index.html中添加代码：

```html
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
``` 