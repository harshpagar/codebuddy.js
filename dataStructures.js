// level {2}

var array = [1, 3, 4, 6, 7, 8]
var output = [];

for(var i=0; i < array.length;i++){
    if(array[i] % 2 != 0){
        output.push(array[i])
    }
}
console.log(output)


// Input string: 'Elie'
// Output should be string: 'ElIE'

var lower = [ "a","e","i","o","u"];
var upper = ["A","E","I","O","U"];

var input = "Elie";
var output = []

for(var i=0; i< input.length;i++){
    for(var j=0; j<lower.length; j++){
        if(input[i] == upper[j]){
            output.push(upper[j])
        }
        if(input[i] == lower[j]){
            output.push(upper[j])
        }
    }
}
console.log(output.join(""));


// Input array: [1, 3, 4, 6, 7, 8, 2, 5]
// Output should be a number: 8


var array= [1, 3, 4, 6, 7, 8, 2, 5];
var max = 0;

for(var i=0; i< array.length;i++){
    if(max < array[i]){
        max = array[i]
    }
}
console.log(max)