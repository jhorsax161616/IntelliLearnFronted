import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <>
        <Header />
        <div className="font-sans bg-gray-100 text-gray-800 m-0 p-0">
      <section className="flex justify-between items-center p-12 bg-white my-5">
        <div className="max-w-1/2">
          <h1 className="text-4xl text-gray-800">
            Únete A Nuestra Comunidad <span className="text-purple-600">Intellilearn</span>
          </h1>
          <p>Repasa Tus Asignaturas Colaborativamente</p>
          <div className="flex items-center mt-5">
            <button className="py-2 px-4 bg-purple-600 text-white border-none rounded cursor-pointer">
              Empieza Ahora
            </button>
            <div>
              <img src="arrow.png" alt="Icono de flecha" className="ml-2" />
            </div>
          </div>
        </div>
        <div>
          <img src="estudianteBody.png" alt="Imagen de estudiante" className="max-w-full h-auto" />
        </div>
      </section>

      <section className="p-5">
        <div className="mb-5">
          <h2 className="text-2xl text-gray-800 mb-2">Por qué <span className="text-purple-600">IntelliLearn</span>?</h2>
          <p className="text-base text-gray-600">
            IntelliLearn es una plataforma innovadora diseñada para los estudiantes de las Universidades. Facilita la organización y el acceso a recursos educativos, eliminando barreras de comunicación y coordinación. IntelliLearn centraliza la programación y el acceso a grupos de estudio, optimizando el potencial de aprendizaje colaborativo.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 mt-5">
          <div className="flex-1 flex flex-col items-center bg-white p-5 rounded shadow-md">
            <img src="beneficio1.png" alt="Icono de estudiante" className="w-15 h-15 mb-2" />
            <h3 className="text-lg text-gray-800">Organización Eficiente</h3>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white p-5 rounded shadow-md">
            <img src="beneficio2.png" alt="Icono de estudiante" className="w-15 h-15 mb-2" />
            <h3 className="text-lg text-gray-800">Acceso a Recursos</h3>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white p-5 rounded shadow-md">
            <img src="beneficio3.png" alt="Icono de estudiante" className="w-15 h-15 mb-2" />
            <h3 className="text-lg text-gray-800">Comunicación en Tiempo Real</h3>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white p-5 rounded shadow-md">
            <img src="beneficio4.png" alt="Icono de estudiante" className="w-15 h-15 mb-2" />
            <h3 className="text-lg text-gray-800">Mejora del Rendimiento Académico</h3>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white p-5 rounded shadow-md">
            <img src="beneficio5.png" alt="Icono de estudiante" className="w-15 h-15 mb-2" />
            <h3 className="text-lg text-gray-800">Notificaciones y Recordatorios</h3>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white p-5 rounded shadow-md">
            <img src="beneficio6.png" alt="Icono de estudiante" className="w-15 h-15 mb-2" />
            <h3 className="text-lg text-gray-800">Seguridad y Privacidad</h3>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white p-5 rounded shadow-md">
            <img src="beneficio7.png" alt="Icono de estudiante" className="w-15 h-15 mb-2" />
            <h3 className="text-lg text-gray-800">Interfaz Amigable</h3>
          </div>
        </div>

        <div className="flex mt-5 gap-5">
          <img src="consiste.webp" alt="Imagen de estudiante" className="max-w-full h-auto rounded" />
          <div className="max-w-1/2">
            <h2 className="text-2xl mb-2">¿Para qué está creada la página IntelliLearn?</h2>
            <p className="text-base text-gray-600 mb-2">
              IntelliLearn se ha creado para resolver la falta de una plataforma centralizada para la organización de repasos y reforzamientos académicos. Permite a los estudiantes programar y unirse a salas de estudio virtuales, compartir recursos y colaborar en tiempo real, apoyando su éxito académico.
            </p>
            <h2 className="text-2xl mb-2">Organización de Salas de Estudio</h2>
            <p className="text-base text-gray-600">
              La plataforma permite a los estudiantes crear y programar salas de estudio según sus necesidades. Cada sala puede tener una descripción detallada, una imagen representativa y un horario específico para facilitar la participación de otros estudiantes.
            </p>
          </div>
        </div>
      </section>

      <section className="p-5 bg-white my-5 text-center">
        <h2 className="text-2xl mb-2">Nuestros <span className="text-purple-600">Sponsors</span></h2>
        <p className="text-base text-gray-600 mb-5">
          En IntelliLearn, contamos con el apoyo invaluable de nuestros patrocinadores, quienes han sido fundamentales para el desarrollo y éxito de nuestra plataforma. Gracias a su colaboración, hemos podido crear un espacio educativo innovador y accesible para todos los estudiantes de la Universidad Continental. Nos enorgullece trabajar con organizaciones comprometidas con la educación y la tecnología, quienes comparten nuestra visión de facilitar el aprendizaje colaborativo y el acceso a recursos académicos de calidad.
        </p>
        <div className="flex justify-center flex-wrap gap-5">
          <img src="universidadcontinental.png" alt="Logo de sponsor" className="max-w-25 h-auto" />
          <img src="cisco.jpg" alt="Logo de sponsor" className="max-w-25 h-auto" />
          <img src="fundetec.jpg" alt="Logo de sponsor" className="max-w-25 h-auto" />
          <img src="globallearning.jpg" alt="Logo de sponsor" className="max-w-25 h-auto" />
          <img src="google.png" alt="Logo de sponsor" className="max-w-25 h-auto" />
          <img src="microsoft.jpg" alt="Logo de sponsor" className="max-w-25 h-auto" />
        </div>
      </section>

      <section className="flex justify-between items-center p-5 bg-white my-5">
        <div>
          <h2 className="text-2xl text-gray-800">Entérate de todas las salas de repaso disponibles en <span className="text-purple-600">Intellilearn</span> de tu ciclo</h2>
        </div>
        <div className="flex items-center gap-2">
          <input type="email" placeholder="Ingresa tu correo electrónico" className="py-2 px-4 border border-gray-300 rounded w-50" />
          <button className="py-2 px-4 bg-purple-600 text-white border-none rounded cursor-pointer">Enviar</button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;