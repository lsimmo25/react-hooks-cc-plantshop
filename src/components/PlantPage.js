import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants, setSearch, search, handleDelete, handleOnChange }) {
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants={plants} setPlants={setPlants} handleDelete={handleDelete} handleOnChange={handleOnChange}/>
    </main>
  );
}

export default PlantPage;
