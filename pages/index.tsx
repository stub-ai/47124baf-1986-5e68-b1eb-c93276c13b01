import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const Home = () => {
  const handleAccept = () => {
    fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requestor: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = data.url;
      });
  };

  const handleDecline = () => {
    alert('You are not authorized to proceed.');
  };

  return (
    <div>
      <Header />
      <Login onAccept={handleAccept} onDecline={handleDecline} />
    </div>
  );
};

export default Home;