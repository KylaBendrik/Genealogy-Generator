function age(person){
  return year-person.birth;
}

function ifEligible(person, potential){
  var okAgePerson = (age(person) / 4) + 7;
  var okAgePotential = (age(potential) / 4) + 7;
  if (potential.spouse === -1 
      && age(potential) > okAgePerson
      && age(person) > okAgePotential
      && potential.gender === "female"
      && consanguinity(person, potential) > consangLimit){
    return true;
  } else {
    return false;
  }
}
function parentage(person){
  if (person.father > -1){
    var father = people[person.father];
    if (person.gender === "female"){
      father.daughters.push(people.length);
    } else {
      father.sons.push(people.length);
    }
    calculateBlazon(person, father);
  }
  if (person.mother > -1){
    var mother = people[person.mother];
    if (person.gender === "female"){
      mother.daughters.push(people.length);
    } else {
      mother.sons.push(people.length);
    }
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

function die(person){
  //person is no longer alive
  person.alive = false;
  
  //person's heir should inherit title and shield
  inherit(person);
  //person's spouse is now unmarried
  if (person.spouse >  -1){
    people[person.spouse].spouse = -1;
  }

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