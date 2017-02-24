//For of loop is simple way to iterate over array or objects.

//let use see the example without for of loop first..
function log(level, ...args){
    if(level === 'debug')
    {
        for(var i=0; i<args.length; i++){
            console.log(args[i]);
        }
    }
}
var a = {a:'foo'};
log('debug', 'Object A: ', a);


//Now, let us see the same example with for of loop..
function log(level, ...args){
    if(level === 'debug')
    {
        for(var i of args){  // See how simple it is..
            console.log(i);
        }
    }
}
var a = {a:'foo'};
log('debug', 'Object A: ', a);