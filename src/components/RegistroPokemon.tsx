import React from "react";
import { PokemonWithProps } from "../types/pokemon.types";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../store/store";
import { selecionarPokemon, selectRegistro } from "../reducers/pokemonReducer";

const RegistroPokemon = () => {
  const pokemons = useAppSelector(selectRegistro);
  const dispatch = useDispatch();
  const onSelectPokemon = (pokemon: PokemonWithProps) => {
    dispatch(selecionarPokemon(pokemon));
  };

  return (
    <div className="listado">
      <h3>Registro</h3>
      {pokemons &&
        pokemons.map((pokemon: PokemonWithProps) => (
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => onSelectPokemon(pokemon)}
          >
            <img src={pokemon.sprites.front_default} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{pokemon.name}</p>
              <small>#{pokemon.id}</small>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RegistroPokemon;
