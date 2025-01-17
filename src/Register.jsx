import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [dataForm, setDataForm] = useState({})
  let navigate = useNavigate()

  const handlerFormInput = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  const handlerFormSubmit = async (e) => {
    e.preventDefault()
    
    await fetch('http://localhost:8000/estudiantes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })

    return navigate('/')
  }

    return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Únete a IntelliLearn
        </div>
        <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Ingresa tus datos correctamente
        </div>

        <div class="mt-10">
          <form action="#" onSubmit={ handlerFormSubmit }>
            <div class="flex flex-col mb-5">
              <label
                for="nombres"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Nombres:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-user text-blue-500"></i>
                </div>

                <input
                  id="nombres"
                  type="text"
                  name="nombres"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Ingresa tu nombre"
                  required
                  onChange={ handlerFormInput }
                  value={dataForm.nombres}
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <label
                for="apellidos"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Apellidos:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-user text-blue-500"></i>
                </div>

                <input
                  id="apellidos"
                  type="text"
                  name="apellidos"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Ingresa tus Apellidos"
                  required
                  onChange={ handlerFormInput }
                  value={dataForm.apellidos}
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Correo:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="email"
                  type="email"
                  name="correo"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Ingresa tu correo institucional"
                  required
                  onChange={ handlerFormInput }
                  value={dataForm.correo}
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
                <label
                    for="universidad"
                    class="mb-1 text-xs tracking-wide text-gray-600"
                >Universidad:</label>
                <div class="relative">
                    <div
                    class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                    "
                    >
                    <i class="fas fa-university text-blue-500"></i>
                    </div>

                    <select
                    id="universidad"
                    name="universidad_id"
                    class="
                        text-sm
                        placeholder-gray-500
                        pl-10
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                    "
                    placeholder="Selecciona tu universidad"
                    onChange={ handlerFormInput }
                    value={dataForm.universidad_id}
                    >
                    <option value="" disabled selected>Selecciona tu universidad</option>
                    <option value={1}>Universidad Continental</option>
                    <option value={2}>UPLA</option>
                    <option value={3}>UNCP</option>
                    </select>
                </div>
                </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Contraseña:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i class="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="hashed_password"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                  required
                  onChange={ handlerFormInput }
                  value={dataForm.hashed_password}
                />
              </div>
            </div>

            <div class="flex w-full">
              <button
                type="submit"
                class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span class="mr-2 uppercase">Registrarse</span>
                <span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <a
          href="#"
          target="_blank"
          class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span class="ml-2"
            >You have an account?
            <Link
              to="/register"
              class="text-xs ml-2 text-blue-500 font-semibold"
              >Login here</Link>
            </span>
        </a>
      </div>
    </div>
    );
}

export default Register;