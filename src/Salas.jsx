import React from 'react';
import { useState, useEffect } from 'react'
import CardSala from './CardSala'
import Header from './Header';


const Salas = () => {
  const [salas, setSalas] = useState([])

  const getSalas = async () => {
    const allSalas = await fetch('http://localhost:8000/salas')
    const salasJson = await allSalas.json()
    setSalas(salasJson)
    console.log(salasJson)
  }

  useEffect(() => {
    getSalas()

    const interval = setInterval(() => {
      getSalas()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Header />
    <h1 className="text-3xl font-bold mb-4">Salas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {salas.length === 0 ? (
          <h2 className="col-span-full text-center text-xl">Loading...</h2>
        ) : (
          salas.map((sala) => (
            <CardSala
              key={sala.id}
              id={sala.id}
              image={"sala.png"}
              title={sala.nombre}
              time={sala.horario}
              registered={6}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Salas;