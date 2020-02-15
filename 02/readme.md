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