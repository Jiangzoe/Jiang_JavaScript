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

可以将一个字符串拆分一个数组

```js
var str = 'abc,bdcnefg'
var res = str.split(',')    // [abc,bdcnefg]
```

## toLowerCase

将字符串转换为小写，不会影响原数组

## toUpperCase

将字符串转换为大写，不会影响原数组