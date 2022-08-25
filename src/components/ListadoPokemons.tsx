import React, { useEffect, useState } from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import { buscarPokemons } from "../queries/pokemon.queries";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selecionarPokemon, selectProcurar } from "../reducers/pokemonReducer";

/**
 * Veja uma lista de pokémons
 *
 * Ex:
 * <pre>
 *     <ListadoPokemons />
 *
 * </pre>
 *
 * @author Digital House
 */
const ListadoPokemons = () => {
  const procurar = useAppSelector(selectProcurar);
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (procurar) {
      setLoading(true);
      buscarPokemons(procurar).then((data) => {
        setPokemons(data);
        setLoading(false);
      });
    }
  }, [procurar]);

  const onSelecionarPokemon = (pokemon: Pokemon) => {
    dispatch(selecionarPokemon(pokemon));
  };

  if (isLoading) return <div>Carregando Pokemons...</div>;
  return (
    <div className="listado">
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => (
          <ListadoPokemonsItem
            pokemon={pokemon}
            selecionarPokemon={onSelecionarPokemon}
            key={extractPokemonId(pokemon.url)}
          />
        ))}
    </div>
  );
};

export default ListadoPokemons;
