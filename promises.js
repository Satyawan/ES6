function doAsync(){
	let p = new Promise(function(resolve, reject){
		console.log('in promise code');

		setTimeout(function(){
			console.log('resolving');
			resolve();
		},2000);
	});
	return p;
}

let promise = doAsync();
promise.then(function(){
	console.log('Fulfilled');
}, function(){
	console.log('Rejected');
});

/*This will output the following - 

in promise code 
Promise {[[PromiseStatus]]:"pending", [[PromiseValue]]: undefined}
resolving
Rejected

*/