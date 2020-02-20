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

# 表达式与运算符

## 运算符

### 算术运算符

当对非`Numbber`类型进行运算时，会将这些值转换为`Number`然后进行运算

任何值和`NaN`进行运算都得`NaN`

- `+`运算符

  - 如果对两个字符串进行加法运算，则会做拼串处理。

    ```js
    result = "123" + "456"   // "123456"
    ```

  - 任何值和字符串做加法运算，都会先转换为字符串，再做拼串处理。

    ```js
    result = 123 + 'a'    //    '123a'
    ```

  - 可利用以上特性对任意数据类型进行隐式类型转化，实际上也是调用`String()`函数

    ```js
    var c = 123
    c = c + ''
    ```

- 任何值做`-`、`*`、`/`进行运算时，都会先转换成`Number`类型再进行运算，并可以通过一个值进行 `-0`、`*1`、`/1`来将其转换为`Number`类型，也是隐式类型转换。

### 一元运算符

`+` 运算符在对于非`Number`类型的值，会先转换为`Number`，然后再运算，原理和`Number()`函数一样，属于隐式类型转换

```js
var result = 1 + "2" + 3     //123
var res = 1 + + "2" + 3      //6
```

### 自增和自减

- 自增：通过自增（`++`）可以使变量再自身的基础上增加1，原变量会立即自增1。

  ```js
  var a = 1
  a++     //  a = 2
  ```

  无论是 `a++`还是`++a`，都会立即使原变量的值自增1，不同的是值不同。`a++`的值等于原变量的值，`++a`的值等于自增后的值。

  ```js
  var res = d++ + ++d + d      //64
        //  20  +  22 + 22
  ```

- 自减：通过自增（`--`）可以使变量再自身的基础上减去1，原变量会立即减去1。`a--`的值等于原变量的值，`--a`的值等于自减后的值。

## 逻辑运算符

`js`中给我们提供了三种逻辑运算符：非（`!`）、与（`&&`）、或（`||`）

### 非

为任意的数据类型做两次非运算，为隐式类型转换

```js
var a = "hello"
a = !!a
```

### 与

只要有一个`false`就返回`false`，只有两个值都返回`true`才会返回`true`

- 对于非布尔值进行与运算时，如果两个值都为`true`则会返回后面的数值。

  ```js
  var res = 5 && 6    //6
  ```

- 对于非布尔值进行与运算时，如果两个值都为`false`则会返回前面的数值。

  ```js
  var res = 0 && NaN    //0
  ```

### 或

只要有一个`true`就返回`true`，只有两个值都返回`false`才会返回`false`

或运算：如果第一个值为`true`，则直接返回第一个值。如果第一个值为`false`则直接返回第二个值。

## 赋值运算符

### =

将符号右侧的值赋值给左侧的变量

### +=、-=、*=、/=、%=

`a += 5`  等价于 `a = a + 5`，其余同理

## 关系运算符

通过关系运算符可以比较两个值之间的大小关系，如：`>`、`=`、`<`，如果关系成立，则返回`true`，不成立则返回`flase`

非数值情况：会将其转换为`Number`类型再进行比较。

- 任何值和`NaN`作比较都是`false`。

  ```js
  console.log('1' < 'hello')    //  false
  ```

- 如果符号两侧的值都是字符串时，则不会转换为数字进行比较，而是根据 Unicode 编码来进行比较，且比较字符编码时时一位以为进行比较，如果两位一样，则比较下一位。比较中文时没有意义。

  ```js
  console.log('bbc' < 'b')     //true
  ```

- 比较两个字符串型的数字时，一定要转型

  ```js
  console.log('123' > +'5')
  ```

## 相等运算符

### ==

当使用`==`来比较两个值时，如果值的类型不同，则会自动进行类型转换，将其转换为相同的类型，再做比较。

undefined衍生自null，即 `undefined  == null`返回`true`

### ===

用来判断两个数值是否相等时，不会自动做类型转换操作，如果数据类型不同，会直接返回`false`

# 语句

## if

- 语法一：

  ```js
  if (条件表达式) {
      语句    
  }
  ```

  只有当条件表达式的值为`true`时，才会执行`if`后的语句，且仅能控制紧随其后的那个语句。

- 语法二：

  ```js
  if (条件表达式) {
      语句1
  } else {
      语句2
  }
  ```

  如果条件表达式的值为`true`，执行语句1，反之执行语句2。

- 语法三：

  ```js
  if (条件表达式) {
      语句1
  } else if {
      语句2
  } else {
      语句3
  }
  ```

  该语句执行时，会从上到下依次对条件表达式进行求值判断。如果会`true`，执行当前语句，为`false`则继续向下判断

## switch

语法：

```js
switch (条件表达式) {
    case 表达式:
        语句1
        break
    case 表达式:
        语句2
        break
    case 表达式:
        语句3
        break
    default:    //  相当于else
        语句4
        break
}
```

执行时会依次将`case`后的表达式的值，和`switch`后的条件表达式的值进行全等比较，如果比较结果结果为`true`，则从当前`case`开始执行，当后面所有代码都会执行，使用`break`可以来退出`switch`语句。

## while

语法：

```js
while (条件表达式) {
    语句    // 循环体
}
```

执行时，先对条件表达式进行求值判断，如果会`true`，则执行循环体，循环体执行完毕以后，再对表达式进行判断，以此类推。可以使用`break`来退出循环。

do...while语法：

```js
do {
	语句...
} while (条件表达式)
```

在执行时，会先执行循环体，然后再判断。可以保证循环体至少执行依次。

## for

语法：

```js
for (初始化表达式;条件表达式;更新表达式) {
    语句
}
```

执行流程：

1. 执行初始化表达式，初始化变量
2. 执行条件表达式，判断是否执行循环
3. 更新表达式，更新完毕后执行流程2

## break和continue

### break

`break`关键字可以用来退出`switch`或循环语句

- 可以为循环语句创建一个`label`，用来标识当前的循环，可以在`break`后跟着一个`label`，这样`break`将会结束指定的循环。

  ```js
  outer:
  for (var i = 0; i <5; i++){
      console.log('外层循环' + i)
      for (var j = 0; j < 5; j++) {
          break outer
          console.log('内层循环' + j)
      }
  }
  
  //   只输出外层循环0
  ```

### continue

`continue`关键字可以用来跳过当次循环。

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

# 对象

对象属于一种复合的数据类型，在对象中可以保存多个不同数据类型的属性。

对象的分类：

- 内建对象：由`ES`标准中定义的对象，在任何的`ES`的实现中都可以使用，例如：`Math`、`String`、`Function`等
- 宿主对象：由`js`的运行环境提供的对象，主要指由浏览器提供的对象，比如：`BOM`、`DOM`
- 自定义对象：由开发人员自己创建的对象

## 基本操作

- 创建对象

  ```js
  var obj = new Object()          //使用new关键字调用的函数，是构造函数constructor，构造函数是专门用来创建对象的函数。
  ```

- 向对象中添加属性

  语法：`对象.属性名 = 属性值`

- 读取对象中的属性

  语法：`对象.属性名`

  如果读取对象中没有的属性，不会报错，而是返回`undefined`

- 修改对象中的属性

  语法：`对象.属性名 = 新属性值`

- 删除对象中的属性

  语法：`delete 对象.属性名`

## 栈、堆

栈内存：`js`中的变量都是保存到栈内存的，即基本数据类型都是存储在栈内存中的。

堆内存：引用数据类型都是存储到堆内存中的，将内存地址保存在栈内存中。

## 枚举对象中的属性

使用`for...in`语句

语法： 

```js
for (var 变量 in 对象) {
    console.log(n + ':' + obj[n])
}
```

对象中有几个属性，循环体就会被执行几次。每次执行时，会将对象中的一个属性的名字赋值给变量。

# 函数和作用域

函数也是一个对象，函数中可以封装一些功能（代码），在需要时可以执行这些功能（代码）。

## 基本操作

- 创建函数

  ```js
  var fun = new Function()
  ```

- 执行函数

  ```js
  var fun = new Function()
  func()    //调用函数
  ```

- 使用函数声明来创建函数

  语法：

  ```js
  function 函数名(形参1,形参2,...) {
      语句...
  }
  ```

- 使用函数表达式来创建函数

  语法：

  ```js
  var 函数名 = function(形参1,形参2,...) {
      语句...
  }
  ```

## 参数

- 形参：可以在函数的()中来指定一个或多个形参，多个形参之间用逗号隔开，声明形参就相当于在函数内部声明了对应的变量，但是不赋值。

- 实参：在调用函数时，可以在()中指定实参，实参将会赋值给函数中对应的形参。

调用函数时解析器不会检查实参的类型，所以要注意：是否可能会接受到非法的参数，如果可能，则需要对参数进行类型的检查。

调用函数时，解析器也不会检查实参的数量，多余的实参不会被赋值，如果实参数量少于形参数量，则对应实参的形参会是`undefined`

## 返回值

可以使用`return`来设置函数的返回值，`return`后的值将会作为函数的执行结果返回。可以定义一个变量来接收函数的返回值。

```js
var res = function (a,b) {
    sum = a + b
    return sum
}
```

在函数中`return`后的语句都不会执行。

## 立即执行函数

函数定义完了立即被调用，叫做立即执行函数，往往只会执行依次。

```js
(function (a, b) {
    return sum = a + b
})(2, 3)
```

## 作用域

作用域指一个变量的作用的范围，`js`中有两种作用域：

1. 全局作用域：

   - 直接编写在`script`标签中的`js`代码，都在全局作用域中。
   - 全局作用域在页面打开时创建，在页面关闭时销毁
   - 在全局作用域中有一个全局对象`window`，它代码的是一个浏览器的窗口，它由浏览器创建，可直接使用。
   - 在全局作用域中，创建的变量都会作为`window`对象的属性保存，创建的函数都会作为`window`对象的方法保存。
   - 全局作用域中的变量都是全局变量，在页面的任意部分都可以访问的到。

2. 函数作用域

   - 函数作用域在函数调用时创建函数作用域，函数执行完毕以后，函数作用域销毁

   - 每调用一次函数就会创建一个新的函数作用域，他们之间是相互独立的。

   - 函数作用域中可以访问到全局作用域中的变量，但全局作用域中不能访问到函数作用域中的变量。

   - 当在函数作用域中操作一个变量时，会先在自身作用域中寻找，如果有便直接使用，如果没有就往上一级寻找，直到全局作用域，若全局作用域中没有就报错。

   - 在函数作用域中也有声明提前的特性。

   - 在函数中，不使用`var`声明的变量都会变成全局变量

     ```js
     var c = 33
     function fun5() {
         c = 10
     }
     console.log(c)    //10
     ```

## 变量的声明

变量声明提前：使用`var`关键字声明的变量，会在所有的代码执行之前被声明。

```js
console.log(a)      //undefined
var a = 123    
```

函数声明提前：使用函数声明形式创建的函数`function(){}`，会在所有代码执行之前就被创建，所以我们可以在声明前调用函数。

```js
func()    // 1
function func () {
    console.log('1')
} 

func2()    //   报错
var func2 = function(){
    console.log('2')
}        //func2会被提前声明，但是未赋值，所以不能提前调用
```

## this

解析器在调用函数每次都会向函数内部传递一个隐含的参数（`this`），`this`指向的是一个对象，这个对象成为函数执行的上下文对象，根据函数**调用方式**的不同，`this`会指向不同的对象。

1. 以函数的形式调用时，`this`永远都是`window`
2. 以方法的形式调用时，`this`就是调用方法这个对象。
3. 当以构造函数的形式调用时，`this`就是新创建的那个对象。

## 构造函数

构造函数就是一个普通的函数，创建方式和普通函数没有区别，不同的是构造函数习惯首字母大写。

构造函数和普通函数的区别就是调用方式的不同，普通函数是直接调用，而构造函数需要使用`new`关键字来调用。

```js
function Person () {
    
}
var per = new Person()
```

构造函数的执行流程：

1. 立刻创建一个新的对象
2. 将新建的对象设置为函数中的`this`，在构造函数中可以使用`this`来引用新建的对象。
3. 逐行执行函数中的代码
4. 将新建的对象作为返回值返回

使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。我们将通过一个构造函数创建的对象，成为该类的实例。

检测一个对象是否是一个类的实例，可以使用`instanceof`检测。

## 原型对象

创建的每一个函数，解析器都会向函数中添加一个属性`prototype`。这个属性对应着一个对象，这个对象就叫做原型对象。

如果函数作为普通函数调用，`prototype`没有任何作用。

当函数以构造函数形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象。可以通过`__proto__`来访问该属性。

```js
function Person() {
    
}
var per = new Person()
console.log(per.__proto == Person.prototype)
```

原型对象相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。

当我们访问对象中的一个属性或方法时，会先在自身中寻找，如果没有，就会去原型对象中寻找。

# 字符串的方法

在底层，字符串是以字符数组的形式保存的。

```js
['H', 'e', 'r']
```

所以可以使用`str.length`来获取字符串的长度。

## charAt

可以返回字符串中指定位置的字符，根据索引获取指定字符。

```js
var str = 'hello jiang'
var res = str.charAt(6)     // j
```

##  concat

连接两个或多个字符串，和数组方法中`concat`同理。

## indexOf

检索一个字符串中是否含有指定内容。

如果字符串中含有该内容，则会返回其第一次出现的索引，没有找到则返回`-1`

可以指定第二个参数，指定开始查找的位置。

```js
var str = 'hello jiang'
var res = str.indexOf('o')     // 4
var res1 = str.indexOf('p')    //-1
```

## lastIndexOf

和`indexOf`方法一样，不同的是，`lastIndexOf`是从后往前找。

## slice

截取字符串，和数组方法中同使用。

## split

可以将一个字符串拆分一个数组，可以传递一个参数作为拆分字符串的标准

```js
var str = 'abc,bdcnefg'
var res = str.split(',')    // [abc,bdcnefg]
```

## toLowerCase

将字符串转换为小写，不会影响原数组

## toUpperCase

将字符串转换为大写，不会影响原数组

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

# 正则表达式

正则表达式用于定义一些字符串的规则。

- 创建一个正则表达式的对象，语法：

  ```js
  var 变量 = new RegExp('正则表达式','匹配模式')
  ```

- 第二个参数可以是：

  1. `i`：忽略大小写
  2. `g`：全局匹配模式

- `test()`：用来检查一个字符串是否复合正则表达式的规则，如果符合返回`true`，否则返回`false`

  ```js
  var reg = new RegExp('a')   //检测字符串中是否含有a
  var str = 'a'
  var res = reg.test(str)    //true
  ```

## 正则语法

- 使用字面量创建正则表达式，语法：

  ```js
  var 变量 = /正则表达式/匹配模式
  ```

- 检查字符串中是否含有a或b，`'|'`表示或者

  ```js
  var reg = /a|b/
  ```

- 检查字符串中是否有字母，`[]`里的内容也是或的内容。`[a-z]`表示任意小写字母。`[A-z]`表示任意字母

  ```js
  var reg = /[a-z]/
  ```

- 检查字符串中是否含有`abc`、`adc`、`aec`

  ```js
  var reg = /a[bde]c/
  ```

- 除了`^[ab]`

  ```js
  var reg = /^[ab]/
  ```

- 任意数字

  ```js
  var reg = /[0-9]/
  ```

## 字符串和正则相关的方法

- `split()`用来拆分数组。

  根据任意字母拆分数组

  ```js
  var str = '1a2b3c5d'
  var res = str.split(/[a-z/)    //[1,2,3,5]
  ```

- `search()`搜索字符串中是否含有指定内容，与`indexOf()`相似。

  只会查找第一个，即使设置全局匹配也没用。

  搜索字符串中是否含有`abc`、`aec`、`adc`

  ```js
  var str = 'abc hello'
  var res = str.search(/a[bde]c/)
  ```

- `match()`可以根据正则表达式，从一个字符串中将复合条件的内容提取出来。

  默认情况下`match`找到第一个复合要求的内容，就会停止检索，可以设置全局匹配模式来查找到所有的内容。

  `match`会将匹配到的内容封装到一个数组中返回。

  ```js
  var str = '1a2b3c5d'
  var res = str.match(/[a-z]/g)    // [a,b,c,d]
  ```

- `replace()`可以将字符串中指定内容替换为新的内容。

  有两个参数：第一个参数是被替换的内容，第二个参数是新的内容。

  默认只会替换第一个。

  ```js
  var str = '1a2b3c5da'
  var res = str.replace(/a/g, '-')    //  1-2b3c5da
  ```

## 正则表达式语法

### 量词

可以通过量词来设置一个内容出现的次数，且只对它前面的第一个内容起作用。

- `{n}` 正好出现的次数

  检查字符串中是否含有`aaa`

    ```js
  var reg = /a{3}/
    ```

- `{m,n}` 出现`m-n`次

  检查字符串中是否出现1-3次b

  ```js
  var reg = /ab{1,3}c/
  ```

- `{m,}` 出现m次以上

- `m+` 至少一个，相当于`{1,}`

- `m*` 0个或多个，相当于`{0,}`

- `m?` 0个或一个，相当于`{0,1}`

### 符号

- `^`表示是否以一个字母开头

  ```js
  var reg = /^a/
  ```

- `$`表示以什么结尾

  ```js
  var reg = /a$/
  ```

- 注意：`/^a$/`表示以a开头并马上结尾。同时设定开头和结尾需要使用`/^a/a$/`

- `.`表示任意字符

  在正则表达式中使用`\`作为转义字符。

  检查一个字符串中是否含有`.`

  ```js
  var reg = /\./
  ```

## 字母

- `\w`：任意字母、数字、`_`

- `\W`：除了字母、数字、`_`

- `\d`：任意数字

- `\D`：除了数字

- `\s`：空格

- `\S`：除了空格

- `\b`：单词边界，独立单词

  检测字符串中是否含有单词`child`

  ```js
  var reg = /\bchild\b/
  ```

- `\B` ：除了单词边界

### 手机号检测

手机号规则：

- 11位数字
- 以1开头
- 第二位是3-9的任意数字
- 三位以后9个任意数字

```js
var reg = /^1[3-9][0-9]{9}$/
```

### 去空格

```js
var reg = str.replace(/^\s*|\s*$/g,'')
```

### 邮件正则

邮件规则：

任意字母数字下划线  .任意字母数字下划线 @ 任意字母数字`.` `com`.`cn`任意字母(2-5位)

```js
var reg = /^\w{3,}(\.\w+)*@[a-z0-9]+(\.[A-z]{2-5}){1,2}$/
```

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
  var btn = document.getElementById('btn')
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
  var lis = document.getElementById('btn').getElementsByTagName('li')
  ```

- `childNodes`：属性，表示当前节点下的所有子节点。

  会获取包括文本节点在内的所有节点。

  根据`DOM`标签，标签间空白也会当成文本节点。在`ie8`以下的浏览器不会返回空白文本节点。

  ```js
  var lis = document.getElementById('btn').childNodes
  ```

- `children`：属性，获取当前元素的所有子元素

  ```js
  var lis = document.getElementById('btn').children
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

