# 其它

## call和apply

当对函数调用`call()`和`apply()`时，都会调用函数执行

```js
function fun() {
    alert('我是fun')
}
fun.call()
fun.apply()
fun()
```

在调用`call()`和`apply()`时，可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的`this`

`call()`可以将实参在对象之后依次传递。

`apply()`需要将实参封装到一个数组中统一传递。

## arguments

在调用函数时，浏览器每次都会传递两个隐含的参数：

1. `this`
2. 封装实参的对象 `arguments`（类数组对象）

`arguments`也可以通过索引来操作数据，也可以获取长度

在调用函数时，我们所传递的实参都会在`arguments`中保存

`arguments.length`可以用来获取实参的长度。

`arguments`有一个属性叫做`callee`，对应一个函数对象，就是当前正在指向的函数对象。

## Math

不是构造函数，属于一个工具类，不同创建对象，封装了数学运算相关的属性和方法。

- `Math.PI`   表示圆周率
- `Math.abs()`   返回一个数的绝对值
- `Math.ceil()` 向上取整，小数位有值就自动进一
- `Math.floor(`  向下取整，小数位会被舍掉
- `Math.round()`  对一个数进行四舍五入
- `Math.roudom()` 用来生成一个0-1之间的随机数
- `Math.max()` 获取多个数中的最大值
- `Math.min()` 获取多个数中的最小值

## 包装类

在`js`中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象

- `String()`：将基本数据类型字符串转换为`String`对象
- `Number()`：将基本数据类型数字转换为Number对象
- `Boolean()`：将基本数据类型布尔值转换为`Boolean`对象

创建一个`Number`类型的对象

```js
var num = new Number(3)
```

但实际开发中很少使用。

```js
var a = 'string'
console.log(a.length)    //6
a.t = 2
console.log(a.t)         //undefined
```

当把一个原始类型尝试以对象的方式访问它的时候，比如使用`length`属性或者新加属性，`JavaScript`会创建一个包装类型对象，它的值与原来的值一样。在访问完成后，这个临时变量就会被销毁。

