// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';



// Iteration 4
function AddFoodForm({setFoods}) {
    
    const [newFood, setNewFood]  = useState({
        name:'',
        calories:0,
        image:'',
        servings:0
    })

    const handleChange = (e) =>{
        setNewFood({
            ...newFood,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFoods(foods=>[newFood,...foods])
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newFood.name} type="text" onChange={handleChange} name="name"/>

      <label>Image</label>
      <Input value={newFood.image} type="text" onChange={handleChange} name="image" />

      <label>Calories</label>
      <Input value={newFood.calories} type="number" onChange={handleChange} name="calories"/>

      <label>Servings</label>
      <Input value={newFood.servings} type="number" onChange={handleChange} name="servings"/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
// https://static.750g.com/images/100-75/d3b67aac8673b4e78c8b2b6fcf00fb35/sandwich-grec-ou-gyro.jpg