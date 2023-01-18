import React, { useState } from "react";

function PlantCard({ plant, url, onDeletePlant }) {

  const { name, image, price } = plant

  const [isInStock, setIsInStock] = useState(true)

  const [plantPrice, setPlantPrice] = useState(price)

  const handleClick = () => {
    setIsInStock((isInStock) => !isInStock)
  }

  const handlePriceChange = (e) => {
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
     .then(res => res.json())
     .then(setPlantPrice(plantPrice))
  }

  const handleDelete = () => {
    fetch(`${url}/${plant.id}`, {
      method: 'DELETE',
    })
     .then(res=>res.json())
     .then(onDeletePlant(plant))
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
          name="price"
          type="number"
          step="0.01"
          value={plantPrice}
          onChange={handlePriceChange}
        />
        <input type="submit" />
      </form>
      {isInStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      < br />
      <button
        onClick={handleDelete}
        >Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;
