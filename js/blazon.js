
function coatColors(tincture){
  if (tincture === "argent"){return "#FFFFFF"};
  if (tincture === "or"){return "#FFD700"};
  if (tincture === "gules"){return "#FF0000"};
  if (tincture === "sable"){return "#1D1E22"};
  if (tincture === "azure"){return "#0000FF"};
  if (tincture === "vert"){return "#008000"};
  if (tincture === "purpure"){return "#800080"};
  if (tincture === "tenne"){return "#C67000"};
}
function blazon(person){
  var tincture = person.tincture;
  var charges = person.charges;
  var blazon = "";
  if (charges.length === 0){
    blazon = tincture;
  } else {
    if (charges[0].color === "or" && tincture === "or"){
      charges[0].color = "gules";
    }
    blazon = tincture + ", in chief a " + charges[0].type + " " + charges[0].color;
  }
  return blazon;
}

