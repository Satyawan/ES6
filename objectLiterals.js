//below is Revelaing Module Pattern with ES5

function greetingService(name){
    var sayHi = function(){
        console.log('Hi'+ name+ '!');
    },
    var sayHello = function(){
        console.log('Hello'+ name+ '!');
    }

    return{
        sayHi:sayHi, // see here we had to write sayHello two times.. but in ES6 shown below we don't have to.
        sayHello:sayHello
    }
}

console.log(greetingService('satya'));
// this will print 
// {sayHi:[Function], sayBye: [Function]}


// Now, same example in ES6 
function greetingService(name){
    var sayHi = function(){
        console.log('Hi'+ name+ '!');
    },
    var sayHello = function(){
        console.log('Hello'+ name+ '!');
    }

    return{
        sayHi, // we don't have to mention the variable name again...
        sayHello
    }
}

console.log(greetingService('satya'));