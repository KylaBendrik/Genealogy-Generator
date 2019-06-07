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

function coatColors(tincture){
  if (tincture === "argent"){return "#FFFFFF"};
  if (tincture === "or"){return "#FFD700"};
  if (tincture === "gules"){return "#FF0000"};
  if (tincture === "sable"){return "#1D1E22"};
  if (tincture === "azure"){return "#0000FF"};
  if (tincture === "vert"){return "#008000"};
  if (tincture === "purpure"){return "#800080"};
  if (tincture === "tenne"){return "#C67000"};
}
function blazon(person){
  var tincture = person.tincture;
  var charges = person.charges;
  var blazon = "";
  if (charges.length === 0){
    blazon = tincture;
  } else {
    if (charges[0].color === "or" && tincture === "or"){
      charges[0].color = "gules";
    }
    blazon = tincture + ", in chief a " + charges[0].type + " " + charges[0].color;
  }
  return blazon;
}


function printPeople(tbody, people){
   var newTbody = document.createElement('tbody');
  
   //for each person, make a row
   people.forEach((person,index) =>{
     if (person.alive){
       var row = document.createElement('tr');
       //make cells
       var cellId = document.createElement('td');
       var cellName = document.createElement('td');
       var cellAge = document.createElement('td');
       var cellFather = document.createElement('td');
       var cellMother = document.createElement('td');
       var cellSpouse = document.createElement('td');
       var cellCoat = document.createElement('td');
       var cellChildren = document.createElement('td');
       
       //fill cells
       cellId.appendChild(document.createTextNode(index));
       cellName.appendChild(document.createTextNode(person.name));
       cellAge.appendChild(document.createTextNode(age(person)));
       cellFather.appendChild(document.createTextNode(personName(person, person.father)));
       cellMother.appendChild(document.createTextNode(personName(person, person.mother)));
       cellSpouse.appendChild(document.createTextNode(personName(person, person.spouse) + " (" + person.spouse +")"));
       cellCoat.appendChild(document.createTextNode(blazon(person)));
       cellCoat.style.backgroundColor = coatColors(person.tincture);
       if (person.tincture === "sable"){
         cellCoat.style.color = "white";
       }
       
       cellChildren.appendChild(document.createTextNode(printChildren(person)));
       
       //append cells
       row.appendChild(cellId);
       row.appendChild(cellName);
       row.appendChild(cellAge);
       row.appendChild(cellFather);
       row.appendChild(cellMother);
       row.appendChild(cellSpouse);
       row.appendChild(cellCoat);
       row.appendChild(cellChildren);
       
       newTbody.appendChild(row);
     }
     
   });
   
  
  //now that we have all the people, replace tbody
  newTbody.id = "peopleTbody";
  tbody.parentNode.replaceChild(newTbody, tbody);
  return tbody;
}

function nextYear(n){
  while (n>0){
    year ++;
    document.getElementById("year").innerHTML = "Year: " + year;
    
    //do things to people
    people.forEach((person,index) =>{
     if (person.alive){
       //all things come to an end
       if (age(person) === 65){
         person.alive = false;
         if (person.spouse >  -1){
           people[person.spouse].spouse = -1;
         }
         if (person.sons.length > 0){
           people[person.sons[0]].charges.splice(0)
         }
       }
       //make feet for baby shoes
       var ifBaby = Math.floor(Math.random() * 6);
       if (person.spouse >  -1 
           && person.gender === "female" 
           && age(person) < 50){
         console.log(ifBaby);
         if (ifBaby === 0){
           newPerson(person, year);
         }
       } //ending making babies
       //gettin hitched
       if (person.spouse === -1 && age(person) > 18 && person.gender === "male"){
         console.log("someone's gettin hitched");
         
         var foundSpouse = false
         people.forEach((potential,potentialIndex) =>{
           if (ifEligible(person, potential) && foundSpouse === false){
             potential.spouse = index;
             person.spouse = potentialIndex;
             console.log("they done got hitchafied");
             potential.tincture = person.tincture;
             foundSpouse = true;
           }
           console.log("checking for ", person.name);
         });
       }
    } // ending if person is alive
    });
    tbody = document.getElementById("peopleTbody");
    printPeople(tbody, people);
    n--;
  }
}
//starting folks
const tinctures = ["argent", "or", "gules", "sable", "azure", "vert", "purpure", "tenne"];
if (year === 0){
  for(i = 0; i  < 8; i++){
    var fauxYear = -18 - Math.floor(Math.random() * 10)
    var gendOverwrite = i % 2;
    newPerson(false, fauxYear, gendOverwrite);
    if (i % 2 === 1){
      people[i].spouse = i-1;
    } else{
      people[i].spouse = i+1;
    }
    people[i].tincture = tinctures[Math.floor(i/2)];
  }
  year ++;
}
tbody = document.getElementById("peopleTbody");
printPeople(tbody, people);
document.getElementById("year").innerHTML = "Year: " + year;
