//Template literals help us in string manipulations.

// Let us see without using template literals..
function greetingService(name){
    return{
        sayHi(){
            console.log('Hi'+ name+ '!'); // see the string concatenation without template literals..
        },
        sayHello(){
            console.log('Hello'+ name+ '!');
        }
    }
}

console.log(greetingService('satya'));


// Now, let us use template literals..
function greetingService(name){
    return{
        sayHi(){
            console.log(`Hi ${name} !`); // see the string concatenation with template literals..
        },
        sayHello(){
            console.log(`Hello ${name} !`);
        }
    }
}

var gs = greetingService('satya');
gs.sayHello();