import React, { useState } from 'react';
import axios from 'axios';

const UpdateRental = () => {
  const [rentalId, setRentalId] = useState('');
  const [newDetails, setNewDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/rentals/${rentalId}`, { details: newDetails });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Update failed');
    }
  };

  return (
    <div>
      <h1>Update Rental</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rental ID"
          value={rentalId}
          onChange={(e) => setRentalId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="New Details"
          value={newDetails}
          onChange={(e) => setNewDetails(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateRental;