// Spread operator (...) changes Array to CSV

function log(...args){
    console.log(args);
}

var arr = [3,{name:'ade'},5,7,[5,[4,5],],8];

var arr1 = arr[3];
//result should be  [3,{name:”ade”},5,7,5,4,5,8]

log(...arr);