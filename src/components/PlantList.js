import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, url, onPlantDelete }) {

  const displayPlants = plants.map(plant => (
    <PlantCard 
      key={plant.id}
      plant={plant}
      url={url}
      onPlantDelete={onPlantDelete}
    />
  ))

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
