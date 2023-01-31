const arr = ['banane', 'carotte', 'choux']

const deleteElements = arr.splice(1,1,'poire')

console.log('arr : ', arr)
console.log('deletedElements : ', deleteElements)

// can be used with 0 as a second argument to add elements in the middle of the array !

const arr2 = ['banane', 'carotte', 'choux']
console.log("arr2 : ", arr2)
arr2.splice(arr.length,0,'new carotte')
console.log("arr2 modified : ", arr2)
