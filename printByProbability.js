function printAccordingToProbability(probability){
    var randomArray = [];
    for(prob of probability){
        var weight = prob[1];
        var number = prob[0];
        for(let i=0; i<weight; i++){
            randomArray.push(number);
        }
    }
    var randomNumber = randomArray[Math.ceil(Math.random() * randomArray.length)];
    console.log(randomNumber);
}

var probablityArray = [ [3,15],[5,60],[8,25] ];
for(let i=0 ; i< 20; i++){
    printAccordingToProbability(probablityArray);
}