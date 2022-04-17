import React from "react";
import { useLocation, useParams } from "react-router-dom";

import PokemonData from "../assets/pokemon.json";
import CardComponent from "../components/Card/CardComponent";

const getPokemonById = (id) => {
  console.log(id);
  return PokemonData.filter((pokemon) => pokemon.id === id);
};

const PokemonComponent = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const pokemonData = getPokemonById(Number(id));

  return (
    <CardComponent
      title={pokemonData[0].name.english}
      text={`Type: ${pokemonData[0].type.toString()}`}
      items={Object.entries(pokemonData[0].base)}
    />
  );
};

export default PokemonComponent;
