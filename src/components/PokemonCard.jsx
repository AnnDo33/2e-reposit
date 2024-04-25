function PokemonCard() {
  return (
    <figure className="pokemonCard">
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt="" />
      ) : (
        <p>???</p>
      )}
     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Image du Pokémon" />
      <figcaption>
        <h1>Bulbasaur</h1>      
      </figcaption>
    </figure>
  )
}
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
  export default PokemonCard;

