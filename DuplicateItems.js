duplicate = (arr) =>{
    //ist condition
    console.log(arr);
    var newarr = []; 
    for(let ar of arr){
        if(!(newarr.find(a=>a == ar))){
            newarr.push(ar);
        }
    }
    return newarr;
}

duplicate2 = (...arr) =>{
    return new Set(...arr);
}

var test = ['mike','james','james','alex'];
var testBis = ['alex', 'yuri', 'jabari'];

console.log(duplicate(test.concat(testBis)));
console.log(duplicate2(test.concat(testBis)));