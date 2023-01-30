// src/components/IronbnbList.js

import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function IronbnbList() {
  const [fetching, setFetching] = useState(true);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setApartments(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>
      {fetching && <p>Loading ...</p>}

      {apartments.map((apt) => {
        return (
          <div key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Price: {apt.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  );
}

export default IronbnbList;
