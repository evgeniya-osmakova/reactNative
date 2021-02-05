import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const PokemonListItem = ({title, picture}) => (
  <View style={styles.item}>
    <Image
      source={{uri: `https://gabbyapp.com/${picture}`}}
      style={styles.img}
      resizeMode={'contain'}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default PokemonListItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#BC9CFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  img: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});
