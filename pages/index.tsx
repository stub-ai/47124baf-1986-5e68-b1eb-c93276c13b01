import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const Home = () => {
  const handleAccept = () => {
    const url = new URL(window.location.href);
    url.searchParams.append('agreement', 'yes');
    window.location.href = url.toString();
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