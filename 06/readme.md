# 数组

## 数组方法

### push

向数组的末尾添加一个或多个元素，并返回数组的新长度。

```js
var arr = [1, 2, 3]
var res = arr.push(3, 4)    //   res = 5
```

### pop

删除数组末尾的最后一个元素，并将被删除的元素作为返回值返回。

```js
var arr = [1, 2, 3]
var res = arr.pop()    //res = 3
```

### shift

删除并返回数组的第一个元素。

```js
var arr = [1, 2, 3]
var res = arr.shift()    //res = 1
```

### unshift

向数组开头添加一个或多个元素，并返回新的数组长度。

```js
var arr = [1, 2, 3]
var res = arr.unshift(3, 4)    //res = 5
```

## 遍历

### for

使用`for`循环遍历

```js
for (var i = 0; i < arr.length; i++){
    console.log(arr[i])
}
```

### forEach

使用`forEach()`遍历，只支持ie8以上的浏览器。

`forEach()`需要一个函数作为参数，数组有几个元素，函数就执行几次。

每次执行，浏览器会将遍历到的元素以实参的形式传递进来，我们可以来定义形参去读取这些内容。

浏览器会在回调函数中传递三个参数：

- 第一个参数，是当前正在遍历的元素
- 第二个参数，是当前正在遍历的元素的索引
- 第三个参数，是正在遍历的数组

```js
arr.forEach(function(value, index, obj) {
    console.log('value=' + value)
    console.log('index=' + index)
    console.log('obj=' + obj)
})  
```

## slice

从某个已有的数组返回指定的元素，不会改变原数组，而是将截取到的元素封装到一个新数组中返回。

参数：

1. 截取开始的位置的索引，包含开始索引
2. 截取结束的位置的索引，不包括结束索引
   - 第二个参数可以省略，会截取从开始索引往后的所有元素
   - 可以传递负值，则从后往前计算，例如：-1表示倒数第一个

```js
var arr = [1,2,3,4,5]
var res = arr.slice(2,3)    //res=[3]
```

## splice

删除数组中的指定元素，会影响原数组，并将被删除的元素作为返回值返回。

参数：

1. 第一个参数表示开始位置的索引
2. 第二个参数表示删除的数量
3. 第三个参数及以后，表示将这些元素自动插入到开始位置索引前面

```js
var arr = [1,2,3,4]
var res = arr.splice(1,2)   //res = [2，3]
```

添加新元素：

```js
var arr = [1,2,3,4]
var res = arr.splice(1,0,5)    //res = [1,5,2,3,4]
```

## 数组去重

```js
var arr = [1,1,2,3,3,4,5]

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1)
            j--
        }
    }
}
console.log(arr)
```

## 剩余的数组方法

### concat

连接两个或多个数组，并将新的数组返回，不会对原数组产生影响。

```js
var arr = [1,2]
var arr1 = [2,3]
var res = arr.concat(arr1)    // res = [1,2,2,3]
```

### join

将数组转换成一个字符串，不会对原数组产生影响

在`join()`方法中可以指定一个字符串作为参数，这个字符串将会成为数组中的元素的连接符，默认为逗号

```js
var arr = [1,2]
var res = arr.join('-')    // "1-2"
```

### reverse

反转数组，会影响原数组

```js
var arr = [1,2]
arr.reverse()    // [2,1]
```

### sort

对数组中元素进行排序，会影响原数组，默认按Unicode编码进行排序，

可以在`sort()`方法中添加一个回调函数，来指定排序方式，需定义两个形参。浏览器会根据回调函数的返回值来决定元素的顺序，如果返回结果大于零，则会交换位置。

``` js
var arr = [1,3,2,4,11]
arr.sort()     // [1,11,2,3,4]
arr.sort(function (a,b) {
    return a-b
})     // [1,2,3,4,11]
```
