import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, handleDelete, handleOnChange }) {
  return (
    <ul className="cards">{plants.map(plant => (
      <PlantCard key={plant.id} plant={plant} setPlants={setPlants} handleDelete={handleDelete} handleOnChange={handleOnChange}/>
    ))}</ul>
  );
}

export default PlantList;
