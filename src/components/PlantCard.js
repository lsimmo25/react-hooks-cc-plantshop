import React, { useState } from "react";

function PlantCard({ plant, setPlants, handleDelete, handleOnChange }) {

  const { id, name, image, price } = plant
  const [inStock, setInstock] = useState(true)
  const [newPrice, setNewPrice] = useState("")

  const handleDeleteClick = () => {
    handleDelete(id)
  }

  const handleChange = (e) => {
    setNewPrice(e.target.value)
  }

  const handleEditClick = () => {
    const updatedPlant = {
      id,
      name,
      image,
      price: newPrice
    }
    handleOnChange(updatedPlant)
    setNewPrice("")
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInstock(!inStock)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button type="button" onClick={handleDeleteClick}>Delete</button>
      <input 
        value={newPrice}
        style={{width: "calc(100% - 100px)", borderBottom: "none"}} 
        placeholder="Edit Price"
        onChange={handleChange}
      >
      </input>
      <button type="button" onClick={handleEditClick}>Edit</button>
    </li>
  );
}

export default PlantCard;
