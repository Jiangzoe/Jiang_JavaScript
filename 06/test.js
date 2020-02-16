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
