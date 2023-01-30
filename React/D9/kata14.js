function orderFood(list) {
  const obj = {};
  list.forEach((person) => {
    console.log(obj);
    if (person.meal in obj) {
      obj[person.meal] = obj[person.meal] + 1;
    } else {
      obj.vegetarian = 1;
    }
  });
  return obj;
}

function orderFood(list) {
  return list.reduce((accu, current) => {
    if (current.meal in accu) {
      accu[current.meal]++;
    } else {
      accu[current.meal] = 1;
    }
    return accu;
  }, {});
}

function orderFood(list) {
    return list.reduce((accu, current) => {
      console.log(accu)
      return {
        ...accu,
        [current.meal]: current.meal in accu ? accu[current.meal]+1 : 1
      };
    }, {});
  }

