import React from 'react';

function PokemonCard(props) { 
  console.log(props);
  const { pokemon } = props; 

  return (
    <figure className="pokemonCard"> 
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt="" /> 
      ) : (
        <p>???</p>
      )}
      <figcaption>
        <h1>{pokemon.name}</h1> 
      </figcaption>
    </figure>
  );
}

export default PokemonCard; 
