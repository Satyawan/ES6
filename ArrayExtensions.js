let amounts = [800, 810, 820];

let salaries = Array.from(amounts, v=> v+100);
console.log(salaries);

/*
 We will get [900,910,920]

*/



let amounts = [800, 810, 820];
let salaries = Array.from(amounts,function(v){
	return v + this.adjustment;
},{adjustment:50});
console.log(salaries);

/*
 We will get [850, 860, 870]
 */


let amounts = [800, 810, 820];

let salaries = Array.from(amounts, v=> v+this.adjustment,{adjustment:50});
console.log(salaries);

/*
 We will get [900,910,920]

*/