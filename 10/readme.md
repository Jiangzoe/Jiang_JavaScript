# DOM

事件：事件就是用户和浏览器之间的交互行为，比如：点击按钮，鼠标移动等。

`onload`事件会在整个页面加载完毕后才触发。

```js
window.onload = function() {
    console.log('页面加载完毕了')
}
```

## dom查询

### 通过document对象调用

- `getElementsById()`：通过`id`属性来获取一个元素节点对象

  ```js
  var btn = document.getElementsById('btn')
  ```

- `getElementsByTagName()`：通过标签名获取一组元素的节点对象

  ```js
  var btn = document.getElementsByTagName('div')
  ```

- `getElementsByName()`：通过`name`属性获取一组元素节点对象

  ```js
  var btn = document.getElementsByName('gender')
  ```

### 子节点

- `getElementsByTagName()`：方法，返回当前节点的指定标签名后代节点

  ```js
  var lis = document.getElementsById('btn').getElementsByTagName('li')
  ```

- `childNodes`：属性，表示当前节点下的所有子节点。

  会获取包括文本节点在内的所有节点。

  根据`DOM`标签，标签间空白也会当成文本节点。在`ie8`以下的浏览器不会返回空白文本节点。

  ```js
  var lis = document.getElementsById('btn').childNodes
  ```

- `children`：属性，获取当前元素的所有子元素

  ```js
  var lis = document.getElementsById('btn').children
  ```

- `firstChild`：属性，当前节点的第一个子节点。

- `firstElementsChild`：属性，获取当前元素的第一个子元素，`ie8`以下不支持。

- `lastChild`：属性，获取当前节点的最后一个子节点。

### 其它

- `documentElement`：属性，保存的是`html`根元素

  ```js
  var html = document.documentElement
  ```

- `all`：属性，表示页面的所有元素

  ```js
  var all = document.all
  ```

- `getElementsByClassName`：方法，根据元素的`class`属性来查询以一组元素节点对象。不支持`ie8`以下的浏览器。

- `querySelector()`：方法，需要一个选择器的字符串作为参数，可以根据一个`css`选择器来查询一个元素节点对象。只会返回唯一的一个元素，如果满足条件的有多个，则只会返回第一个。

  ```js
  var div = document.querySelector('.box div')     //class="box1"下的div
  ```

- `querySelectorAll()`：方法，与`querySelector()`相似，不同的是它会将满足条件的元素封装到一个数组中返回。

## dom增删改

### 增

- `createElement()`：创建元素节点对象，需要一个标签名作为参数，将会根据该标签名创建元素节点对象，并将创建好的元素节点返回。

  ```js
  var li = document.createElement('li')
  ```

- `createTextNode()`：创建文本节点对象，需要一个文本内容作为参数，将会根据该内容创建文本节点，并将新的节点返回。

  ```js
  var text = document.createTextNode('广州')
  ```

- `appendChild()`：向一个父节点中添加一个新的子节点。

  ```js
  li.appendChild(text)    // <li>广州</li>
  ```

- `insertBefore()`：在指定的子节点前插入新的子节点。

  ```js
  父节点.insertBefore(新节点，旧节点)
  ```

### 改

- `replaceChild()`：使用指定的子节点替换已有的旧节点

  ```js
  父节点.replaceChild(新节点，旧节点)
  ```

### 删

- `removeChild()`：删除一个子节点

  ```js
  父节点.removeChild(子节点)
  ```

  ```js
  子节点.parentNode.removeChild(子节点)
  ```

## 操作css

### 操作内联样式

通过`style`属性修改或读取到的元素的样式，都是内联样式。

语法：`元素.style.样式名 = 样式值`。

如果`css`的样式中含有`-`，是不合法的，需要将样式名修改为驼峰式命名。

### 读取元素样式

- 获取元素的当前显示的样式，谁生效就显示谁。如果没有设置样式,则获取它的默认值。

  语法：`元素.currentStyle.样式名`

  只有`ie`浏览器支持，其它浏览器都不支持。

- `getComputedStyle()`：获取当前元素的样式，是`window`的方法，可以直接使用。

  需要两个参数，第一个参数为要获取样式的元素，第二个参数可以传递一个为元素，一般为null。

  该方法会返回一个对象，里面封装了当前元素对应的所有样式。

  如果获取的样式没有设置，则会获取到真实值，而不是默认值。

  `ie8`及以下不支持。

  ```js
  var obj = getComputedStyle(box1, null)
  console.log(obj.width)   //300px
  ```

### clientHeight、clientWidth

获取元素的可见宽度和高度，这些属性都是不带`px`的，返回的都是一个数字，可以直接进行计算。

会获取元素的宽度和高度，包括内容区和内边距。

属性只读，不能修改。

### offsetWidth、offsetHeight

获取元素的整个高度和宽度，包括内容区、内边距和边框。

### scrollHeight、scrollWidth

获取整个元素的滚动区域的高度和宽度。

