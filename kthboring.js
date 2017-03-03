isPrimeNum = (n,s=2) => {
    while (s <= Math.sqrt(n)) {
        if (n % s++ < 1) return false;
    }
    return n>1;
}
isFibonacci= (n,c=1,p=0,i=false) => {
     while(p<=n){
       if(p == n){
         i = true;
       }
       c = p + c;
       p = c - p;
     }
     
    return i;
}
kthBoring = k=> {
    var s = 1,i=1;
    while(i<=k){
        var r = true;
        while(r){
            s++;
            if(isFibonacci(s))continue;
            if(isPrimeNum(s))continue;
            else r = false;
        }
        i++
    }
   return s;
}

console.log(kthBoring(2));