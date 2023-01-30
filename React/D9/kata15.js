var uniqueInOrder=function(iterable){
    return Array.from(iterable).filter((el,i,arr)=>i===0 || el!=arr[i-1])
    //let buff = undefined
    //if(typeof iterable === 'string'){
      //buff=  iterable.split('')
    //}else{
      //buff = [...iterable]
    //}
    //return buff.filter((el,i,arr)=>i===0 || el!=arr[i-1])
  
  }