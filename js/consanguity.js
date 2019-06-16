function consanguity(person, potential){
  //same person
  if (person.id === potential.id){
    console.log (person.id + ", " + potential.id + ": " + 0)
    return 0;
  }
  //parent/child
  if (
    potential.id === person.father ||
    potential.id === person.mother ||
    potential.father === person.id ||
    potential.mother === person.id){
      
    console.log (person.id + ", " + potential.id + ": " + 1)
    return 1;
  }
  console.log (person.id + ", " + potential.id + ": " + 12)
  return 12;
}