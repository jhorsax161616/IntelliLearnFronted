import React from 'react';

const CardSala = ({ id, image, title, time, registered}) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <img src="book.png" alt="Clock Icon" className="w-5 h-5 mr-1" />
          Hora: {time}
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <img src="user.png" alt="People Icon" className="w-5 h-5 mr-1" />
          Registrados: {registered}
        </div>
        <form action={`http://localhost:8000/salas/${id}`} method="get">
          <button type="submit" className="w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800">
            Ver Sala
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardSala;