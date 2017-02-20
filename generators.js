function *process(){
	yield 8000;
	yield 8001;
}

let it=process();
console.log(it.next());

/*
 it will log {done:false, value:8000}
*/