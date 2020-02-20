# BOM

浏览器对象模型，`BOM`可以使我们通过`js`来操作浏览器。

`BOM`中为我们提供了一组对象，用来完成对浏览器的操作。

`BOM`对象：

- Window：代表的是整个浏览器的窗口，同时window也是网页中的全局对象
- Navigator：代表的是当前浏览器的信息，通过该对象可以来识别不同的浏览器
- Location：代表当前浏览器的地址栏信息，通过location来获取地址栏信息，或者操作浏览器跳转页面
- History：代表浏览器的历史纪录，可以通过该对象来操作浏览器历史记录，但只能操作浏览器前进或后退，且只在当次访问有效。
- Screen：代表用户的屏幕信息，可以获取到用户的显示器相关的信息。

## navigator、userAgent

用于返回浏览器名称。但由于历史原因，大部分属性都不能帮助我们识别浏览器了。

一般我们只会用`userAgent`来判断浏览器的信息，不同的浏览器会有不同的`userAgent`。

##  history

- `back()`：用来回退到上一个页面，作用和浏览器的回退按钮一样。

  ```js
  history.back()
  ```

- `forward()` ：可以跳转下一个页面，作用和浏览器的前进按钮一样。

  ```js
  history.forward()
  ```

- `go()`：可以用来跳转到指定 的页面，需要一个整数作为参数。

  ```js
  history.go(2)   //向前跳转两个页面
  history.go(-1)   //向后跳转一个页面
  ```

## location

直接打印`location`，可以获取到完整的地址栏信息。

```js
console.log(location)     //https://www.bilibili.com/video/av21589800/?p=126
```

- `assign()`：用来跳转到其它的页面，作用和直接修改`location`一样。
- `reload()`：用于重新加载页面，作用和刷新按钮一样，如果在方法中传一个`true`作为参数，则会强制清空缓存刷新页面。
- `replace()`：可以使用一个新的页面替换当前页面，但是不会生成历史记录，无法回退。
