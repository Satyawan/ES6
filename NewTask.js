/*
function random2(seed, n){
    var seedLength=(seed+'').length;
    var seedSquare = seed*seed+'';
    while(seedSquare.length <  (2 * seedLength)){
        seedSquare = "0" + seedSquare;
        if(seed == 69013){console.log('seedsquare = '+ seedSquare);}
    }
    seedSquare = seedSquare.substr(seedLength/2,seedLength)*1;
    console.log('squared - '+ seedSquare);
    if(n==1)return seedSquare;
    else {
        return random2(seedSquare,n-1);
    }
}
console.log(random2(881231,23)); */


function almostIncreasingSequence(sequences)
{
    for(seqence of sequences)
}

console.log(almostIncreasingSequence([1,2,3]))
