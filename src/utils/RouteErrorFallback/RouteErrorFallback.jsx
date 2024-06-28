import React from 'react';
import { useNavigate } from 'react-router-dom';

const RouteErrorFallback = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>The page failed to load. Please try again later.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default RouteErrorFallback;
