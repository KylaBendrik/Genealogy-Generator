function age(person){
  return year-person.birth;
}
function consanguity(person, potential){
  //same person
  if (person.id === potential.id){
    console.log (person.id + ", " + potential.id + ": " + 0)
    return 0;
  }
  //parent/child
  if (
    potential.id === person.father ||
    potential.id === person.mother ||
    potential.father === person.id ||
    potential.mother === person.id){
      
    console.log (person.id + ", " + potential.id + ": " + 1)
    return 1;
  }
  console.log (person.id + ", " + potential.id + ": " + 12)
  return 12;
}

function ifEligible(person, potential){
  var okAgePerson = (age(person) / 4) + 7;
  var okAgePotential = (age(potential) / 4) + 7;
  console.log(okAgePerson + ", " + okAgePotential)
  if (potential.spouse === -1 
      && age(potential) > okAgePerson
      && age(person) > okAgePotential
      && potential.gender === "female"
      && consanguity(person, potential) > consangLimit){
    return true;
  } else {
    return false;
  }
}
function raiseRank(person){
  if (person.sons.length > 0){
    for (i = 0; i < person.sons.length; i++){
      raiseRank(people[person.sons[i]]);
    }
  }
  if (person.daughters.length > 0){
    for (i = 0; i < person.daughters.length; i++){
      raiseRank(people[person.daughters[i]]);
    }
  }
  person.rank --;
}
function calculateRank(person, father, mother){
  if (person.father > -1){
    person.rank = father.rank + 1;
  } else {
  }
}
function findHeir(person){
  //returns people[n] where n = id of heir
  
  //if person has sons, then the eldest alive is heir
  if (person.sons.length > 0){
    for (son of person.sons){
      if (people[son].alive){
        return son;
      }
    }
  }
  if (person.daughters.length > 0){
    // if person has no sons but has daughters, then the eldest alive is heir
    for (daughter of person.daughters){
      if (people[daughter].alive){
        return daughter;
      }
    }
  }
  if (person.spouse > -1){
    console.log("wife is heir: " + person.spouse);
    return person.spouse
  }
  console.log("There is no heir")
}

function inherit(person){
  var heir = people[findHeir(person)];
  //If labels, then fix:
  if (person.sons.length > 0){
    //if son has SON, change son's label to label of 3
    if (heir.sons.length > 0){
      people[heir.sons[0]].charges[0].type = "label of 3";
    }
    //if son has label of 3, delete label
    heir.charges.splice(0)
  }
  //raise rank
  raiseRank(heir)
  //inherit estate
  if (person.estate !== ""){
    heir.estate = person.estate;
    estates[person.estate].lord = heir;
  }
}

function die(person){
  //person is no longer alive
  console.log("person is no longer alive");
  person.alive = false;
  //person's heir should inherit title and shield
  inherit(person);
  console.log("person's heir should inherit");
  //person's spouse is now unmarried
  if (person.spouse >  -1){
    people[person.spouse].spouse = -1;
  }
  console.log("person's spouse is now unmarried")
}

function title(person){
  if (person === undefined){
    return "";
  }
  if (person.gender === "male"){
    if (person.rank > 5){
      return "";
    } else {
      return titles[person.rank].male;
    }
  };
  if (person.gender === "female"){
    if (person.rank > 5){
      return "";
    } else {
      return titles[person.rank].female;
    }
  }
  console.log(person.name + "is causing error")
}