import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {PokemonsList} from './screens/PokemonsList.js';
import {ProfileScreen} from './screens/ProfileScreen.js';
import StartScreen from './screens/StartScreen.js';
import {usePokemonStore} from './state';
import {useEffect} from 'react';

const Stack = createStackNavigator();

const App = observer(() => {
  const {fetchPokemons} = usePokemonStore();

  useEffect(() => {
    const loadPockemons = async () => {
      await fetchPokemons();
    };
    loadPockemons();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{title: 'WELCOME!'}}
        />
        <Stack.Screen
          name="PokemonsList"
          component={PokemonsList}
          options={{title: 'Pokemons list'}}
        />
        <Stack.Screen
          name="PokemonsProfile"
          component={ProfileScreen}
          options={{title: 'Pokemons profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
