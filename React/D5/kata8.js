function findSenior(list) {
    const max = list.sort((a,b)=>b.age-a.age)[0].age
    return list.filter(coder=>coder.age===max)
  }


  function findSenior(list) {
    const max = Math.max(...list.map(coder=>coder.age))
    return list.filter(coder=>coder.age===max)
  }

const arr1=[0,1]
const arr2=[2,3]
const arr3=[...arr1, ...arr2]
console.log('arr3 : ', arr3)

const arrA = [1,2,3]
const arrB = arrA
arrB[0]='a'
console.log(`arrA : ${arrA}, arrB: ${arrB}`)

const arrC = [1,2,3]
const arrD = [...arrC]
arrD[0]='a'
console.log(`arrC : ${arrC}, arrD: ${arrD}`)