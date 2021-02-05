import 'react-native-gesture-handler';
import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {usePokemonStore} from '../state/index.js';
import {Button, View, StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles/global.js';

const App = observer(({navigation}) => {
  const {
    pokemons,
    favoritePockemons,
    loadingState,
    fetchPokemons,
  } = usePokemonStore();

  if (loadingState === 'finished') {
    return (
      <View style={[styles.buttons, globalStyles.container]}>
        <View style={globalStyles.button}>
          <Button
            onPress={() =>
              navigation.navigate('PokemonsList', {data: pokemons})
            }
            title="All pokemons"
            accessibilityLabel="All pokemons list"
            style={globalStyles.buttonColor}
          />
        </View>
        <View style={globalStyles.button}>
          <Button
            onPress={() =>
              navigation.navigate('PokemonsList', {data: favoritePockemons})
            }
            title="Favorite pokemons"
            accessibilityLabel="Favorite pokemons list"
          />
        </View>
      </View>
    );
  } else {
    return (
      <>
        <Text style={styles.error}>Loading error</Text>
        <View style={globalStyles.button}>
          <Button
            onPress={async () => {
              await fetchPokemons();
            }}
            title="Load pokemons"
            accessibilityLabel="Load pokemons"
          />
        </View>
      </>
    );
  }
});

export default App;

const styles = StyleSheet.create({
  buttons: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  error: {
    marginTop: 20,
    textAlign: 'left',
    color: 'red',
    marginLeft: 20,
  },
});
