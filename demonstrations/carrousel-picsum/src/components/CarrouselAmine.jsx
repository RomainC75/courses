import { useState } from "react";

const CarrouselAmine = () => {
  const [id, setId] = useState(0);

  const handleId = (newId) => {
    setId(newId % 6);
  };

  return (
    <div>
      <h2>Carrousel Circulaire (237-242)</h2>
      <img src={`https://picsum.photos/id/${id+237}/200/300`} alt="" />
      <div>
        <button onClick={() => handleId(id - 1)}>-</button>
        <button onClick={() => handleId(id + 1)}>+</button>
      </div>
      <p>{id}</p>
    </div>
  );
};

export default CarrouselAmine;
