import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../reducers/pokemonReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
// Inferir os tipos de `RootState` e `AppDispatch` da store
export type RootState = ReturnType<typeof store.getState>;
// Tipo inferido: {pokemon: PokemonState}
export type AppDispatch = typeof store.dispatch;

// Use os seguintes hooks na aplicação em vez do simples Redux `useDispatch` e `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
