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
          var firstSon = people[person.sons[0]];
          //fixing the labels

          //if son has SON, change son's label to label of 3
          if (firstSon.sons.length > 0){
            people[firstSon.sons[0]].charges[0].type = "label of 3";
          }
          //if son has label of 3, delete label
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
         
         var foundSpouse = false
         people.forEach((potential,potentialIndex) =>{
           if (ifEligible(person, potential) && foundSpouse === false){
             potential.spouse = index;
             person.spouse = potentialIndex;
             potential.tincture = person.tincture;
             foundSpouse = true;
           }
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
  for(i = 0; i  < 16; i++){
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
