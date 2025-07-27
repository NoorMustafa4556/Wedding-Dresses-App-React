import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDress = () => {
  const [dressName, setDressName] = useState("");
  const [gender, setGender] = useState("");
  const [dressColor, setDressColor] = useState("");
  const [fabric, setFabric] = useState("");
  const [size, setSize] = useState("");  // Add a state for Size
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDress = {
      DressName: dressName,
      Gender: gender,
      DressColor: dressColor,
      Fabric: fabric,
      Size: size,  // Include size in the request body
      Description: description,
      Price: price,
    };

    axios
      .post('http://localhost:8080/add', newDress)
      .then((res) => {
        console.log(res);
        
        navigate("/");  // Redirect after successful submission
      })
      .catch((error) => {
        console.error(error);
        alert("Error adding dress!");
      });
  };

  return (
    <div>
      <h2 className="bg-success text-white text-center p-3">Add A New Dress Here</h2>

      <div>
        <h2 className="text-center mb-4 text-white">Add a New Dress</h2>
        <form onSubmit={handleSubmit}>
          {/* Dress Name */}
          <div className="mb-3">
            <label className="form-label text-white">Dress Name</label>
            <input
              type="text"
              className="form-control"
              value={dressName}
              onChange={(e) => setDressName(e.target.value)}
              placeholder="Enter Dress Name"
              style={{ backgroundColor: "#fff8e1", border: "1px solid #f7b42c" }}
              required
            />
          </div>

         {/* Gender */}
<div className="mb-3">
  <label className="form-label text-white">Gender</label>
  <select
    className="form-select"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    style={{ backgroundColor: "#fff8e1", border: "1px solid #f7b42c" }}
    required
  >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    
  </select>
</div>

{/* Size */}
<div className="mb-3">
  <label className="form-label text-white">Size</label>
  <select
    className="form-select"
    value={size}
    onChange={(e) => setSize(e.target.value)}
    style={{ backgroundColor: "#fff8e1", border: "1px solid #f7b42c" }}
    required
  >
    <option value="">Select Size</option>
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
    <option value="XL">XL</option>
  
  </select>
</div>



          {/* Dress Color */}
          <div className="mb-3">
            <label className="form-label text-white">Dress Color</label>
            <input
              type="text"
              className="form-control"
              value={dressColor}
              onChange={(e) => setDressColor(e.target.value)}
              placeholder="Enter Dress Color"
              style={{ backgroundColor: "#fff8e1", border: "1px solid #f7b42c" }}
              required
            />
          </div>

          {/* Fabric */}
          <div className="mb-3">
            <label className="form-label text-white">Fabric</label>
            <input
              type="text"
              className="form-control"
              value={fabric}
              onChange={(e) => setFabric(e.target.value)}
              placeholder="Enter Fabric Type"
              style={{ backgroundColor: "#fff8e1", border: "1px solid #f7b42c" }}
              required
            />
          </div>

          

          {/* Description */}
          <div className="mb-3">
            <label className="form-label text-white">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              style={{ backgroundColor: "#fff8e1", border: "1px solid #f7b42c" }}
              required
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label text-white">Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
              style={{ backgroundColor: "#fff8e1", border: "1px solid #f7b42c" }}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-success text-white p-3"
            >
              Add Dress
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddDress;
