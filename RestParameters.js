//Rest parameter(...) changes CSV to arrays.

function log(level, ...args){
    console.log(args);

    if(level === 'debug'){
        console.log(args[0]);
    }
}

var obj = {a:'a', b:'b'};
log('debug','obj:',obj,'that was my obj');

/*
 it will return 
 ['obj:',{a:'a', b:'b'},'that was my obj']
 obj:
*/