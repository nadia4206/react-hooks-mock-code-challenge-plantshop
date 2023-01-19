import React, { useState } from "react";

function PlantCard({ plant, url, onPlantDelete }) {

  const { name, price, image } = plant

  const [stocked, setStocked] = useState(true)

  const handleStockedClick = () => {
    setStocked((stocked) => !stocked)
  }

  const handleDeleteClick = () => {
    fetch(`${url}/${plant.id}`, {
      method: 'DELETE',
    })
    .then(res=>res.json())
    .then(onPlantDelete(plant))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {stocked ? (
        <button onClick={handleStockedClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockedClick}>Out of Stock</button>
      )}
      <br />
      <button onClick={handleDeleteClick}>
        Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;
