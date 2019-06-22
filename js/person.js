var year = 0;
var people = [];
const maleNames = ["Adam", "Nicholas", "Simon", "Geoffrey", "Peter", "Thomas", "Gilbert", "Ralf", "Walter", "Henry", "Richard", "William", "James", "John", "Matthew", "Joseph", "Luke", "Marcus", "Joshua", "Michael" ];
const femaleNames = ["Agnes", "Alice", "Anna", "Anne","Beatrice", "Isabella", "Joan", "Juliana", "Margery", "Catherine", "Michelle", "Annabelle", "Julia", "Mary", "Martha", "Elizabeth", "Rose", "Victoria"];
const titles = [
  {male: "King", female: "Queen"},
  {male: "Prince", female: "Princess"},
  {male: "Duke", female: "Duchess"},
  {male: "Count", female: "Countess"},
  {male: "Viscount", female: "Vicountess"},
  {male: "Baron", female: "Baroness"},
]

function newPerson(mother, year, gendOverwrite){
  var newPerson = {
    id: people.length,
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
    sons: [],
    daughters: [],
    rank: -1,
    estate: -1,
    genes: {eyeColor: [], hairColor: []}
  };
  
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
    parentage(newPerson);
  } else {
    newPerson.gender = "female";
    newPerson.name =  femaleNames[Math.floor(Math.random()*femaleNames.length)];;
    parentage(newPerson);
  }

  //rank
  calculateRank(newPerson, people[newPerson.father], people[newPerson.mother]);
  //mendel
  mendel(newPerson);
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
  var sons = [];
  var daughters = [];
  var printSons = "";
  var printDaughters = "";
  if (person.sons.length > 0){
    for (son of person.sons){
      sons.push(" "+people[son].name)
    }
    printSons = "Sons:" + sons
  }
  if (person.daughters.length > 0){
    for (daughter of person.daughters){
      daughters.push(" "+people[daughter].name)
    }
    if (person.sons.length > 0){
      printDaughters = "; Daughters: " + daughters;
    } else {
      printDaughters = "Daughters: " + daughters;
    }
  }
  
  return printSons + printDaughters;
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
