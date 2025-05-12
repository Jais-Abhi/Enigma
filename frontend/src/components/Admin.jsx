import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uniqueKey, setUniqueKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { username, password, uniqueKey });
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border-2 border-amber-600 w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Login as Admin
          </h2>

          <div className="mb-4">
            <label htmlFor="username" className="text-xl text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-xl text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="uniqueKey" className="text-xl text-gray-700">Unique Key:</label>
            <input
              type="text"
              id="uniqueKey"
              className="w-full p-3 border-2 border-gray-300 rounded-md mt-2"
              value={uniqueKey}
              onChange={(e) => setUniqueKey(e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg text-xl font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Enter Admin Panel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
