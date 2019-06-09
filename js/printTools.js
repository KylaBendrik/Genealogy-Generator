function printPeople(tbody, people){
   var newTbody = document.createElement('tbody');
  
   //for each person, make a row
   people.forEach((person,index) =>{
     if (person.alive){
      var row = document.createElement('tr');

      //make cells
      var cellGen = document.createElement('td');
      var cellId = document.createElement('td');
      var cellTitle = document.createElement('td');
      var cellName = document.createElement('td');
      var cellAge = document.createElement('td');
      var cellFather = document.createElement('td');
      var cellMother = document.createElement('td');
      var cellSpouse = document.createElement('td');
      var cellEstate = document.createElement('td');
      var cellCoat = document.createElement('td');
      var cellChildren = document.createElement('td');
      
      //fill cells
      cellGen.appendChild(document.createTextNode(person.generation));
      cellId.appendChild(document.createTextNode(index));
      cellTitle.appendChild(document.createTextNode(title(person)));
      cellName.appendChild(document.createTextNode(person.name));
      cellAge.appendChild(document.createTextNode(age(person)));
      cellFather.appendChild(document.createTextNode(title(people[person.father]) + " " + personName(person, person.father)));
      cellMother.appendChild(document.createTextNode(personName(person, person.mother)));
      cellSpouse.appendChild(document.createTextNode(personName(person, person.spouse) + " (" + person.spouse +")"));
      cellEstate.appendChild(document.createTextNode(printEstate(person)));
      cellCoat.appendChild(document.createTextNode(blazon(person)));
      cellCoat.style.backgroundColor = coatColors(person.tincture);
      if (person.tincture === "sable" || person.tincture === "azure" || person.tincture === "purpure"){
        cellCoat.style.color = "white";
      }
      
      cellChildren.appendChild(document.createTextNode(printChildren(person)));
      
      //append cells
      row.appendChild(cellGen);
      row.appendChild(cellId);
      row.appendChild(cellTitle);
      row.appendChild(cellName);
      row.appendChild(cellAge);
      row.appendChild(cellFather);
      row.appendChild(cellMother);
      row.appendChild(cellSpouse);
      row.appendChild(cellEstate);
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

function printEstates(tbody, estates){
var newTbody = document.createElement('tbody');

//for each person, make a row
estates.forEach((estate) =>{
    var row = document.createElement('tr');

    //make cells
    var cellEstate = document.createElement('td');
    var cellLord = document.createElement('td');
    var cellHeir = document.createElement('td');
    var cellAcreage = document.createElement('td');
    
    //fill cells
    cellEstate.appendChild(document.createTextNode(estate.name));
    cellLord.appendChild(document.createTextNode(title(people[estate.lord]) + " " + people[estate.lord].name));
    cellHeir.appendChild(document.createTextNode(estate.heir));
    cellAcreage.appendChild(document.createTextNode(estate.acreage));
    
    //append cells
    row.appendChild(cellEstate);
    row.appendChild(cellLord);
    row.appendChild(cellHeir);
    row.appendChild(cellAcreage);
    
    newTbody.appendChild(row);
    
  });
  
 
 //now that we have all the people, replace tbody
 newTbody.id = "estatesTbody";
 tbody.parentNode.replaceChild(newTbody, tbody);
 return tbody;
}