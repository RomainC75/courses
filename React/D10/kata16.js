function findOddNames(list) {
  return list.filter((person) => {
    let sum = 0;
    for (let i = 0; i < person.firstName.length; i++) {
      sum += person.firstName[i].charCodeAt(0);
    }
    //
    return sum % 2 > 0;
  });
}

function findOddNames(list) {
  return list.filter((person) => {
    let sum = 0;
    for (let i = 0; i < person.firstName.length; i++) {
      sum += person.firstName[i].charCodeAt(0);
    }
    // 1 => truthy
    return sum % 2;
  });
}

function findOddNames(list) {
  return list.filter((person) => {
    //reduce
    const sum = Array.from(person.firstName).reduce((accu, current) => {
      return accu + current.charCodeAt(0);
    }, 0);
    console.log(sum);
    return sum % 2;
  });
}

function findOddNames(list) {
  return list.filter((person) => {
    return (
      Array.from(person.firstName).reduce((accu, current) => {
        return accu + current.charCodeAt(0);
      }, 0) % 2
    );
  });
}

function findOddNames(list) {
  return list.filter((person) => {
    //reduce without the 'return' keyword
    return (
      person.firstName
        .split("")
        .reduce((accu, current) => accu + current.charCodeAt(0), 0) %
        2 >
      0
    );
  });
}
