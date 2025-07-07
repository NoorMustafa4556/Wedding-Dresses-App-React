import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowAll = () => {
  const [dresses, setDresses] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // Fetch data from the server
  useEffect(() => {
    axios
      .get('http://localhost:8080/')
      .then((res) => {
        setDresses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch dresses. Please try again.");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deletedress/${id}`);
      setDresses(dresses.filter(dress => dress.DressID !== id)); // Update the state without the deleted dress
    } catch (error) {
      console.log("Error deleting dress:", error);
      alert("Error deleting the dress!");
    }
  };

  if (loading) {
    return <div>Loading dresses...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-70 rounded'>
        {/* Row for the button and table */}
        <div className="d-flex justify-content-between mb-4">
          <Link to="/adddress" className='btn btn-success'>Add A Dress +</Link>
        </div>

        <table className='table mt-4'>
          <thead>
            <tr>
              <th>DressID</th>
              <th>DressName</th>
              <th>Gender</th>
              <th>Dress Color</th>
              <th>Fabric</th>
              <th>Size</th> 
              <th>Price</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dresses.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center">No dresses available</td>
              </tr>
            ) : (
              dresses.map((data, i) => (
                <tr key={i}>
                  <td>{data.DressID}</td>
                  <td>{data.DressName}</td>
                  <td>{data.Gender}</td>
                  <td>{data.DressColor}</td>
                  <td>{data.Fabric}</td>
                  <td>{data.Size}</td> 
                  <td>{data.Price}</td>
                  <td>{data.Description}</td>
                  <td>
                    {/* Update Button */}
                    <Link to={`/updatedress/${data.DressID}`} className='btn btn-warning'>
                      Update
                    </Link>
                  </td>
                  <td>
                    {/* Delete Button */}
                    <button onClick={() => handleDelete(data.DressID)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAll;
