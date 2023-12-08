import React, { MouseEventHandler } from 'react';

interface LoginProps {
  onAccept: MouseEventHandler<HTMLButtonElement>;
  onDecline: MouseEventHandler<HTMLButtonElement>;
}

const Login: React.FC<LoginProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mb-4 text-xl">Please accept my agreement</p>
      <div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={onAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={onDecline}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default Login;