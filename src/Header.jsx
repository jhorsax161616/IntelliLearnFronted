import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const Header = () => {

  const [token, setToken] = useContext(UserContext);

  const handleLogout = () => {
    setToken(undefined);
    localStorage.removeItem('awesomeLeadsToken');
  }

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/assets/logo.svg" alt="Logo" className="h-8" />
        <nav className="hidden md:flex space-x-4">
          <Link to="#" className="text-gray-600 hover:text-gray-800">Universidad</Link>
          <Link to="/salas" className="text-gray-600 hover:text-gray-800">Salas</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-800">Cursos</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {token ? (
          <button
            onClick={handleLogout}
            className="inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-red-500 to-red-800 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-300 ease-in-out"
          >
            Cerrar Sesión
          </button>
        ) : (
          <>
            <Link
              to="/register"
              className="relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group"
            >
              Registrarse
              <svg
                className="icon icon-tabler icon-tabler-arrow-up-right"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17 7l-10 10"></path>
                <path d="M8 7l9 0l0 9"></path>
              </svg>
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
              ></span>
            </Link>
            <Link
              to="/login"
              className="inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-300 ease-in-out"
            >
              Iniciar Sesión
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;