function getAverageAge(list) {
    return Math.round(list.reduce( (accu, current) =>{
        return accu+current.age;
    },0)/list.length);
  }