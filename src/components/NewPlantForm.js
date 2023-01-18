import React, { useState } from "react";

function NewPlantForm({ url, onAddPlant }) {

  const initialState=({
    name: "",
    image:"",
    price: 0
  })

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPlant=({
      name: formData.name,
      image: formData.image,
      price: formData.price
    })

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(onAddPlant)
    setFormData(initialState)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
