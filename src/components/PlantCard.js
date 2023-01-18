import React, { useState } from "react";

function PlantCard({ plant }) {

  const { name, price, image } = plant

  const [isStocked, setIsStocked] = useState(true)

  const handleClick = () => {
    setIsStocked((isStocked) => !isStocked)
  }

  return (
    <li className="card">
      <img 
        src={image} 
        alt={name} 
      />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <form>
        <input
          type="text"
          name="price"
          step="0.01"
          value={price}
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
    </li>
  );
}

export default PlantCard;
