import React, { useState } from "react";

function PlantCard({ plants, url }) {

  const { image, name, price } = plants

  const [soldOut, setSoldOut] = useState(true)

  const handleClick = () => {
    setSoldOut(!soldOut)
  }

  return (
    <li className="card">
      <img 
        src={image} 
        alt={name} 
      />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      { soldOut ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
        <br />
        <button>Delete</button>
    </li>
  );
}

export default PlantCard;
