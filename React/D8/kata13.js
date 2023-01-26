function allContinents(list) {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const repCont = list.map((coder) => coder.continent);
  console.log(repCont);
  for (let i = 0; i < continents.length; i++) {
    //if(!repCont.includes(continents[i])){
    if (!repCont.some((el) => el === continents[i])) {
      return false;
    }
  }
  return true;
}


function allContinents(list) {
  return new Set(list.map((coder) => coder.continent)).size === 5
    ? true
    : false;
}


function allContinents(list) {
  const continents = [];
  list.forEach((coder) => {
    if (!continents.includes(coder.continent)) {
      continents.push(coder.continent);
    }
  });
  return continents.length === 5 ? true : false;
}


function allContinents(list) {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  list.forEach((coder) => {
    const foundIndex = continents.findIndex(
      (continent) => continent === coder.continent
    );
    if (foundIndex >= 0) {
      continents.splice(foundIndex, 1);
    }
  });
  return continents.length === 0 ? true : false;
}
