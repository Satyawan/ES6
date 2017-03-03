 function showEndorsements(endorsements){
  var map = new Map();
  var orderedArray = [];

  endorsements.forEach((en)=>{ 
      if(map.has(en.skill)){
        var temp = map.get(en.skill);
        var tempCount = temp.count;
        var newCount = tempCount + 1;
        var tempUserArray = temp.user;
        
        temp.count = newCount;
        tempUserArray.push(en.user);
        
      }else{
        var user = en.user;
        var obj = {skill:en.skill,user:[],count:1}
        
        obj.user.push(user);
        map.set(en.skill,obj);
      }
  })
var newArray = [];

for (var values of map) {
  newArray.push(values);
}

var sorted = newArray.sort(function(a,b){
        return b[1].count - a[1].count;    
    });
return sorted;
};


var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' },
  { skill: 'html', user: 'Satya' }
];

showEndorsements(endorsements);