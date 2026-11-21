
import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  SectionList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const datasource = [
  {
    title: 'ELECTRIC',
    bgcolor: '#FFE45C',
    icon: 'bolt',
    data: [
      {
        key: 'Pikachu',
        picture: 'https://images.pokemontcg.io/sv3pt5/25.png',
      },
      {
        key: 'Voltorb',
        picture: 'https://images.pokemontcg.io/sv3pt5/100.png',
      },
    ],
  },
  {
    title: 'FIRE',
    bgcolor: '#FF9875',
    icon: 'fire',
    data: [
      {
        key: 'Charmander',
        picture: 'https://images.pokemontcg.io/sv3pt5/4.png',
      },
      {
        key: 'Growlithe',
        picture: 'https://images.pokemontcg.io/sv3pt5/58.png',
      },
    ],
  },
  {
    title: 'WATER',
    bgcolor: '#85C9F5',
    icon: 'droplet',
    data: [
      {
        key: 'Squirtle',
        picture: 'https://images.pokemontcg.io/sv3pt5/7.png',
      },
      {
        key: 'Psyduck',
        picture: 'https://images.pokemontcg.io/sv3pt5/54.png',
      },
    ],
  },
];

const MyApp = () => {

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => Alert.alert(item.key)}
      >
        <Text style={styles.pokemonName}>
          {item.key}
        </Text>

        <Image
          source={{uri: item.picture}}
          style={styles.pokemonImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        POKEMON CARD COLLECTION
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Add Pokemon"
          onPress={() => Alert.alert(
            'Add Pokemon',
            'This feature will be added next lesson.'
          )}
        />
      </View>

      <SectionList
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={({section: {title, bgcolor, icon}}) => (
          <View style={[styles.sectionHeader, {backgroundColor: bgcolor}]}>
            <FontAwesome6 name={icon} size={20} color="black"/>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },

  buttonContainer: {
    marginHorizontal: 15,
    marginBottom: 10,
  },

  list: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#777777',
    padding: 10,
  },

  pokemonName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  pokemonImage: {
    width: 110,
    height: 150,
  },
});

export default MyApp;
