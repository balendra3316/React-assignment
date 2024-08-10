
import React, { useEffect, useState } from 'react';
import './CustomerDetails.css';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Generate a random seed to ensure different images
        const seed = Math.random().toString(36).substring(2, 15); // Random string for seed
        const imageUrls = Array.from({ length: 9 }, (_, i) => 
          `https://picsum.photos/seed/${seed}-${i}/400/300`
        );

        // Set photos directly from generated URLs
        setPhotos(imageUrls);
        setError(false); // No error, so set error state to false
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError(true); // Set error state to true if there is an error
      }
    };

    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000); // Fetch new photos every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  if (!customer) {
    return <div className="customer-details">Select a customer to view details.</div>;
  }

  return (
    <div className="customer-details">
      <h2>{customer.name} details here</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {photos.length === 0 && error ? (
          <div className="photo-block">Rate Limit Exceeded</div>
        ) : (
          photos.map((photoUrl, index) => (
            <img key={index} src={photoUrl} alt={`Random Lorem Picsum ${index + 1}`} />
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;



