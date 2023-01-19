import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, url, onDeletePlant }) {

  const displayPlants = plants.map(plant => (
    <PlantCard 
      key={plant.id}
      plant={plant}
      url={url}
      onDeletePlant={onDeletePlant}
    />
  ))

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
