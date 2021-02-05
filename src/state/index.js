import React from 'react';
import {makeObservable, action, observable, runInAction} from 'mobx';
import axios from 'axios';

class PokemonStore {
  pokemons = [];
  favoritePockemons = [];
  loadingState = null;

  constructor() {
    makeObservable(this, {
      pokemons: observable,
      favoritePockemons: observable,
      addToFavorite: action.bound,
      deleteFromFavorite: action.bound,
      fetchPokemons: action.bound,
    });
  }

  addToFavorite(pokemon) {
    const [pokemonsData] = this.pokemons.filter(({name}) => name === pokemon);
    this.favoritePockemons.push(pokemonsData);
  }

  deleteFromFavorite(pokemon) {
    this.favoritePockemons = this.favoritePockemons.filter(
      ({name}) => name !== pokemon,
    );
  }

  async fetchPokemons() {
    this.pokemons = [];
    this.loadingState = 'requested';
    try {
      const pokemonsList = await axios.get(
        'https://gabbyapp.com/pockemons/data.json',
      );
      runInAction(() => {
        this.pokemons = pokemonsList.data;
        this.loadingState = 'finished';
      });
    } catch (e) {
      runInAction(() => {
        this.loadingState = 'failed';
      });
    }
  }
}

const pokemonStore = new PokemonStore();
export const PokemonStoreContext = React.createContext(pokemonStore);
export const usePokemonStore = () => React.useContext(PokemonStoreContext);
