function isRubyComing(list) {
    for(let i=0 ; i<list.length ; i++){
      if(list[i].language==='Ruby'){
        return true
      }
    }
    return false
  }


  function isRubyComing(list) {
    return list.find(el=>el.language==='Ruby') ? true : false
  }

  function isRubyComing(list) {
    return list.filter(el=>el.language==='Ruby').length>0 ? true : false
  }

  function isRubyComing(list) {
    return list.some(el=>el.language==='Ruby')
  }
  