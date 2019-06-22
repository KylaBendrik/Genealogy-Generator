const eyeColors = ["r", "l", "g", "v"]
const hairColors = ["l", "w", "r", "b", "a"]

function oc(a){
  var o = {};
  for(var i = 0; i<a.length;i++){
    o[a[i]]='';
  }
  return 0;
}

function printEyes(person){
  console.log (person.genes.eyeColor)
  //bRown > Green > bLue > Violet
  if (person.genes.eyeColor.includes("r")){
    return "Brown Eyes";
  } else {
    if (person.genes.eyeColor.includes("g")){
      return "Green Eyes";
    } else {
      if (person.genes.eyeColor.includes("l")){
        return "Blue Eyes";
      } else {
        return "Violet Eyes";
      }
    }
  }
}

function printHair(person){
  //bLack > broWn > Red > Blonde >Albino
  if (person.genes.hairColor.includes("l")){
    return "Black Hair"
  } else {
    if (person.genes.hairColor.includes("w")){
      return "Brown Hair"
    } else {
      if (person.genes.hairColor.includes("r")){
        return "Red Hair"
      } else {
        if (person.genes.hairColor.includes("b")){
          return "Blonde Hair"
        } else {
          return "White Hair"
        }
      }
    }
  }
}

function mendel(person){
  //mendel squares
  //   1|2
  //   3|4
  //first, if father and mother are -1, then randomly assign
  if (person.father === -1 || person.mother === -1){
    //for each gene, repeat:
    var eyesLength = eyeColors.length
   for( n = 0; n < 2; n++){
      var rand = Math.floor(Math.random() * eyesLength)
      person.genes.eyeColor.push(eyeColors[rand])
      console.log(eyeColors[rand])
    }
    var hairLength = hairColors.length
    for( n = 0; n < 2; n++){
       var rand = Math.floor(Math.random() * hairLength)
       person.genes.hairColor.push(hairColors[rand])
       console.log(hairColors[rand])
     }
  } else {
    //calculate
    
    var fatherG = people[person.father].genes
    var motherG = people[person.mother].genes

    person.genes.eyeColor = [fatherG.eyeColor[Math.floor(Math.random()*2)], motherG.eyeColor[Math.floor(Math.random()*2)]];
    person.genes.hairColor = [fatherG.hairColor[Math.floor(Math.random()*2)], motherG.hairColor[Math.floor(Math.random()*2)]];
  }
}