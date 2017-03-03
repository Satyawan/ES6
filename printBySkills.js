/*
// Result
[
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];
*/
function printBySkills(endorsements){
    var newEndorsement = [];
    for(let endorsement of endorsements){
        if(newEndorsement.find(x=>x.skill == endorsement.skill)){
            var index = newEndorsement.findIndex(x=>x.skill == endorsement.skill);
            newEndorsement[index].user.push(endorsement.user);
            newEndorsement[index].count += 1;
        }
        else{
            newEndorsement.push({'skill':endorsement.skill,'user':[endorsement.user],'count':1})
        }
    }
    var sorted = newEndorsement.sort(function(a,b){
        return b.count - a.count;    
    });
    console.log(sorted);
}

var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' },
  { skill: 'html', user: 'Satya' }
];

printBySkills(endorsements);