var estates = [];

function initiateEstates(startNum){
  var startingEstates = startNum/2
  console.log (startNum + ", so should be " + startingEstates)
  for (i=0; i < startingEstates; i++){
    newEstate(i, people[i*2]);
  }
  console.log(estates);
}

function newEstate(name, lord){
  console.log("Assigning new estate to: " + lord.name)
  var heir = findHeir(lord)
  var newEstate = {
    id: estates.length,
    name: name,
    lord: lord.id,
    heir: heir,
    acreage: 30,
  }
  lord.estate = newEstate.id
  estates.push(newEstate)
}

function growEstate(estate){
  estate.acreage += 1;
}

function growEstates(estates){
  for (estate of estates){
    growEstate(estate);
  }
}