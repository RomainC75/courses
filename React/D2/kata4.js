function getFirstPython(list) {
    const foundDev = list.find(el=>el.language==='Python')
    return foundDev ? `${foundDev.firstName}, ${foundDev.country}` : 'There will be no Python developers'
}


function getFirstPython(list) {
    const foundDev = list.find(el=>el.language==='Python')
    //return foundDev ? `${foundDev.firstName}, ${foundDev.country}` : 'There will be no Python developers'
    if(foundDev){
      // return `${foundDev.firstName}, ${foundDev.country}`
      return foundDev.firstName+", "+foundDev.country
    }else{
      return 'There will be no Python developers'
    } 
  }

  
  function getFirstPython(list) {
    const foundDev = list.find(el=>el.language==='Python')
    for(let i=0 ; i<list.length ; i++){
      if(list[i].language==='Python'){
        return `${list[i].firstName}, ${list[i].country}`
      }
    }
    return 'There will be no Python developers'
  }