function findOddNames(list) {
    return list.filter(person=>{
      return person.firstName.split('').reduce((accu,current)=> accu+current.charCodeAt(0),0)%2 > 0 
    })
  }