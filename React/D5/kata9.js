function isAgeDiverse(list) {
    const generation = new Array(11).fill(0)
    list.forEach(coder=> {
      const gen = Math.floor(coder.age/10)
      const gIndex = gen>=10 ? 10 : gen
      generation[gIndex]++
    } )
     generation.shift()
     return !generation.includes(0)
   }