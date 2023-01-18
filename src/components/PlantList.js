import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, url }) {

  const displayPlants = plants.map((plant, key) => (
    <PlantCard 
      key={plant.id}
      plants={plant}
      url={url}
    />
  ))

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
