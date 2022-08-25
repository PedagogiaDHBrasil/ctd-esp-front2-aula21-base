import React, { FC, useEffect, useState } from "react";
import { getPokemon } from "../queries/pokemon.queries";
import { Pokemon, PokemonWithProps } from "../types/pokemon.types";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  adicionarPokemonNoRegistro,
  selectPokemonSelecionado,
} from "../reducers/pokemonReducer";

type VistaPokemonDetalheProps = {
  pokemonSelecionado: Pokemon;
};

const VerPokemonDetalhe: FC<VistaPokemonDetalheProps> = ({
  pokemonSelecionado,
}: VistaPokemonDetalheProps) => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokemonWithProps | null>(null);

  useEffect(() => {
    if (pokemonSelecionado) {
      setLoading(true);
      getPokemon(pokemonSelecionado.name).then((data) => {
        setPokemon(data);
        setLoading(false);
        dispatch(adicionarPokemonNoRegistro(data));
      });
    }
  }, [pokemonSelecionado, pokemonSelecionado?.name]);

  if (isLoading) return <div>Carregando Pokemon...</div>;

  return pokemon ? (
    <div className="verPokemon">
      <h4>Pokemon: {pokemon.name}</h4>
      <h5>#{pokemon.id}</h5>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    </div>
  ) : null;
};

const VerPokemon = () => {
  // Utilizamos useQuery para obtener el pokemon que viene de redux
  // @ts-ignore
  const pokemonSelecionado = useAppSelector(selectPokemonSelecionado);
  if (!pokemonSelecionado) return <div className="verPokemon" />;
  //
  return <VerPokemonDetalhe pokemonSelecionado={pokemonSelecionado} />;
};

export default VerPokemon;
