import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const url = 'http://localhost:6001/plants'

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
   fetch(url)
   .then(res=>res.json())
   .then(data=>setPlants(data))
  }, [])

  const addNewPlant = (addPlant) => {
    setPlants([...plants, addPlant])
  }

  const plantsToDisplay = plants.filter(plant => (
    plant.name.toLowerCase().includes(searchText.toLowerCase())
  ))

  const deletePlant = (plantToDelete) => {
    const updatedPlantList = plants.filter (plant => (
      plant.id !== plantToDelete.id))
        setPlants(updatedPlantList)
  }

  return (
    <main>
      <NewPlantForm
        url={url}
        onAddPlant={addNewPlant}
      />
      <Search
        searchText={searchText}
        onChangeSearch={setSearchText}
      />
      <PlantList
        plants={plantsToDisplay}
        url={url}
        onDeletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
