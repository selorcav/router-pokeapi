import React, { useContext, useState } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';
import { PokeContext } from '../context/PokeContext';
import { useNavigate } from 'react-router-dom';


const Pokemon = () => {

  const { pokemonList, selectPokemon } = useContext(PokeContext);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedName = event.target.value;
    setSelectedPokemon(selectedName);
    selectPokemon(selectedName);
  };

  const handleViewPokemon = () => {
    navigate(`/pokemon/${selectedPokemon.toLowerCase()}`);
    // console.log(`Ver Pokémon: ${selectedPokemon}`);
  };


  return (
    <>
      <div className="bg-slate-200 min-h-screen ">
        <div className=" md:w-6/12 mx-auto py-8 px-5">
          <div className="bg-white transition-all duration-500 w-full rounded-lg p-5 shadow hover:shadow-xl">
            <h2 className='font-extrabold text-sky-400 text-2xl text-center'>Selecciona un Pokémon</h2>
            <Box className="mt-12" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pokémon</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Pokémon"
                  value={selectedPokemon} 
                  onChange={handleChange}
                >
                  {pokemonList.map((pokemon, index) => (
                    <MenuItem key={index} value={pokemon.name}>
                      {pokemon.name}
                    </MenuItem>
                  ))}
                </Select>
                <div className="my-4 w-full flex">
                  <Button fullWidth variant="contained" onClick={handleViewPokemon}>Ver Pokémon</Button>
                </div>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pokemon