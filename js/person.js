var year = 0;
var people = [];
const maleNames = ["Adam", "Nicholas", "Simon", "Geoffrey", "Peter", "Thomas", "Gilbert", "Ralf", "Walter", "Henry", "Richard", "William", "James", "John", "Matthew", "Joseph", "Luke", "Marcus", "Joshua", "Michael" ];
const femaleNames = ["Agnes", "Alice", "Anna", "Anne","Beatrice", "Isabella", "Joan", "Juliana", "Margery", "Catherine", "Michelle", "Annabelle", "Julia", "Mary", "Martha", "Elizabeth", "Rose", "Victoria"];

function age(person){
  return year-person.birth;
}
function ifEligible(person, potential){
  var okAge = (age(person) / 2) + 6;
  if (potential.spouse === -1 
      && age(potential) > okAge 
      && potential.gender === "female"
      && potential.father !== person.father
      && potential.mother !== person.mother){
    return true;
  } else {
    return false;
  }
}
function newPerson(mother, year, gendOverwrite){
  var newPerson = {
    name: "", 
    birth: year, 
    gender:"", 
    alive:true, 
    father: -1, 
    mother: -1, 
    spouse: -1,
    generation: 0,
    tincture: "",
    ordinaries: [],
    charges: [],
    sons: []};
  
  // is it a starter or does it have parents?
  if (mother){
    var father = people[mother.spouse]
    newPerson.father = mother.spouse;
    newPerson.mother = father.spouse;
    var generationFather = father.generation
    newPerson.generation = generationFather + 1;
  }

  //gender
  var gendNum = Math.floor(Math.random()*2)
  if (gendOverwrite > -1){
    gendNum = gendOverwrite;
  }

  //gender specifics
  if (gendNum === 0){
    newPerson.gender = "male";
    newPerson.name = maleNames[Math.floor(Math.random()*maleNames.length)];
    if (newPerson.father > -1){
      var father = people[newPerson.father];
      father.sons.push(people.length);
      calculateBlazon(newPerson, father, people.length);
    }
  } else {
    newPerson.gender = "female";
    newPerson.name =  femaleNames[Math.floor(Math.random()*femaleNames.length)];;
    if (newPerson.father > -1){
      var father = people[newPerson.father];
      calculateBlazon(newPerson, father, people.length);
    }
  }

  //finish newPerson
  people.push(newPerson);
}

function personName(person, relative){
  if (relative < 0){
    return "N/A";
  } else {
    return people[relative].name;
  }
}

function printChildren(person){
  var printSons = [];
  for (son of person.sons){
    printSons.push(" "+people[son].name)
  }
  return "Sons:" + printSons;
}

function grandparents(person){
  var mother = people[person.mother];
  var father = people[person.father];
  
  var grandparents={
    PatGF: people[father.father], 
    PatGM: people[father.mother], 
    MatGF: people[mother.father], 
    MatGM: people[mother.mother]
  }
}
