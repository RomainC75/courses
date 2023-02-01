import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Appartment from "./Appartment";

const apiUrl = "https://ironbnb-m3.herokuapp.com/apartments";

const Appartments = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setHomes(response.data);
      })
      .catch((err) => {
        console.log("err :", err);
      });
  }, []);

  return (
    <div>
      {homes.map((home, i) => (
        <Appartment key={`${i}${home.title}`} home={home}/>
      ))}
    </div>
  );
};

export default Appartments;
