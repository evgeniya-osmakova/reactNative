import React from 'react';
import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import PokemonListItem from '../components/PokemonListItem.js';
import {globalStyles} from '../styles/global.js';

export const PokemonsList = ({navigation, route}) => {
  const {data} = route.params;

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonsProfile', {data: item})}>
      <PokemonListItem title={item.name} picture={item.picture} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
