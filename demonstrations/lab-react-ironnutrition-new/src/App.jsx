import './App.css';
import foods_data from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foods_data);
  console.log('foods_data : ', foods_data);
  const [search, setSearch] = useState('');

  const handleDelete = (index) => {
    const temp = [...foods];
    temp.splice(index, 1);
    setFoods(temp);
    // setFoods((foods) => {
    //   const temp = [...foods];
    //   temp.splice(index, 1);
    //   return temp;
    // });
  };

  return (
    <div className="App">
      <AddFoodForm setFoods={setFoods} />
      <Search setSearch={setSearch} search={search} />
      <div className="containerFood">
        {foods
          .map((food, index) => {
            return { ...food, index: index };
          })
          .filter((food) => {
            const rgx = new RegExp(search, 'ig');
            return food.name.match(rgx);
            // remove spaces from the search bar and food.name
            // const rgx = new RegExp(search.replaceAll(' ',''),'ig')
            // return food.name.replace(' ','').match(rgx)
          })
          .map((food, i) => (
            <FoodBox
              key={i + food.name}
              food={food}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
