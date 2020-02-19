# 事件

## 事件对象

当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数。

在事件对象中封装了当前事件相关的一切信息。

在`ie8`及以下中，不会传递事件对象。是将事件对象作为`window`对象的属性来保存的。

```js
areaDiv.onmousemove = function(event) {
    // if (!event) {
       // event = window.event
   // }
    //解决事件对象的兼容性问题
    event = event || window.event
    console.log(event)
}
```

### 鼠标/键盘属性

- `clientX`：返回当前事件被触发时，鼠标指针的水平坐标
- `clientY`：返回当前事件被触发时，鼠标指针的垂直坐标
- `pageX`、`pageY`：返回当前事件被触发时，鼠标指针相对于当前页面的坐标。在`ie8`中不支持

### div跟随鼠标移动

```css
#box1 {
    width: 100px;
    height: 100px;
    background-color: green;
    /* 开启box1的绝对定位 */
    position: absolute;
}
```

```html
<div id="box1"></div>
    <script>
        var box1 = document.getElementById('box1')
        // 绑定鼠标移动事件
        document.onmousemove = function(evnet) {
            // 解决事件对象兼容性问题
            event = event || window.event

            // 获取滚动条的距离
            // chrome中认为滚动条是body的，火狐等浏览器认为浏览器的滚动条的html的
            var st = document.body.scrollTop || document.documentElement.scrollTop

            //获取鼠标的坐标
            var left = event.clientX
            var top = event.clientY

            // 设置div的偏移量
            box1.style.left = left + 'px'
            box1.style.top = top + st + 'px'
        }
    </script>
```

## 事件冒泡

事件冒泡指的是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            height: 200px;
            width: 200px;
            background-color: red;
        }
        #sp {
            background-color:blue;
        }
    </style>
</head>
<body>
    <div id="box1">
        我是box1
        <span id="sp">我是span</span>
    </div>
    <script>
        var s1 = document.getElementById('sp')
        var box1 = document.getElementById('box1')

        s1.onclick = function () {
            alert('我是span')
        }

        box1.onclick = function () {
            alert('我是box1')
        }

        document.body.onclick = function() {
            alert('我是body')
        }
    </script>
</body>
</html>
```

### 取消冒泡

当不希望发生事件冒泡时，可以通过事件对象来取消冒泡。

可以将事件对象的`cancleBubble`设置为`true`，即可以取消冒泡。

```js
s1.onclick = function (event) {
    alert('我是span')
    event.cancleBubble = true
}
```



## 事件委派

指将事件统一绑定给元素的共同的祖先元素，这样当后代上的事件被触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。

事件委派是利用了冒泡，通过事件委派可以减少事件的绑定次数，提高程序的性能。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id="u1">
        <li><a href="javascript:;" class="link">超链接一</a></li>
        <li><a href="javascript:;" class="link">超链接二</a></li>
        <li><a href="javascript:;" class="link">超链接三</a></li>
    </ul>
    <script>
        var ul = document.getElementById('u1')
        u1.onclick = function (event) {
            // 如果触发事件的对象是我们期望的元素，则执行
            // event中的target表示触发事件的对象
            if (event.target.className == 'link') {
                alert('我是ul的单击响应函数')
            }
        }
    </script>
</body>
</html>
```

## 事件绑定

使用`对象.事件 = 函数`的形式绑定响应函数，它只能同时为一个元素的一个事件绑定一个响应函数。

```js
btn.onclick = function () {
    console.log('1')
}
btn.onclick = function () {
    console.log('2')
}

//   2 
```

### addEventListener

因此我们可以使用`addEventListener()`的方法来为元素绑定响应函数。它有三个参数。

- 事件的字符串，不要on
- 回调函数，当事件触发时函数会被调用
- 是否在捕获阶段触发事件，需要一个布尔值，一般都传`false`

```js
btn.addEventListener('click',function(){
    console.log('1')
},false)
```

该方法可以同时为一个元素的相同事件同时绑定多个响应函数。先绑定的先执行。

不支持`ie8`即以下的浏览器。

### attachEvent

在`ie8`及以下中可以使用`attachEvent()`方法来绑定事件。

参数：

- 事件的字符串，需要on
- 回调函数

```js
btn.attachEvent('onclick', function () {
    alert(1)
})
```

不同于`addEventListener()`的是，它是后绑定先执行。

### bind

定义一个函数，用来为指定元素绑定响应函数

- `addEventListener()`中的`this`是绑定事件的对象
- `attachEvent()`中的`this`是`window`

参数：

- `obj`：要绑定事件的对象
- `eventStr`：事件的字符串，不要`on`
- `callback`：回调函数

```js
function bind(obj, eventStr, callback) {

    if (obj.addEventListener) {
        // 大部分浏览器兼容的方式
        obj.addEventListener(eventStr, callback, false)
    }else {
        // ie8及以下
        obj.attachEvent('on' + eventStr, function () {
            // 在匿名函数中调用回调函数
            callback().call(obj)
        })
    }   
}
```

## 事件传播

关于事件的传播，网景公司和微软公司有不同的理解。

微软公司认为事件应该是由内向外传播，也就是当前事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就是说事件应该在冒泡阶段执行。

网景公司认为事件应该时由外向内传播的，也就时当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，然后在向内传播给后代传播，也就是说事件应该在捕获阶段执行。

W3C综合了两个公司的方案，将事件传播分成了三个阶段：

- 捕获阶段：在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件。
- 目标阶段：事件捕获到目标元素，捕获结束开始在目标元素上触发事件。
- 冒泡阶段：事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件。

## 拖拽事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
        }
    </style>
</head>
<body>
    <div id="box1"></div>
    <script>
        var box1 = document.getElementById('box1')
        // 拖拽的流程
        // 1. 当鼠标在拖拽元素中按下时，开始拖拽
        box1.onmousedown = function (event) {
        // 2. 当鼠标移动时，元素跟随鼠标移动
        // div的偏移量，鼠标.clientX - 元素.offsetLeft
            event = event || window.event
            var ol = event.clientX - box1.offsetLeft
            var ot = event.clientY - box1.offsetTop
            document.onmousemove = function (event) {
                event = event || window.event
                var left = event.clientX - ol
                var top = event.clientY -ot
                box1.style.left = left + 'px'
                box1.style.top = top + 'px'
            }
            // 阻止浏览器默认行为，对ie8不起作用。
            // return false
        }
        // 3. 当鼠标松开时，被拖拽元素固定在当前位置。
        document.onmouseup = function (event) {
            document.onmousemove = null
            document.onmouseup = null
        }

    </script>
</body>
</html>
```
