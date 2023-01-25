function addUsername(list) {
    console.log(list);
    list.forEach(x=>{
        x.username=x.firstName.replace(/\w/g,x=>x.toLowerCase())+x.lastName[0].toLowerCase()+(2020-x.age).toString();
    });
    return list;
  }


  function addUsername(list) {
    return list.map(coder=>{
      return {
        ...coder,
        username: `${coder.firstName.toLowerCase()}${coder.lastName.charAt(0).toLowerCase()}${2020-coder.age.toString()}`
      }
    })
  }