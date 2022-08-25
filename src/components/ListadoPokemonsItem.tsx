import React from "react";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";

interface ListadoPokemonsItemProps {
  pokemon: Pokemon;
  selecionarPokemon: (pokemon: Pokemon) => void;
}

/**
 * Ver um pokemon com seu nome e url
 *
 * Ex:
 * <pre>
 *     <ListadoPokemonsItem pokemon={pokemon}
 *                             selecionarPokemon={(pokemon) => {}}/>
 *
 * </pre>
 *
 * @author Digital House
 * @param pokemon o pokémon para mostrar
 * @param selecionarPokemon uma função que é executada quando você clica no pokemon
 */
const ListadoPokemonsItem = ({
  pokemon,
  selecionarPokemon,
}: ListadoPokemonsItemProps) => (
  <div onClick={() => selecionarPokemon(pokemon)}>
    <strong>{pokemon.name}</strong>
    <small> #{extractPokemonId(pokemon.url)}</small>
  </div>
);

export default ListadoPokemonsItem;
