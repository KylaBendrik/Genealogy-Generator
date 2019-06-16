var estates = [];
const estateNames1 = ["Falcon", "Crystal", "Maple", "Deer", "Starry", "Grey", "Green", "Red", "Winding", "West", "East", "North", "South"]
const estateNames2 = ["meadow", "field", "lake", "acre", "gold", "river", "hedge", "wood"];

function newEstateName(){
  var one = estateNames1[Math.floor(Math.random() * estateNames1.length)]
  var two = estateNames2[Math.floor(Math.random() * estateNames2.length)]
  console.log(estateNames2.length)
  return one + two;
}

function findKingsEstate(){
  for (estate of estates){
    if (people[estate.lord].rank === 0){
      return estate
    }
  }
  return undefined
}
function findEstateByRank(rank){
  for (estate of estates){
    if (people[estate.lord].rank === rank){
      return estate
    }
  }
  return undefined
}

function initiateEstates(startNum){
  var startingEstates = startNum/2
  console.log (startNum + ", so should be " + startingEstates)
  for (i=0; i < startingEstates; i++){
    newEstate(people[i*2], 30);
  }
  console.log(estates);
}

function newEstate(lord,acreage){
  console.log("Assigning new estate to: " + lord.name)
  var heir = findHeir(lord)
  var name = newEstateName();
  var newEstate = {
    id: estates.length,
    name: name,
    lord: lord.id,
    heir: heir,
    acreage: acreage,
    active: true
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

function printEstate(person){
  if (person.estate > -1){
    return estates[person.estate].name;
  } else {
    return "";
  }
}