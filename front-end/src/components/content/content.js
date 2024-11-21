import React, { useEffect, useState } from 'react';
import Notification from './notification/notification';

const Content = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API call function
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/players'); // API URL
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json(); // Parse JSON response
        setPlayers(data.players); // Assume the API returns an object with a `players` array
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlayers(); // Call the function
  }, []); // Run on component mount

  return (
    <div>
      <Notification></Notification>
    </div>
  );
};

export default Content;
