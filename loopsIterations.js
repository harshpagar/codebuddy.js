// level {2}

// Input: 6

// Output:

// 1 1 2 3 5 8
// Sum: 20


var input = 6;
var n1 =0
var n2 =1 
var next = 0;
var output = "1" +"";
var sum =1

for(var i=1; i< input;i++){
    next = n1+n2;
    n1=n2;
    n2=next;
    output += next+ " ";
    sum += next
}
console.log(output);
console.log(sum);