import {StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieCard = () => {
  const [liked, setLiked] = useState(false)

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
          <Icon 
          name={liked ? 'cards-heart' : 'heart-outline'}
          size={25}
          color={liked ? Colors.hearth : Colors.white}
          style={{ position: 'absolute', bottom: 10, left: 10 }}/>
        </TouchableNativeFeedback>
      </View>
      <View>
        <Text style={styles.movieTitle} numberOfLines={3}>URI - Surgical Strike</Text>
        <View style={styles.movieSubTitleContainer}>
          <Text style={styles.movieSubTitle}>Hindi | (U/A)</Text>
          <View style={styles.rowAndCenter}>
            <Icon 
                name="cards-heart" 
                size={17} 
                color={Colors.hearth}
                style={{ marginRight: 5 }} />
            <Text style={styles.movieSubTitle}>90%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.active,
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    fontWeight: 'bold',
    color: Colors.gray,
    paddingVertical: 2,
    marginTop: 5,
    width: 230
  },
  movieSubTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  movieSubTitle: {
    fontSize: 12,
    fontWeight: '600'
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MovieCard;
