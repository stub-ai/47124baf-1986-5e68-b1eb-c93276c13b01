import React from 'react';

interface LoginProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Login: React.FC<LoginProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mb-4">Please accept my agreement</p>
      <div>
        <button
          className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
          onClick={onAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onDecline}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default Login;