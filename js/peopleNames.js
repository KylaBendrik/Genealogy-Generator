const elements = [
  {name:"ac", meaning:"oak", gender:["male", "female"], part: [1]},
  {name:"ackar", meaning:"field", gender:["male"], part: [2]},
  {name:"adal", meaning:"noble", gender:["male"], part: [1,2]},
  {name:"adal", meaning:"noble", gender:["female"], part: [1]},
  {name:"aelf", meaning:"elf", gender:["male", "female"], part: [1,2]},
  {name:"aesc", meaning:"ash tree", gender:["male", "female"], part: [1]},
  {name:"ag", meaning:"blade edge", gender:["male"], part: [1,2]},
  {name:"agi", meaning:"awe", gender:["male", "female"], part: [1]},
  {name:"agil", meaning:"sword edge", gender:["male"], part: [2]},
  {name:"ahsa", meaning:"axle", gender:["male"], part: [1]},
  {name:"ahsa", meaning:"axle", gender:["female"], part: [2]},
  {name:"akr", meaning:"field", gender:["male"], part: [2]},
  {name:"ala", meaning:"all", gender:["male", "female"], part: [1,2]},
  {name:"ald", meaning:"old", gender:["male"], part: [2]},
  {name:"alf", meaning:"elf", gender:["male", "female"], part: [1]},
  {name:"alja", meaning:"foreign", gender:["male", "female"], part: [1]},
  {name:"aljan", meaning:"strength", gender:["male"], part: [2]},
  {name:"alt", meaning:"old", gender:["male"], part: [1,2]},
  {name:"alu", meaning:"protection", gender:["male", "female"], part: [1]},
  {name:"amal", meaning:"work", gender:["male"], part: [1,2]},
  {name:"amal", meaning:"work", gender:["female"], part: [1]},
  {name:"and", meaning:"zeal", gender:["male"], part: [1,2]},
  {name:"anker", meaning:"anchor", gender:["male"], part: [1,2]},
  {name:"anne", meaning:"alone", gender:["female"], part: [2]},
  {name:"ans", meaning:"god", gender:["male", "female"], part: [2]},
  {name:"ant", meaning:"giant", gender:["male"], part: [1,2]},
  {name:"anu", meaning:"ancestor", gender:["male", "female"], part: [1]},
  {name:"ari", meaning:"eagle", gender:["male", "female"], part: [1]},
  {name:"arn", meaning:"eagle", gender:["male", "female"], part: [2]},
  {name:"arr", meaning:"warrior", gender:["male"], part: [1,2]},
  {name:"asc", meaning:"ash tree", gender:["male", "female"], part: [1]},
  {name:"athana", meaning:"year", gender:["female"], part: [1,2]},
  {name:"atta", meaning:"father", gender:["male", "female"], part: [1,2]},
  {name:"aud", meaning:"wealth", gender:["male", "female"], part: [1]},
  {name:"austr", meaning:"east", gender:["male", "female"], part: [1]},
  {name:"avi", meaning:"desired", gender:["male", "female"], part: [1]},
  {name:"bacher", meaning:"baker", gender:["male"], part: [2]},
  {name:"badu", meaning:"fight", gender:["male"], part: [1]},
  {name:"bah", meaning:"stream", gender:["male", "female"], part: [1,2]},
  {name:"bald", meaning:"bold", gender:["male"], part: [1,2]},
  {name:"ban", meaning:"bone", gender:["male"], part: [1,2]},
  {name:"baro", meaning:"man", gender:["male"], part: [1]},
  {name:"bart", meaning:"beard", gender:["male"], part: [1,2]},
  {name:"bat", meaning:"boat", gender:["male", "female"], part: [1]},
  {name:"bauga", meaning:"ring", gender:["male", "female"], part: [1,2]},
  {name:"beald", meaning:"bold", gender:["male"], part: [1,2]},
  {name:"beki", meaning:"stream", gender:["female"], part: [1, 2]},
  {name:"beo", meaning:"bee", gender:["male"], part: [1,2]},
  {name:"beo", meaning:"bee", gender:["female"], part: [1]},
  {name:"beofor", meaning:"beaver", gender:["male"], part: [1,2]},
  {name:"beorn", meaning:"bear", gender:["male"], part: [1,2]},
  {name:"beos", meaning:"bent grass", gender:["male"], part: [1,2]},
  {name:"bere", meaning:"barley", gender:["male", "female"], part: [1,2]},
  {name:"berg", meaning:"protection", gender:["male"], part: [2]},
  {name:"bern", meaning:"bear", gender:["male"], part: [1,2]},
  {name:"bird", meaning:"bird", gender:["female"], part: [1,2]},
  {name:"blac", meaning:"pale", gender:["male", "female"], part: [1]},
  {name:"blao", meaning:"blue", gender:["male", "female"], part: [1]},
  {name:"blaw", meaning:"blue", gender:["male", "female"], part: [2]},
  {name:"blithe", meaning:"happy", gender:["female"], part: [1,2]},
  {name:"bodo", meaning:"order", gender:["male", "female"], part: [1]},
  {name:"bold", meaning:"house", gender:["male"], part: [1,2]},
  {name:"bord", meaning:"board", gender:["male"], part: [1,2]},
  {name:"borg", meaning:"castle", gender:["male"], part: [1,2]},
  {name:"bot", meaning:"remedy", gender:["male", "female"], part: [1]},
];

function Cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomElement(gender,  part){
  const array = elements.filter(element => element.gender.includes(gender) && element.part.includes(part));
  return array[Math.floor(Math.random() * array.length)].name
}
function newName(person){
  var A = randomElement(person.gender, 1);
  var B = randomElement(person.gender, 2);
  //select random from elements

  //check if gender correct
  //concatnate
  //assign name and meaning
  person.name = Cap(A + B);
}

