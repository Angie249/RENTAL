import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await axios.get('/api/properties');
      setProperties(response.data);
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.title} - ${property.price}</li>
        ))}
      </ul>
    </div>
  );
};
import react ,{useEffects}