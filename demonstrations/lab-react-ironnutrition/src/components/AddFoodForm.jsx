// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({ newFood, setNewFood, handleSubmit }) {
    const handleNewFood = (e) => {
      console.log(e.target.value, e.target.value.match(/[^0-9]+/))
    if (
      (e.target.name === 'calories' || e.target.name === 'servings') &&
      (e.target.value < 0 )
    ) {
      return;
    }

    setNewFood({
      ...newFood,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={newFood.name}
        type="text"
        name="name"
        onChange={handleNewFood}
      />

      <label>Image</label>
      <Input
        value={newFood.image}
        type="text"
        name="image"
        onChange={handleNewFood}
      />

      <label>Calories</label>
      <Input
        value={newFood.calories}
        type="number"
        name="calories"
        onChange={handleNewFood}
      />

      <label>Servings</label>
      <Input
        value={newFood.servings}
        type="number"
        name="servings"
        onChange={handleNewFood}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
