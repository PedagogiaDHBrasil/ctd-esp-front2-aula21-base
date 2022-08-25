import ListadoPokemons from "./components/ListadoPokemons";
import VerPokemon from "./components/VerPokemon";

import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";

import { Provider } from "react-redux";
import { store } from "./store/store";
import RegistroPokemon from "./components/RegistroPokemon";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Pokédex</h1>
        <div id="caixaDeEntrada">
          <div
            style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          >
            <BuscarPokemon />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ListadoPokemons />
              <VerPokemon />
              <RegistroPokemon />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
