import React, { useEffect, useState } from 'react';
import { Card, CardMedia, Chip, Stack, CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';

const getTypeColor = (type) => {
  switch (type) {
    case 'normal':
      return 'bg-neutral';
    case 'fire':
      return 'bg-orange';
    case 'water':
      return 'bg-blue';
    case 'grass':
      return 'bg-green';
    case 'electric':
      return 'bg-yellow';
    case 'ground':
      return 'bg-amber';
    case 'rock':
      return 'bg-stone';
    case 'flying':
      return 'bg-sky';
    case 'poison':
      return 'bg-violet';
    case 'bug':
      return 'bg-lime';
    case 'fighting':
      return 'bg-red';
    case 'psychic':
      return 'bg-purple';
    case 'dark':
      return 'bg-gray';
    case 'fairy':
      return 'bg-pink';
    case 'steel':
      return 'bg-zinc';
    case 'dragon':
      return 'bg-slate';
    case 'ghost':
      return 'bg-indigo';
    case 'ice':
      return 'bg-cyan';
    default:
      return 'bg-neutral';
  }
}

const PokemonDetail = () => {
  const { id } = useParams();  // Obtener el id del Pokémon de la ruta dinámica
  const [pokemonData, setPokemonData] = useState(null);  // Cambiado a null para mejorar la comprobación de existencia

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemonData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };
    fetchPokemonDetail();
  }, [id]);  // Ejecutar el efecto cada vez que el id cambie

  return (
    <div>
      <div className="md:w-6/12 w-10/12 mx-auto mt-12">
        {pokemonData ? (
          <Card className={`!overflow-visible ${getTypeColor(pokemonData.types[0].type.name)}-500 mt-4 rounded hover:shadow-2xl transition-all hover:cursor-pointer h-full`}>
            <CardActionArea className='h-full'>
              <div className='overflow-visible  my-custom-background rounded'>
                <div className="flex w-full justify-center relative">
                  <div className={`${getTypeColor(pokemonData.types[0].type.name)}-700 absolute w-10/12 p-2 rounded-md shadow-xl -top-8 z-50`}>
                    <p className='afacad-600 text-white text-xl font-bold text-center'>
                      #{pokemonData.id} {pokemonData.name.toUpperCase()}
                    </p>
                  </div>
                </div>

                <CardMedia
                  component="img"
                  height="140"
                  image={pokemonData.sprites.other.dream_world.front_default}
                  alt="Pokemon img"
                  className='!w-6/12 px-4 pt-8 mx-auto bg-transparent '
                />

                <Stack direction="row" className='justify-center mt-4 p-8' spacing={1}>
                  {pokemonData.types.map((data, index) => (
                    <Chip key={index} className={`${getTypeColor(data.type.name)}-300 shadow afacad-600`} label={data.type.name.toUpperCase()} />
                  ))}
                </Stack>
                <div className="flex w-full flex-wrap bg-slate-900 rounded opacity-60">
                  {pokemonData.stats.map((stat, index) => (
                    <div className="w-4/12 my-4 text-center text-white" key={index}>
                      <p><span className='font-bold text-sm afacad-700'> {stat.stat.name.toUpperCase()}:</span>
                      <br /> <span className='afacad-400'> {stat.base_stat}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </CardActionArea>
          </Card>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PokemonDetail;
