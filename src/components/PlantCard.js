import React, { useState } from "react";

function PlantCard({ plants, onDeletePlant }) {

  const { image, name, price } = plants

  const [soldOut, setSoldOut] = useState(true)
  const [plantPrice, setPlantPrice] = useState(price)

  const handleClick = () => {
    setSoldOut((soldOut) => !soldOut)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${plants.id}`, {
      method: 'DELETE',
    })
     .then(res => res.json())
     .then(() => onDeletePlant(plants))
  }

  const handleChange = (e) => {
    setPlantPrice(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plants.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({price: e.target.price.value})
    })
    .then(res=>res.json())
    .then(setPlantPrice(plantPrice))
  }

  return (
    <li className="card">
      <img 
        src={image} 
        alt={name} 
      />
      <h4>{name}</h4>
      <p>Price: {plantPrice}</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          step="0.01" 
          value={plantPrice} 
          name="price" 
          onChange={handleChange} 
        />
        <input type="Submit" />
      </form>
      { soldOut ? (
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
          onClick={handleDeleteClick}
          >Delete
        </button>
    </li>
  );
}

export default PlantCard;
