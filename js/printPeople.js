
function printPeople(tbody, people){
   var newTbody = document.createElement('tbody');
  
   //for each person, make a row
   people.forEach((person,index) =>{
     if (person.alive){
       console.log(person.name, ": ", person.ordinaries.length);
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
       if (person.tincture === "sable" || person.tincture === "azure" || person.tincture === "purpure"){
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