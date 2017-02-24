// Spread operator (...) changes Array to CSV

function log(level, ...args){
    if(level === 'debug'){
        console.log(args);
    }
}

var foo = {bar:'baz'}
var obj = [{a:'a'},{b:'b'}]
obj = [foo, ...obj] //this will just concat foo and obj together.

log('debug',...obj);