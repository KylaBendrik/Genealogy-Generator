
function coatColors(tincture){
  return { 
    "argent": "#FFFFFF",
    "or": "#FFD700",
    "gules": "#FF0000",
    "sable": "#1D1E22",
    "azure": "#0000FF",
    "vert": "#008000",
    "purpure": "#800080",
    "tenne": "#C67000",
  }[tincture];
}
function blazon(person){
  var tincture = person.tincture;
  var charges = person.charges;
  var ordinaries = person.ordinaries;
  var blazon = "";
  //if no charges or ordinaries
  if (charges.length === 0 && ordinaries.length === 0){
    blazon = tincture;
  } 
  // if label, no ordinaries
  if (charges.length === 1  && ordinaries.length === 0){
    blazon = tincture + ", in chief a " + charges[0].type + " " + charges[0].color;
  }
  // if ordinaries, no label
  if (charges.length === 0 && ordinaries.length === 1){
    blazon = tincture + ", a " + ordinaries[0].type + " " + ordinaries[0].color;
  }
  // if both label and ordinaries
  if (charges.length === 1 && ordinaries.length === 1){
    blazon = tincture + ", a " + ordinaries[0].type + " " + ordinaries[0].color + ", in chief a " + charges[0].type + " " + charges[0].color;
  }
  return blazon;
}

function calculateBlazon(child, father){
  child.tincture = father.tincture;
  child.ordinaries = [...father.ordinaries];
  console.log(child.name, " is calculating Blazon:", child.tincture, child.ordinaries);

  if (child.gender === "male"){
    //labels for first sons, labels of 5 if father has label or/gules
    if (father.sons.length === 1){
      if (child.tincture === "or"){
        var labelColor = "gules";
      } else {
        var labelColor = "or";
      }
      //does father have any charges?
      if (father.charges.length === 0){
        child.charges.push({type: "label of 3", color: labelColor})
      } else {
        if (father.charges[0].type === "label of 3"){
          child.charges.push({type: "label of 5", color: labelColor})
        }
      }
    }
    if (child.generation === 1){
      //color
      if (child.tincture === "or"){
        var ordColor = "gules";
      } else {
        var ordColor = "or";
      }
      //pale or/gules for second sons
      if (father.sons.length === 2){
        child.ordinaries.push({type: "pale", color: ordColor})
      }
    }
  }
}

