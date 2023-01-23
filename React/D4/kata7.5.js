function search(budget, prices) {
    return prices.filter(price=>price<=budget).sort((a,b)=>a-b).join(',')
  
  }

  function search(budget, prices) {
    console.log(budget, prices)
    const arr = []
    for(let i=0; i<prices.length;i++){
      if(prices[i]<=budget){
        arr.push(prices[i])
      }
    }
    console.log(arr)
    return arr.sort((a,b)=>a-b).join(',')
  }