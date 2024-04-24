import React, { createContext, useState, useEffect } from 'react';

export const PokeContext = createContext();

const PokeProvider = ({children}) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    console.log(pokemonList); 
  }, [pokemonList]);

  const selectPokemon = (pokemonName) => {
    setSelectedPokemon(pokemonName);
  };

  return (
    <PokeContext.Provider value={{ pokemonList, selectPokemon, selectedPokemon }}>
      {children}
    </PokeContext.Provider>
  );
}

export default PokeProvider;