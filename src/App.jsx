import React from 'react'
import { Route, Routes } from "react-router-dom";


import Home from './views/Home'
import Pokemon from './views/Pokemon'
import PokemonDetail from './views/PokemonDetail'
import { NavBar } from './components/NavBar';

import PokeProvider  from './context/PokeContext';

const App = () => {
  return (
    <>
      <PokeProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
      </PokeProvider>
    </>
  )
}

export default App