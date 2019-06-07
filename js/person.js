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
    charges: [],
    sons: []};
  if (mother){
    var father = people[mother.spouse]
    newPerson.father = mother.spouse;
    newPerson.mother = father.spouse;
    newPerson.tincture = father.tincture;
    newPerson.generation = father.generation ++;
  }
  var gendNum = Math.floor(Math.random()*2)
  if (gendOverwrite > -1){
    gendNum = gendOverwrite;
  }
  if (gendNum === 0){
    newPerson.gender = "male";
    newPerson.name = maleNames[Math.floor(Math.random()*maleNames.length)];
    if (newPerson.father > -1){
      people[newPerson.father].sons.push(people.length);
      if (people[newPerson.father].sons.length === 1){
        newPerson.charges.push({type: "label of 3", color: "or"})
      }
    }
  } else {
    newPerson.gender = "female";
    newPerson.name =  femaleNames[Math.floor(Math.random()*femaleNames.length)];;
  }
  console.log(newPerson);
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

function matGrandF(person){
  var mother = people[person.mother];
  var matGrandF = people[mother.father];
  return matGrandF;
}
