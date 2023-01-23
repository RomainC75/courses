import { useState } from "react";

const Carrousel = () => {
  const [id, setId] = useState(0);

  const handleId = (newId) => {
    setId(newId % 6);
  };

  return (
    <div>
      <img src={`https://picsum.photos/id/${id+237}/200/300`} alt="" />
      <div>
        <button onClick={() => handleId(id - 1)}>-</button>
        <button onClick={() => handleId(id + 1)}>+</button>
      </div>
      <p>{id}</p>
    </div>
  );
};

export default Carrousel;
