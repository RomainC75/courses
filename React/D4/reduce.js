const arr = [2,3,5,3]

const sum = arr.reduce((accu, current, i)=>{
    console.log(i,'  : accu', accu, 'current', current)
    return accu+current
},15)

console.log('sum', sum)