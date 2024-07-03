import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/path-to-logo.png" alt="Logo" className="h-8" />
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Universidad</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Salas</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contáctanos</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <img src="/path-to-user-photo.jpg" alt="User" className="h-10 w-10 rounded-full" />
        <div className="hidden md:flex flex-col">
          <span className="text-gray-700 font-semibold">Jhiru Ingaroca</span>
          <span className="text-gray-500 text-sm">Ingeniero Software</span>
        </div>
        <button className="w-10 h-10 bg-purple-500 rounded-md"></button>
        <button className="w-10 h-10 bg-purple-500 rounded-md"></button>
      </div>
    </header>
  );
};

export default Header;