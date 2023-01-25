function isLanguageDiverse(list) {
  const obj = {};
  list.forEach((coder) => {
    if (obj[coder.language]) {
      obj[coder.language] += 1;
    } else {
      obj[coder.language] = 1;
    }
  });
  const values = Object.values(obj).sort((a, b) => a - b);
  return values[values.length - 1] / values[0] <= 2 ? true : false;
}

function isLanguageDiverse(list) {
  const dico = {};
  list.forEach((coder) => {
    if (!dico[coder.language]) {
      dico[coder.language] = 1;
    } else {
      dico[coder.language]++;
    }
  });
  const values = Object.values(dico);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return max / min <= 2 ? true : false;
}
