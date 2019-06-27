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
    return person.spouse
  }
}


function inherit(person){
  var heir = people[findHeir(person)];
  var estate = estates[person.estate];
  if (heir === undefined){
    //find estate with highest ranking lord (should be king or queen)
    var kingsEstate = findKingsEstate()
    //if kingsEstate IS the estate being messed up, assign to highest ranking lord
    if (kingsEstate.id === estate.id){
      kingsEstate = findEstateByRank(2);
      raiseRank(people[kingsEstate.lord]);
      raiseRank(people[kingsEstate.lord]);
    }
    //assign acreage tp king's estate
    kingsEstate.acreage += estate.acreage
    //assign estate's active status to false
    estate.active = false
  } else {
    if (person.estate !== -1){
      //If labels, then fix:
      if (person.sons.length > 0){
        //if son has SON, change son's label to label of 3
        if (heir.sons.length > 0){
          people[heir.sons[0]].charges[0].type = "label of 3";
        }
        //if son has label of 3, delete label
        heir.charges.splice(0)
      }
      if (heir.spouse === person.id){
      }else{
        //raise rank
        raiseRank(heir)
      }
      //estates - if there's only one son, or some other heir, then just assign. Otherwise, split estate
      if (person.sons.length < 2){
        heir.estate = person.estate;
        estate.lord = heir.id;
      } else {
        splitEstate(estate)
      }
    }
  }
  
  
}
