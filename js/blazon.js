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
    "bleu-céleste": "#A9D5FF",
  }[tincture];
}
function treatments(length){
  return { 
    0: "",
    1: "",
    2: "lozengy",
    3: "fretty",
    4: "crusilly",
  }[length];
}
//Gen 1 - treatments & furs (lozengy, fretty, crusilly, scaly, masoned, honeycombed, anuletty, fleury, )
//Gen 1 - Ordinary shapes
//Gen 2 - Ordinary colors
//Gen 3 - Ordinary edges
//   indented, dancetty, wavy, nebuly, engrailed, invected, embattled, embattled-counter-embattled, raguly, dovetailed, 
// potenty, nowy, (fesses and pale) arched and double arched (pale has normal AND sinister), bevilled and angled, lozengy, 
//Gen 4 cotticed colors, wavy, 

//coat = {background: [array containing EITHER a single tincture (string) OR a fur (two colors) OR multiple coats (same style object)],
//ordinaries: [array containing ordinary objects -- {shape: "pale", color: "or", edge: "indented"}],
//charges: [array containing charge objects -- {shape: "label of three", color: "", position}]}

function printBlazon(person){
  var background = "";
  var ordinaries = "";
  var charges = "";

  if (person.coat.background.type === "tincture"){
    background = person.coat.background.value
  }
  if (person.coat.background.type === "treatment"){
    background = person.coat.background.style + " " + person.coat.background.colors[0] + " and " + person.coat.background.colors[1];
  }
  if (person.coat.charges.length === 1){
    if (person.coat.charges[0].shape === "label of three"){
      charges = ", in " + person.coat.charges[0].position + " a " + person.coat.charges[0].shape + " " + person.coat.charges[0].color;
    }
  }
  return background + ordinaries + charges;
}
function cellBackground(cellCoat, person){
  var mainColor = "";
  var secondColor = ""
  if (person.coat.background.type === "tincture"){
    mainColor = person.coat.background.value;
    
    cellCoat.style.backgroundColor = coatColors(mainColor);
  }
  if (person.coat.background.type === "treatment"){
    mainColor = person.coat.background.colors[0];
    secondColor = person.coat.background.colors[1];
    
    console.log("treatment " + mainColor + " and " + secondColor)
    
    if (person.coat.background.style === "lozengy"){
      cellCoat.style.backgroundColor = coatColors(secondColor);
      cellCoat.style.backgroundImage = `linear-gradient(60deg, ${coatColors(mainColor)} 25%, transparent 25%, transparent 75%, ${coatColors(mainColor)} 75%, ${coatColors(mainColor)}),
      linear-gradient(-60deg, ${coatColors(mainColor)} 25%, transparent 25%, transparent 75%, ${coatColors(mainColor)} 75%, ${coatColors(mainColor)})`;
      cellCoat.style.backgroundSize = `12px 20px`;
    } else {
       if (person.coat.background.style === "fretty"){
        cellCoat.style.backgroundColor = coatColors(mainColor);
        cellCoat.style.backgroundImage = `repeating-linear-gradient(45deg, ${coatColors(secondColor)}, ${coatColors(secondColor)} 3px, transparent 3px, transparent 15px),
        repeating-linear-gradient(315deg, ${coatColors(secondColor)}, ${coatColors(secondColor)} 3px, transparent 3px, transparent 15px)`;
        cellCoat.style.backgroundSize = `21px 21px`;
      } else {
        if (person.coat.background.style === "crusilly"){
          console.log("crusilly")
          cellCoat.style.background = `radial-gradient(circle, transparent 30%, ${coatColors(mainColor)} 30%, ${coatColors(mainColor)} 70%, transparent 70%, transparent),
          radial-gradient(circle, transparent 30%, ${coatColors(mainColor)} 30%, ${coatColors(mainColor)} 70%, transparent 70%, transparent) 15px 15px,
          linear-gradient(${coatColors(secondColor)} 4px, transparent 4px) 0 -2px,
          linear-gradient(90deg, ${coatColors(secondColor)} 4px, transparent 4px) -2px 0`;    
          cellCoat.style.backgroundColor = coatColors(mainColor);
          cellCoat.style.backgroundSize = `30px 30px, 30px 30px, 15px 15px, 15px 15px`;
          
          console.log(cellCoat.style.backgroundImage)
        } else {
          cellCoat.style.background = `repeating-linear-gradient(
            45deg,
            ${coatColors(mainColor)},
            ${coatColors(mainColor)} 17px,
            ${coatColors(secondColor)} 3px,
            ${coatColors(secondColor)} 20px
          )`;
        }
      }
    }
  }

  if (mainColor === "sable" || mainColor === "azure" || mainColor === "purpure"){
    cellCoat.style.color = "white";
  } //https://css-tricks.com/stripes-css/
}

function newShield(){
  
}
function calculateBlazon(child, father){
  console.log("calculating blazon")
  child.coat = {
    background: father.coat.background,
    ordinaries: [...father.coat.ordinaries],
    charges: [...father.coat.charges]
  }
  //first born
  if (father.sons.length === 1 && child.gender === "male"){
    child.coat.charges.push({shape: "label of three", color: "or", position: "chief"});
  }
  //Gen 1
  if (child.generation === 1 && child.gender === "male" && father.sons.length > 1){
    child.coat.background = {type: "treatment", style: treatments(father.sons.length), colors: [father.coat.background.value, "or"]}
  }

  
  console.log(child.coat);
}

