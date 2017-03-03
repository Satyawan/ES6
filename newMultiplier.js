random1=(seed, n) => {
    var seedLength=(seed+'').length;
    for(i=0;i<n;i++){
        var seedSquare=seed*seed+''
        while(seedSquare.length < 2*seedLength){
              seedSquare = "0" + seedSquare;
             if(seed == 69013){console.log('seedsquare = '+ seedSquare);}
        }
          
        seed=seedSquare.substr(seedLength/2, seedLength)*1;
        console.log('squared - '+ seed);
    }
    
    return seed
}

console.log(random1(881231,23));