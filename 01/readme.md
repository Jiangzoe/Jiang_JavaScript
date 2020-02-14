# 数据类型

## 数据类型

`JavaScript`中定义了七种数据类型，分为原始类型和对象类型

- 原始类型：`String`、`Number`、`Boolean`、`Null`、`Undefined`、`Symbol`
- 对象类型：`Object`

### 字符串

- 在`js`中字符串需要使用引号引起来

  ```js
  var str = 'hello'
  ```

- 使用单引号或双引号都可以，两种使用无区别，但不能混着用

- 引号不能嵌套，需要单引号里放双引号，反之亦可。

- 字符串 中可以使用`\`作为转义符，例如：`\"`

### Number

- 在`js`中所有的数值都是`Number`类型，包括整数和浮点数
- `Number.MAX_VALUE`表示`js`中的最大值，`Number.MIN_VALUE`表示大于零的最小值
- 当使用Number标识的值超过了最大值，会使用`Infinity`来表示无穷大
- `NaN`是一个特殊数字，表示 Not a Number
- 整数运算基本可以保证精准，浮点运算则会有不精确的时候。例如：`0.1 + 0.2 = 0.3000000004`

### Boolean

布尔值主要用来做逻辑判断，`true`表示为真，`false`表示为假

### Null

专门用来表示一个为空的对象。

### Undefined

当声明一个变量，但不给变量赋值时，它的值就是`undefined`，表示未定义。

## 强制类型转换

将一个数据类型转换为其他的数据类型叫做强制类型转换，类型转化指将其它数据类型转换为`String`、`Boolean`或`Number`

### 转换为String

- 调用被转换数据类型的`toString()`方法

  ```js
  var a = 123
  a = a.toString()   //该方法不会影响到原变量，会将转换的结果返回
  ```

  **null与undefined没有toString方法，如果调用则会报错。**

- 调用`String()`函数

  ```js
  var a = 123
  String(a) 
  ```

  对于`Number`和`Boolean`实际上就是调用`toString`方法，对于`null`和`undefined`，它会将`null`直接转换为`"null"`，`undefined`同理。

### 转换为Number

- 使用`Number`函数

  ```js
  var a = '123'
  a = Number(a)
  ```

  - 字符串 => 数字

    - 如果是纯数字的字符串，则直接转换为数字
    - 如果字符串中 有非数字的内容，则转换为`NaN`
    - 如果字符串是一个空串或全是空格的字符串，则转换为0。

- 布尔 => 数字：`true`转换成1，`false`转换成0。

  - Null => 数字：转换成0

- Undefined => 数字： `NaN`

- 使用`parseInt()`把一个字符串转换为一个整数，可以将一个字符串中有效的整数内容取出来。

  ```js
  var a = "123px"
  a = parseInt(a)    // "123"
  ```

  对于非字符串的数值，使用`parseInt()`方法的时候，会先将该值转换成字符串再进行操作

  ```js
  var a = true
  a = parseInt(a)    // NaN 
  //    a= true   =>   a = "true"  => Number(a)  => NaN
  ```

- 使用`parseFloat()`把一个字符串转换为一个浮点数

### 转换成Boolean

- 使用`Boolean()`函数
  - 数字转布尔，除0和`NaN`都是`true`
  - 字符串转布尔，除空串都是`true`
  - `null`、`undefined` => `false`
  - 对象也会转换为`true`

## 包装对象

```js
var a = 'string'
console.log(a.length)    //6
a.t = 2
console.log(a.t)         //undefined
```

当把一个原始类型尝试以对象的方式访问它的时候，比如使用`length`属性或者新加属性，`JavaScript`会创建一个包装类型对象，它的值与原来的值一样。在访问完成后，这个临时变量就会被销毁。
 