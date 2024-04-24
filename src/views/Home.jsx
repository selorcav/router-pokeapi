import React from 'react'

const Home = () => {
  return (
    <div className="bg-slate-200 min-h-screen ">
      <div className=" md:w-6/12 mx-auto py-8 px-5">
        <div className="bg-white transition-all duration-500 w-full rounded-lg p-5 shadow hover:shadow-xl">
          <h2 className='font-extrabold text-sky-400 text-2xl text-center'>BIENVENIDO MAESTRO POKÉMON</h2>
          <img src="./pokemon-party.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home