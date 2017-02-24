// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to extract data from arrays or objects into distinct variables.

function greetingService(name){
    var sayHi = function(){
        console.log('Hi'+ name+ '!');
    },
    var sayHello = function(){
        console.log('Hello'+ name+ '!');
    }

    return{
        sayHi, 
        sayHello
    }
}

var gs = greetingService('satya');
gs.sayHello();

//if we want to only pull sayHello in gs the es5 way is 
var gs = greetingService('satya').sayHello();
gs();

//if we want to only pull sayHello in gs the es6 way using destructuring is 
var {sayHello} = greetingService('satya');
sayHello();

