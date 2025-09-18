import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My React App
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This is a beautiful React application styled with Tailwind CSS
          </p>
          <div className="space-y-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
          <div className="mt-8 flex.justify-center space-x-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
