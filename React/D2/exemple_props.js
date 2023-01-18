const add_simple = (props)=>{
    return props.num1+props.num2+props.num3
  }

const add = ({num1,num2,num3})=>{
    return num1+num2+num3
  }
  
  const res = add({num1:2,num2:3,num3:4})

  console.log('res : ', res)