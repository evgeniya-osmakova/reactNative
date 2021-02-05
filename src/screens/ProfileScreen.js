import React from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';
import {usePokemonStore} from '../state';
import {globalStyles} from '../styles/global.js';

export const ProfileScreen = ({route, navigation}) => {
  const {picture, name, description, height, weight, type} = route.params.data;

  const {
    addToFavorite,
    deleteFromFavorite,
    favoritePockemons,
  } = usePokemonStore();

  const isPokemonInFavorites =
    favoritePockemons.filter(({name: pokemonName}) => name === pokemonName)
      .length > 0;

  const renderRow = (cells) => {
    return cells.map((cell) => (
      <View style={styles.cell} key={cell.title}>
        <Text style={styles.cellTitle}>{cell.title}</Text>
        <Text style={styles.cellValue}>{cell.value}</Text>
      </View>
    ));
  };

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Image
        source={{uri: `https://gabbyapp.com/${picture}`}}
        style={styles.avatar}
        resizeMode={'contain'}
      />
      {renderRow([
        {title: 'name', value: name},
        {title: 'height', value: height},
        {title: 'weight', value: weight},
        {title: 'type', value: type},
        {title: 'description', value: description},
      ])}
      <View style={globalStyles.button}>
        {isPokemonInFavorites ? (
          <Button
            onPress={() => {
              deleteFromFavorite(name);
              navigation.navigate('Start');
            }}
            title="Delete from favorite"
            accessibilityLabel="Delete from favorite"
          />
        ) : (
          <Button
            onPress={() => {
              addToFavorite(name);
              navigation.navigate('Start');
            }}
            title="Add to favorite"
            accessibilityLabel="Add to favorite"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderColor: '#BC9CFF',
    borderWidth: 5,
  },
  cell: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cellTitle: {
    fontSize: 13,
    color: '#b0b0b0',
  },
  cellValue: {
    marginTop: 10,
    fontSize: 16,
    color: '#2e2e2e',
  },
});
