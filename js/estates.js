var estates = [];

function initiateEstates(startNum){
  var startingEstates = startNum/2
  console.log (startNum + ", so should be " + startingEstates)
  for (i=0; i < startingEstates; i++){
    newEstate(i, i*2);
  }
  console.log(estates);
}

function newEstate(name, lord){
  var heir = findHeir(lord)
  var newEstate = {
    id: estates.length,
    name: name,
    lord: lord,
    heir: heir,
    acreage: 100,
  }
  people[lord].estate = newEstate.id
  estates.push(newEstate)
}