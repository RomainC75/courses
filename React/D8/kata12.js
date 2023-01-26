function countLanguages(list) {
    const obj={}
    list.forEach(coder=>obj[coder.language] ? obj[coder.language]++ : obj[coder.language]=1)
    return obj
  }