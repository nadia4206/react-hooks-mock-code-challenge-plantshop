import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const url = 'http://localhost:6001/plants'

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res=>res.json())
    .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm
        url={url}
      />
      <Search />
      <PlantList
        plants={plants}
      />
    </main>
  );
}

export default PlantPage;
