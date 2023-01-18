import React, { useState } from "react";

function PlantCard({ plant, url, onPlantDelete }) {

  const { name, price, image } = plant

  const [isStocked, setIsStocked] = useState(true)

  const [plantPrice, setPlantPrice] = useState(price)

  const handleClick = () => {
    setIsStocked((isStocked) => !isStocked)
  }

  const handleChange = (e) => {
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

  const handleDelete = () => {
    fetch(`${url}/${plant.id}`, {
      method: 'DELETE',
    })
    .then(res=>res.json())
    .then(() => onPlantDelete(plant))
  }

  return (
    <li className="card">
      <img 
        src={image} 
        alt={name} 
      />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="price"
          step="0.01"
          value={plantPrice}
          onChange={handleChange}
        />
        <input 
          type="submit"
        />
      </form>
      {isStocked ? (
        <button
          onClick={handleClick}
          className="primary"
          >In Stock
        </button>
      ) : (
        <button
          onClick={handleClick}
          >Out of Stock
        </button>
      )}
        <br />
        <button
          onClick={handleDelete}
          >Delete Plant
        </button>
    </li>
  );
}

export default PlantCard;
