function coatColors(background){
  return { 
    "argent": "#FFFFFF",
    "or": "#FFD700",
    "gules": "#FF0000",
    "sable": "#1D1E22",
    "azure": "#0000FF",
    "vert": "#008000",
    "purpure": "#800080",
    "tenne": "#C67000",
  }[background[0]];
}
//Gen 1 - Ordinary shapes
//Gen 2 - Ordinary colors
//Gen 3 - Ordinary edges
//   indented, dancetty, wavy, nebuly, engrailed, invected, embattled, embattled-counter-embattled, raguly, dovetailed, 
// potenty, nowy, (fesses and pale) arched and double arched (pale has normal AND sinister), bevilled and angled, lozengy, 
//Gen 4 cotticed colors, wavy, 

//coat = {background: [array containing EITHER a single tincture (string) OR a fur (two colors) OR multiple coats (same style object)],
//ordinaries: [array containing ordinary objects -- {shape: "pale", color: "or", edge: "indented"}],
//charges: [array containing charge objects -- {shape: "label of three", color: ""}]}

function printBlazon(person){
  return person.coat.background[0];
}
function newShield(){
  
}
function calculateBlazon(child, father){
  
}

