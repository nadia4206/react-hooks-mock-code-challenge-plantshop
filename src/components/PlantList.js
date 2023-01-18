import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const displayPlants = plants.map(plant => (
    <PlantCard 
      key={plant.id}
      plant={plant}
    />
  ))

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
