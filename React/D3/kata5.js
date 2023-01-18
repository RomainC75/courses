function isSameLanguage(list) {
    for(let i=1;i<list.length;i++){
      if(list[0].language!==list[i].language){
        return false
      }
    }
    return true
  }

  function isSameLanguage(list) {
    return list.every((coder)=>coder.language===list[0].language)
  }
  

function isSameLanguage(list) {
    return new Set(list.map(person=>person.language)).size === 1 ? true : false
  }


