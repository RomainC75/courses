// src/App.js
import './App.css';
import Example from './components/Exemple';
import foods_data from './foods.json';
import { Card, Row, Col, Divider, Input, Button, Space } from 'antd';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useEffect } from 'react';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foods_data);
  const [search , setSearch ] = useState('') 
  const [isFormDisplayer, setIsFormDisplayer] = useState(false)
  const [newFood, setNewFood] = useState({
    name: '',
    calories: 0,
    image: '',
    servings: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    // const buff = [...foods]
    // buff.unshift(newFood)
    setFoods([newFood,...foods])
  };

  const handleDelete=(i)=>{
    const buff = [...foods]
    buff.splice(i,1)
    setFoods(buff)
  }

  useEffect(()=>{
    console.log('=>',foods)
  },[foods])

  return (
    <div className="App">
      {isFormDisplayer && <AddFoodForm
        newFood={newFood}
        setNewFood={setNewFood}
        handleSubmit={handleSubmit}
      />}
      {isFormDisplayer && <Search search={search} setSearch={setSearch}/>}
      <Button danger={isFormDisplayer} onClick={()=>setIsFormDisplayer(!isFormDisplayer)}>{isFormDisplayer ? 'Hide' : 'Display'}</Button>
      <Divider>Food List</Divider>
      <div className="foodContainer">
        {foods.map((food,index)=>({...food,index})).filter(food=>{
          const rgx = new RegExp(search,'i')
          console.log('rgx : ', food.name.match(rgx))
          return food.name.match(rgx)||food.name.replace(' ', '').match(rgx)
        }).map((food,i) => (
          <FoodBox food={food} key={`${i}${food.name}`} handleDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}
export default App;
