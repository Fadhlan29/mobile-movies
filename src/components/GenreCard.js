import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const {height, width} = Dimensions.get('screen');

const setWidth = w => (width / 100) * w;

const GenreCard = ({genreName, active, onpress}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: active ? Colors.active : Colors.white,
      }}
      activeOpacity={0.5}
      onPress={() => onpress(genreName)}> 
      <Text
        style={{
          ...styles.genreText,
          color: active ? Colors.white : Colors.black,
        }}>
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Colors.white,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25),
  },
  genreText: {
    fontSize: 13,
    color: Colors.active,
    fontWeight: 'bold'
  },
});

export default GenreCard;
