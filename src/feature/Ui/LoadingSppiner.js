import { Fragment } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="space-y-3">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
