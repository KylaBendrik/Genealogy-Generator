function nextYear(n){
  while (n>0){
    year ++;
    document.getElementById("year").innerHTML = "Year: " + year;
    
    //do things to people
    people.forEach((person,index) =>{
     if (person.alive){
        //all things come to an end
        var ifDie = Math.floor(Math.random() * 50);

        if (age(person) > 25 && ifDie < 2){
          console.log(person.name + " WILL DIE")
          die(person);
        }
        if (age(person) === 65 && ifDie < 3){
          die(person)
        }
       //make feet for baby shoes
       var ifBaby = Math.floor(Math.random() * 6);
       if (person.spouse >  -1 
           && person.gender === "female" 
           && age(person) < 50){
         if (ifBaby === 0){
           newPerson(person, year);
         }
       } //ending making babies
       //gettin hitched
       if (person.spouse === -1 && age(person) > 18 && person.gender === "male"){
        console.log(person.name + " is eligible and unmarried")
         var foundSpouse = false
         people.forEach((potential,potentialIndex) =>{
           if (ifEligible(person, potential) && foundSpouse === false){
             potential.spouse = index;
             person.spouse = potentialIndex;
             potential.tincture = person.tincture;
             if (person.rank < potential.rank){
               potential.rank = person.rank;
             }
             foundSpouse = true;
           }
         });
       }
    } // ending if person is alive
    });
    
    growEstates(estates);
    peopleTbody = document.getElementById("peopleTbody");
    printPeople(peopleTbody, people);
    estatesTbody = document.getElementById("estatesTbody");
    printEstates(estatesTbody, estates);
    n--;
  }
}


//starting folks
const numStart = 4;
const consangLimit = numStart/4;

const tinctures = ["argent", "or", "gules", "sable", "azure", "vert", "purpure", "tenne"];
if (year === 0){
  for(i = 0; i  < numStart; i++){
    var fauxYear = -18 - Math.floor(Math.random() * 10)
    var gendOverwrite = i % 2;
    newPerson(false, fauxYear, gendOverwrite);
    if (i % 2 === 1){
      people[i].spouse = i-1;
    } else{
      people[i].spouse = i+1;
    }
    if (i === 0 || i === 1){
      people[i].rank = 0;
    }
    if (i > 1){
      people[i].rank = 2;
    }
    people[i].tincture = tinctures[Math.floor(i/2)];
  }
  year ++;
  console.log("people should be set")
}

initiateEstates(numStart);
peopleTbody = document.getElementById("peopleTbody");
printPeople(peopleTbody, people);
estatesTbody = document.getElementById("estatesTbody");
printEstates(estatesTbody, estates);

document.getElementById("year").innerHTML = "Year: " + year;
