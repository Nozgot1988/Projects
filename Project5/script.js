var arr = [10, 25, 154, 47, 25, 5];
var index;
for (var i = 0; i < arr.length; i++){
    var min = arr[i];
    for (var y = i; y < arr.length; y++){
        if (min > arr[y]){
             min = arr[y];
             index = y;
        }
    }
    var temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
}

console.log(arr);