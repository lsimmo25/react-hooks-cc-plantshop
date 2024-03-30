import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(data => setPlants(data))
      .catch(error => console.log(error))
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setPlants(prevPlants => prevPlants.filter(p => p.id !== id))
      })
  }

  const handleOnChange = (updatedPlant) => {
    fetch(`http://localhost:6001/plants/${updatedPlant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price: updatedPlant.price })
    })
      .then(r => r.json())
      .then(() => {
        setPlants(prevPlants => prevPlants.map(plant => {
          if (plant.id === updatedPlant.id) {
            return { ...plant, price: updatedPlant.price }
          }
          return plant
        }))
      })
  }

  const searchedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={searchedPlants}
        setPlants={setPlants}
        search={search}
        setSearch={setSearch}
        handleDelete={handleDelete}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}

export default App;
