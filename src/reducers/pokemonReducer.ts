import { Pokemon, PokemonWithProps } from "../types/pokemon.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export type PokemonState = {
  procurar: string;
  pokemonSelecionado: Pokemon | null;
  registro: PokemonWithProps[];
};

const initialState: PokemonState = {
  procurar: "",
  registro: [],
  pokemonSelecionado: null,
};

export const pokemonSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    buscarPokemon: (state, action: PayloadAction<string>) => {
      state.procurar = action.payload;
    },
    selecionarPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonSelecionado = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    adicionarPokemonNoRegistro: (
      state,
      action: PayloadAction<PokemonWithProps>
    ) => {
      state.registro = [
        action.payload,
        ...state.registro.filter(
          (pokemon) => pokemon.name !== action.payload.name
        ),
      ];
    },
  },
});

export const { buscarPokemon, selecionarPokemon, adicionarPokemonNoRegistro } =
  pokemonSlice.actions;

export const selectRegistro = (state: RootState) => state.pokemon.registro;
export const selectProcurar = (state: RootState) => state.pokemon.procurar;
export const selectPokemonSelecionado = (state: RootState) =>
  state.pokemon.pokemonSelecionado;

export default pokemonSlice.reducer;
