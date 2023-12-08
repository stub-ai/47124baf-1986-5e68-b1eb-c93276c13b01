import React, { useState } from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const Home = () => {
  const [message, setMessage] = useState('');

  const handleAccept = () => {
    window.location.href = `${window.location.href}?agreement=yes`;
  };

  const handleDecline = () => {
    setMessage('You are not authorized to proceed.');
  };

  return (
    <div>
      <Header />
      <Login onAccept={handleAccept} onDecline={handleDecline} />
      {message && <p className="text-center mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default Home;