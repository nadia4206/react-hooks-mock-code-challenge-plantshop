import React, { useState } from "react";

function PlantCard({ plant, url, onDeletePlant }) {

  const { name, image, price } = plant

  const [isInStock, setIsInStock] = useState(true)

  const [plantPrice, setPlantPrice] = useState(price)

  const handleClick = () => {
    setIsInStock((isInStock) => !isInStock)
  }

  const handlePriceUpdate = (e) => {
    setPlantPrice(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${url}/${plant.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ price: e.target.price.value })
    })
    .then(res=>res.json())
    .then(setPlantPrice(plantPrice))
  }

  const handleDeleteClick = () => {
    fetch(`${url}/${plant.id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => onDeletePlant(plant))
  }


  return (
    <li className="card">
      <img 
        src={image} 
        alt={name} 
      />
      <h4>{name}</h4>
      <p>Price: ${plantPrice}</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="number"
          name="price"
          step="0.01"
          value={plantPrice}
          onChange={handlePriceUpdate}
        />
        <input type="submit"/>

      </form>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <br />
      <button onClick={handleDeleteClick}>
        Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;
