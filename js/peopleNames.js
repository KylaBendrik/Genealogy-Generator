

function Cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomElement(gender,  part){
  const array = elements.filter(element => element.gender.includes(gender) && element.part.includes(part));
  return array[Math.floor(Math.random() * array.length)].name
}
function newName(person){
  var A = randomElement(person.gender, 1);
  var B = randomElement(person.gender, 2);
  //select random from elements

  //check if gender correct
  //concatnate
  //assign name and meaning
  person.name = Cap(A + B);
}

