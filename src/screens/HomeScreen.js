import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  FlatList
} from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Colors'
import GenreCard from '../components/GenreCard'
import ItemSeparator from '../components/ItemSeparator'
import MovieCard from '../components/MovieCard'

const Genres = ['All', 'Action', 'Comedy', 'Romance', 'Horror', 'Sci-Fi']

const HomeScreen = () => {

  const [activeGenre, setActiveGenre] = useState('All')

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar 
        style="auto" 
        translucent={false}
        backgroundColor={Colors.background}
        barStyle="dark-content"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList 
          data={Genres} 
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item} 
          ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
          ListHeaderComponent={() => <ItemSeparator width={20}/>}
          ListFooterComponent={() => <ItemSeparator width={20}/>}
          renderItem={({ item }) => 
            <GenreCard 
              genreName={item}
              active={item === activeGenre ? true : false}
              onpress={setActiveGenre}
            />
          }
        />
      </View>
      <View>
        <FlatList
          data={Genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item} 
          ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
          ListHeaderComponent={() => <ItemSeparator width={20}/>}
          ListFooterComponent={() => <ItemSeparator width={20}/>}
          renderItem={({ item }) => 
            <MovieCard
            />
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  headerTitle: {
    fontSize: 28
  },
  headerSubTitle: {
    fontSize: 13,
    color: Colors.active
  },
  genreListContainer: {
    paddingVertical: 10
  }
})

export default HomeScreen