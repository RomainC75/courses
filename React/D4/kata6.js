

function findAdmin(list, lang) {
    return list.filter(person=>person.language==lang && person.githubAdmin==='yes')
  }