var fields = [];
var shields = [];
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
//Gen 1 - Ordinary shapes
//Gen 2 - Ordinary colors
//Gen 3 - Ordinary edges
//   indented, dancetty, wavy, nebuly, engrailed, invected, embattled, embattled-counter-embattled, raguly, dovetailed, 
// potenty, nowy, (fesses and pale) arched and double arched (pale has normal AND sinister), bevilled and angled, lozengy, 
//Gen 4 cotticed colors, wavy, 

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
function newShield(){
  var newField = {
    tincture: "",
    charges: "",
    ordinaries: "",
  }
}
function calculateBlazon(child, father){
  child.tincture = father.tincture;
  child.ordinaries = [...father.ordinaries];

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

    //generation 1
    if (child.generation === 1){
      //color
      if (child.tincture === "or"){
        var oColor = "gules";
      } else {
        var oColor = "or";
      }
      //pale or/gules for second sons
      if (father.sons.length > 1){
        var oType = {
          2: "pale",
          3: "fess",
          4: "bend",
          5: "flaunch",
          6: "square flaunch",
          7: "gore",
          8: "chevron",
          9: "pile",
        }[father.sons.length];

        

        child.ordinaries.push({type: oType, color: oColor})
      }
    }//end gen 1
    if (child.generation === 2){
      //this one changes the color of the most recent ordinary by birth order
      //argent sable azure verty purpure tenne cendree bleu-celeste
      if (father.sons.length > 1){
        var oColor = {
          2: "argent",
          3: "sable",
          4: "azure",
          5: "verty",
          6: "purpure",
          7: "tenne",
          8: "cendree",
          9: "bleu-celeste",
        }[father.sons.length];
        var recentOrd = child.ordinaries.length -1
        if (recentOrd < 0){
          oType = "chief";
          child.ordinaries.push({type: oType, color: oColor})
        } else {
          child.ordinaries[recentOrd].color = oColor;
        }
      }

    }
  }
}

